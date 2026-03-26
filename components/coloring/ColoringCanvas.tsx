'use client'
import { useRef, useState, useEffect, useCallback } from 'react'

const OBJ_SIZE = 500
const BACKDROP_W = 750
const BACKDROP_H = 500

const COLORS = [
  '#FF0000', '#FF6600', '#FFCC00', '#00CC00', '#0066FF',
  '#9900CC', '#FF69B4', '#00CCCC', '#FF3366', '#66CC00',
  '#FF9900', '#3399FF', '#CC0099', '#00AA44', '#FF4444',
  '#884400', '#888888', '#000000', '#FFFFFF', '#FFD700',
]

interface ColoringCanvasProps {
  svgString: string
  itemName: string
  isBackdrop?: boolean
  onSave: (coloredData: string, thumbnail: string) => void
  onCancel: () => void
}

export default function ColoringCanvas({ svgString, itemName, isBackdrop = false, onSave, onCancel }: ColoringCanvasProps) {
  const CW = isBackdrop ? BACKDROP_W : OBJ_SIZE
  const CH = isBackdrop ? BACKDROP_H : OBJ_SIZE

  const displayRef = useRef<HTMLCanvasElement>(null)
  const colorRef = useRef<HTMLCanvasElement>(null)
  const outlineRef = useRef<HTMLCanvasElement>(null)
  const selectionRef = useRef<HTMLCanvasElement>(null)
  const selectedPixelsRef = useRef<Uint8Array | null>(null)

  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [mode, setMode] = useState<'fill' | 'brush'>('fill')
  const [brushSize, setBrushSize] = useState(12)
  const [loaded, setLoaded] = useState(false)
  const [saving, setSaving] = useState(false)
  const [hasSelection, setHasSelection] = useState(false)
  const isPainting = useRef(false)
  const historyRef = useRef<ImageData[]>([])

  const composite = useCallback(() => {
    const display = displayRef.current
    const color = colorRef.current
    const outline = outlineRef.current
    const selection = selectionRef.current
    if (!display || !color || !outline || !selection) return
    const ctx = display.getContext('2d')!
    ctx.clearRect(0, 0, CW, CH)
    ctx.drawImage(color, 0, 0)
    ctx.drawImage(selection, 0, 0)
    ctx.drawImage(outline, 0, 0)
  }, [CW, CH])

  useEffect(() => {
    const color = colorRef.current
    const outline = outlineRef.current
    if (!color || !outline) return

    const colorCtx = color.getContext('2d')!
    const outlineCtx = outline.getContext('2d')!

    colorCtx.fillStyle = 'white'
    colorCtx.fillRect(0, 0, CW, CH)

    const img = new Image()
    img.onload = () => {
      const tmp = document.createElement('canvas')
      tmp.width = CW; tmp.height = CH
      const tmpCtx = tmp.getContext('2d')!
      tmpCtx.fillStyle = 'white'
      tmpCtx.fillRect(0, 0, CW, CH)
      tmpCtx.drawImage(img, 0, 0, CW, CH)
      URL.revokeObjectURL(img.src)

      const imgData = tmpCtx.getImageData(0, 0, CW, CH)
      const d = imgData.data
      const outlineData = outlineCtx.createImageData(CW, CH)
      const od = outlineData.data

      for (let i = 0; i < d.length; i += 4) {
        const brightness = (d[i] + d[i + 1] + d[i + 2]) / 3
        if (brightness < 100 && d[i + 3] > 100) {
          od[i] = d[i]; od[i + 1] = d[i + 1]; od[i + 2] = d[i + 2]; od[i + 3] = d[i + 3]
        }
      }
      outlineCtx.putImageData(outlineData, 0, 0)
      composite()
      setLoaded(true)
    }
    img.onerror = () => setLoaded(true)
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    img.src = URL.createObjectURL(blob)
  }, [svgString, CW, CH, composite])

  const getCoords = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = displayRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = CW / rect.width
    const scaleY = CH / rect.height
    let clientX: number, clientY: number
    if ('touches' in e) {
      e.preventDefault()
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = (e as React.MouseEvent).clientX
      clientY = (e as React.MouseEvent).clientY
    }
    return {
      x: Math.max(0, Math.min(CW - 1, Math.floor((clientX - rect.left) * scaleX))),
      y: Math.max(0, Math.min(CH - 1, Math.floor((clientY - rect.top) * scaleY))),
    }
  }

  const parseColor = (color: string): [number, number, number] => {
    const tmp = document.createElement('canvas')
    tmp.width = tmp.height = 1
    const ctx = tmp.getContext('2d')!
    ctx.fillStyle = color
    ctx.fillRect(0, 0, 1, 1)
    const d = ctx.getImageData(0, 0, 1, 1).data
    return [d[0], d[1], d[2]]
  }

  // BFS to find connected region pixels — returns a Uint8Array mask
  const findRegion = useCallback((startX: number, startY: number): Uint8Array | null => {
    const color = colorRef.current
    const outline = outlineRef.current
    if (!color || !outline) return null

    const colorCtx = color.getContext('2d')!
    const outlineCtx = outline.getContext('2d')!
    const colorData = colorCtx.getImageData(0, 0, CW, CH)
    const outlineData = outlineCtx.getImageData(0, 0, CW, CH)
    const cd = colorData.data
    const od = outlineData.data

    const si = (startY * CW + startX) * 4
    if (od[si + 3] > 50) return null // clicked on outline

    const [sr, sg, sb] = [cd[si], cd[si + 1], cd[si + 2]]
    const tolerance = 40
    const matches = (idx: number) =>
      Math.abs(cd[idx] - sr) <= tolerance &&
      Math.abs(cd[idx + 1] - sg) <= tolerance &&
      Math.abs(cd[idx + 2] - sb) <= tolerance

    const mask = new Uint8Array(CW * CH)
    const visited = new Uint8Array(CW * CH)
    const queue: number[] = []
    const sp = startY * CW + startX
    queue.push(sp); visited[sp] = 1

    let head = 0
    while (head < queue.length) {
      const pos = queue[head++]
      const idx = pos * 4
      if (od[idx + 3] > 50) continue
      mask[pos] = 1
      const px = pos % CW, py = Math.floor(pos / CW)
      if (px > 0) { const n = pos - 1; if (!visited[n] && matches(n * 4) && od[n * 4 + 3] <= 50) { visited[n] = 1; queue.push(n) } }
      if (px < CW - 1) { const n = pos + 1; if (!visited[n] && matches(n * 4) && od[n * 4 + 3] <= 50) { visited[n] = 1; queue.push(n) } }
      if (py > 0) { const n = pos - CW; if (!visited[n] && matches(n * 4) && od[n * 4 + 3] <= 50) { visited[n] = 1; queue.push(n) } }
      if (py < CH - 1) { const n = pos + CW; if (!visited[n] && matches(n * 4) && od[n * 4 + 3] <= 50) { visited[n] = 1; queue.push(n) } }
    }
    return mask
  }, [CW, CH])

  const drawSelection = useCallback((mask: Uint8Array) => {
    const sel = selectionRef.current
    if (!sel) return
    const ctx = sel.getContext('2d')!
    const imageData = ctx.createImageData(CW, CH)
    const d = imageData.data
    for (let i = 0; i < mask.length; i++) {
      if (mask[i]) {
        // Animated yellow/gold shimmer tint
        d[i * 4] = 255
        d[i * 4 + 1] = 220
        d[i * 4 + 2] = 0
        d[i * 4 + 3] = 100
      }
    }
    ctx.putImageData(imageData, 0, 0)
  }, [CW, CH])

  const clearSelection = useCallback(() => {
    const sel = selectionRef.current
    if (!sel) return
    sel.getContext('2d')!.clearRect(0, 0, CW, CH)
    selectedPixelsRef.current = null
    setHasSelection(false)
  }, [CW, CH])

  const fillRegion = useCallback((mask: Uint8Array, color: string) => {
    const colorCanvas = colorRef.current
    if (!colorCanvas) return
    const ctx = colorCanvas.getContext('2d')!
    const colorData = ctx.getImageData(0, 0, CW, CH)
    const cd = colorData.data
    const [fr, fg, fb] = parseColor(color)
    for (let i = 0; i < mask.length; i++) {
      if (mask[i]) {
        cd[i * 4] = fr; cd[i * 4 + 1] = fg; cd[i * 4 + 2] = fb; cd[i * 4 + 3] = 255
      }
    }
    ctx.putImageData(colorData, 0, 0)
  }, [CW, CH])

  const handleColorPick = useCallback((color: string) => {
    setSelectedColor(color)
    if (selectedPixelsRef.current) {
      saveSnapshot()
      fillRegion(selectedPixelsRef.current, color)
      clearSelection()
      composite()
    }
  }, [fillRegion, clearSelection, composite])

  const handleCanvasClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (mode !== 'fill') return
    const { x, y } = getCoords(e)
    const mask = findRegion(x, y)
    if (!mask) return

    if (selectedColor) {
      // Fill immediately if color already selected
      saveSnapshot()
      fillRegion(mask, selectedColor)
      clearSelection()
      composite()
    } else {
      // Just select the region
      selectedPixelsRef.current = mask
      drawSelection(mask)
      setHasSelection(true)
      composite()
    }
  }, [mode, selectedColor, findRegion, fillRegion, clearSelection, drawSelection, composite])

  const brushPaint = useCallback((x: number, y: number) => {
    const color = colorRef.current
    if (!color || !selectedColor) return
    const ctx = color.getContext('2d')!
    ctx.fillStyle = selectedColor
    ctx.beginPath()
    ctx.arc(x, y, brushSize, 0, Math.PI * 2)
    ctx.fill()
    composite()
  }, [selectedColor, brushSize, composite])

  const saveSnapshot = () => {
    const colorCtx = colorRef.current?.getContext('2d')
    if (colorCtx) {
      historyRef.current = [...historyRef.current.slice(-19), colorCtx.getImageData(0, 0, CW, CH)]
    }
  }

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (mode === 'fill') {
      handleCanvasClick(e)
    } else {
      if (!selectedColor) return
      const { x, y } = getCoords(e)
      isPainting.current = true
      saveSnapshot()
      brushPaint(x, y)
    }
  }

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isPainting.current || mode !== 'brush') return
    const { x, y } = getCoords(e)
    brushPaint(x, y)
  }

  const handlePointerUp = () => { isPainting.current = false }

  const handleUndo = () => {
    if (historyRef.current.length === 0) return
    const prev = historyRef.current[historyRef.current.length - 1]
    historyRef.current = historyRef.current.slice(0, -1)
    colorRef.current?.getContext('2d')?.putImageData(prev, 0, 0)
    clearSelection()
    composite()
  }

  const handleClear = () => {
    saveSnapshot()
    const ctx = colorRef.current?.getContext('2d')
    if (ctx) { ctx.fillStyle = 'white'; ctx.fillRect(0, 0, CW, CH) }
    clearSelection()
    composite()
  }

  const removeOuterWhite = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const d = imageData.data
    const W = canvas.width, H = canvas.height
    const isWhitish = (idx: number) => d[idx] > 220 && d[idx + 1] > 220 && d[idx + 2] > 220 && d[idx + 3] > 100
    const visited = new Uint8Array(W * H)
    const queue: number[] = []
    const tryAdd = (pos: number) => {
      if (!visited[pos] && isWhitish(pos * 4)) { visited[pos] = 1; queue.push(pos) }
    }
    for (let x = 0; x < W; x++) { tryAdd(x); tryAdd((H - 1) * W + x) }
    for (let y = 0; y < H; y++) { tryAdd(y * W); tryAdd(y * W + W - 1) }
    let head = 0
    while (head < queue.length) {
      const pos = queue[head++]
      d[pos * 4 + 3] = 0
      const px = pos % W, py = Math.floor(pos / W)
      if (px > 0) tryAdd(pos - 1)
      if (px < W - 1) tryAdd(pos + 1)
      if (py > 0) tryAdd(pos - W)
      if (py < H - 1) tryAdd(pos + W)
    }
    ctx.putImageData(imageData, 0, 0)
  }

  const handleSave = async () => {
    setSaving(true)
    clearSelection()
    composite()
    const display = displayRef.current
    if (!display) { setSaving(false); return }

    let saveCanvas = display
    if (!isBackdrop) {
      const copy = document.createElement('canvas')
      copy.width = CW; copy.height = CH
      copy.getContext('2d')!.drawImage(display, 0, 0)
      removeOuterWhite(copy)
      saveCanvas = copy
    }

    const full = saveCanvas.toDataURL('image/png')
    const thumb = document.createElement('canvas')
    const TW = isBackdrop ? 300 : 200
    const TH = isBackdrop ? 200 : 200
    thumb.width = TW; thumb.height = TH
    thumb.getContext('2d')!.drawImage(saveCanvas, 0, 0, TW, TH)
    const thumbnail = thumb.toDataURL('image/png')

    onSave(full, thumbnail)
    setSaving(false)
  }

  const fillInstruction = selectedColor
    ? hasSelection ? `Tap a color to fill the selected area` : `Tap any area to fill it with ${' '}`
    : hasSelection ? '✨ Now tap a color below to fill!' : '👆 Tap an area to select it, then pick a color'

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-2xl font-bold text-purple-600">Color your {itemName}!</h2>

      <div className="flex gap-2 bg-white rounded-2xl border-2 border-purple-200 p-2">
        <button onClick={() => { setMode('fill'); clearSelection() }} className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${mode === 'fill' ? 'bg-purple-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
          🪣 Fill
        </button>
        <button onClick={() => { setMode('brush'); clearSelection() }} className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${mode === 'brush' ? 'bg-purple-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
          🖌️ Brush
        </button>
      </div>

      {mode === 'brush' && (
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-500">Brush size:</span>
          <input type="range" min="5" max="40" value={brushSize} onChange={e => setBrushSize(+e.target.value)} className="w-28" />
          <div className="rounded-full bg-gray-400" style={{ width: brushSize * 2, height: brushSize * 2, minWidth: 10 }} />
        </div>
      )}

      {/* Color palette */}
      <div className="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow border-2 border-yellow-300 max-w-sm w-full">
        <div className="flex flex-wrap justify-center gap-2">
          {COLORS.map(color => (
            <button key={color} onClick={() => handleColorPick(color)}
              className={`rounded-full border-4 transition-transform ${selectedColor === color ? 'scale-125 border-gray-800' : 'border-gray-200 hover:scale-110'}`}
              style={{ backgroundColor: color, width: 32, height: 32 }}
            />
          ))}
        </div>
        {selectedColor && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-bold text-gray-500">Selected:</span>
            <div className="w-6 h-6 rounded-full border-2 border-gray-400" style={{ backgroundColor: selectedColor }} />
          </div>
        )}
      </div>

      <p className={`text-sm font-bold text-center px-4 py-2 rounded-xl ${hasSelection ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-400' : 'text-gray-500'}`}>
        {mode === 'fill' ? fillInstruction : selectedColor ? '🖌️ Hold and drag to paint' : '👆 Pick a color above to start painting'}
      </p>

      {!loaded && <div className="text-center py-8 text-gray-400">Loading...</div>}
      <div className="relative w-full" style={{ maxWidth: CW }}>
        <canvas
          ref={displayRef}
          width={CW}
          height={CH}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
          style={{ touchAction: 'none', cursor: mode === 'fill' ? 'crosshair' : 'cell', display: loaded ? 'block' : 'none' }}
          className="w-full rounded-2xl border-4 border-purple-300 shadow-lg bg-white"
        />
      </div>

      <canvas ref={colorRef} width={CW} height={CH} style={{ display: 'none' }} />
      <canvas ref={outlineRef} width={CW} height={CH} style={{ display: 'none' }} />
      <canvas ref={selectionRef} width={CW} height={CH} style={{ display: 'none' }} />

      <div className="flex gap-3 flex-wrap justify-center">
        <button onClick={handleUndo} disabled={historyRef.current.length === 0} className="bg-gray-200 hover:bg-gray-300 disabled:opacity-40 text-gray-700 font-bold px-5 py-2 rounded-xl">↩ Undo</button>
        <button onClick={handleClear} className="bg-orange-200 hover:bg-orange-300 text-orange-700 font-bold px-5 py-2 rounded-xl">🗑 Clear</button>
        {hasSelection && <button onClick={clearSelection} className="bg-yellow-200 hover:bg-yellow-300 text-yellow-700 font-bold px-5 py-2 rounded-xl">✕ Deselect</button>}
        <button onClick={onCancel} className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold px-5 py-2 rounded-xl">Cancel</button>
        <button onClick={handleSave} disabled={saving || !loaded} className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white font-bold px-6 py-2 rounded-xl text-lg">
          {saving ? 'Saving...' : '💾 Save to Library'}
        </button>
      </div>
    </div>
  )
}
