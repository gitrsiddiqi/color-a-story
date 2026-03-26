'use client'
import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { ColoredItem, SceneObject, SceneData } from '@/types'

interface SceneBuilderProps {
  backdrops: ColoredItem[]
  objects: ColoredItem[]
  initialData?: SceneData
  onSave: (sceneData: SceneData) => void
  onCancel: () => void
}

const ANIMATIONS = ['none', 'bounce', 'wiggle', 'float', 'spin'] as const

// Object base size as % of stage width (scale=1)
const OBJ_SIZE_PCT = 15

export default function SceneBuilder({ backdrops, objects, initialData, onSave, onCancel }: SceneBuilderProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const returnTo = `${pathname}?${searchParams.toString()}`

  const [selectedBackdrop, setSelectedBackdrop] = useState<ColoredItem | null>(
    initialData?.backdrop_thumbnail
      ? backdrops.find(b =>
          b.colored_svg === initialData.backdrop_thumbnail ||
          b.thumbnail === initialData.backdrop_thumbnail
        ) ?? null
      : null
  )
  const [sceneObjects, setSceneObjects] = useState<SceneObject[]>(initialData?.objects ?? [])
  const [selectedObjectIdx, setSelectedObjectIdx] = useState<number | null>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  // Pointer drag state
  const draggingIdx = useRef<number | null>(null)
  const dragOffset = useRef({ x: 0, y: 0 })

  const getStageRect = () => {
    const el = stageRef.current
    if (!el) return null
    // Use inner content area (subtract border width)
    const rect = el.getBoundingClientRect()
    const border = 4 // border-4 = 4px each side in Tailwind (actually 4*1=4px... wait border-4 = 4*4=16px? No, in Tailwind border-4 = border-width: 4px)
    return {
      left: rect.left + border,
      top: rect.top + border,
      width: rect.width - border * 2,
      height: rect.height - border * 2,
    }
  }

  const addObject = (item: ColoredItem) => {
    setSceneObjects(prev => [...prev, {
      colored_item_id: item.id,
      item_name: item.item_name,
      thumbnail: item.thumbnail,
      x: 30 + Math.random() * 40,
      y: 30 + Math.random() * 40,
      scale: 1,
      animation: 'none',
    }])
  }

  const removeObject = (idx: number) => {
    setSceneObjects(prev => prev.filter((_, i) => i !== idx))
    if (selectedObjectIdx === idx) setSelectedObjectIdx(null)
  }

  const updateAnimation = (idx: number, animation: SceneObject['animation']) => {
    setSceneObjects(prev => prev.map((o, i) => i === idx ? { ...o, animation } : o))
  }

  const updateScale = (idx: number, scale: number) => {
    setSceneObjects(prev => prev.map((o, i) => i === idx ? { ...o, scale } : o))
  }

  const handleObjectPointerDown = useCallback((e: React.PointerEvent, idx: number) => {
    e.preventDefault()
    e.stopPropagation()
    const rect = getStageRect()
    if (!rect) return
    const obj = sceneObjects[idx]
    const pointerXPct = ((e.clientX - rect.left) / rect.width) * 100
    const pointerYPct = ((e.clientY - rect.top) / rect.height) * 100
    dragOffset.current = { x: pointerXPct - obj.x, y: pointerYPct - obj.y }
    draggingIdx.current = idx
    setSelectedObjectIdx(idx)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [sceneObjects])

  const handleObjectPointerMove = useCallback((e: React.PointerEvent, idx: number) => {
    if (draggingIdx.current !== idx) return
    e.preventDefault()
    const rect = getStageRect()
    if (!rect) return
    const xPct = ((e.clientX - rect.left) / rect.width) * 100 - dragOffset.current.x
    const yPct = ((e.clientY - rect.top) / rect.height) * 100 - dragOffset.current.y
    setSceneObjects(prev => prev.map((o, i) => i === idx ? {
      ...o,
      x: Math.max(0, Math.min(100, xPct)),
      y: Math.max(0, Math.min(100, yPct)),
    } : o))
  }, [])

  const handleObjectPointerUp = useCallback(() => {
    draggingIdx.current = null
  }, [])

  const handleSave = () => {
    onSave({
      backdrop_thumbnail: selectedBackdrop?.colored_svg ?? selectedBackdrop?.thumbnail ?? null,
      objects: sceneObjects,
    })
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-600">🎭 Scene Builder</h2>
        <div className="flex gap-2">
          <button onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-4 py-2 rounded-xl">Cancel</button>
          <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded-xl">💾 Save Scene</button>
        </div>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row">
        {/* Stage */}
        <div className="flex-1">
          <div
            ref={stageRef}
            className="relative bg-white rounded-2xl border-4 border-purple-300 overflow-hidden shadow-lg touch-none"
            style={{ width: '100%', aspectRatio: '3/2' }}
          >
            {selectedBackdrop ? (
              <img src={selectedBackdrop.colored_svg || selectedBackdrop.thumbnail} alt="backdrop" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 w-full h-full flex items-center justify-center text-gray-300 text-xl p-4 text-center">
                Pick a backdrop below ↓
              </div>
            )}
            {sceneObjects.map((obj, idx) => (
              <img
                key={idx}
                src={obj.thumbnail}
                alt={obj.item_name}
                onPointerDown={e => handleObjectPointerDown(e, idx)}
                onPointerMove={e => handleObjectPointerMove(e, idx)}
                onPointerUp={handleObjectPointerUp}
                onPointerCancel={handleObjectPointerUp}
                className={`absolute select-none touch-none cursor-grab active:cursor-grabbing ${selectedObjectIdx === idx ? 'ring-4 ring-yellow-400 ring-offset-1 rounded' : ''}`}
                style={{
                  left: `${obj.x}%`,
                  top: `${obj.y}%`,
                  width: `${OBJ_SIZE_PCT * obj.scale}%`,
                  aspectRatio: '1',
                  transform: 'translate(-50%, -50%)',
                  objectFit: 'contain',
                }}
              />
            ))}
          </div>

          {selectedObjectIdx !== null && sceneObjects[selectedObjectIdx] && (() => {
            const selObj = sceneObjects[selectedObjectIdx]
            const coloredItem = objects.find(o => o.id === selObj.colored_item_id)
            return (
              <div className="mt-3 bg-white rounded-2xl border-2 border-yellow-300 p-4 flex flex-wrap gap-4 items-center">
                <span className="font-bold text-gray-600">{selObj.item_name}</span>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-bold text-gray-500">Size:</label>
                  <input
                    type="range" min="0.5" max="3" step="0.1"
                    value={selObj.scale}
                    onChange={e => updateScale(selectedObjectIdx, parseFloat(e.target.value))}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-bold text-gray-500">Animation:</label>
                  <select
                    value={selObj.animation}
                    onChange={e => updateAnimation(selectedObjectIdx, e.target.value as SceneObject['animation'])}
                    className="border-2 border-purple-300 rounded-lg px-2 py-1 text-sm"
                  >
                    {ANIMATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                {coloredItem && (
                  <Link
                    href={`/color/object/${coloredItem.item_id}?returnTo=${encodeURIComponent(returnTo)}`}
                    className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold px-3 py-1 rounded-xl text-sm"
                  >
                    ✏️ Edit Coloring
                  </Link>
                )}
                <button
                  onClick={() => removeObject(selectedObjectIdx)}
                  className="ml-auto bg-red-100 hover:bg-red-200 text-red-600 font-bold px-3 py-1 rounded-xl text-sm"
                >
                  🗑 Remove
                </button>
              </div>
            )
          })()}
        </div>

        {/* Side panel */}
        <div className="w-full lg:w-64 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border-2 border-blue-200 p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-blue-600">🏞️ Backdrops</h3>
              <Link href="/color/backdrop" className="text-xs font-bold text-blue-500 hover:underline">+ Color one</Link>
            </div>
            {backdrops.length === 0 ? (
              <Link href="/color/backdrop" className="block text-center bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-3 text-sm text-blue-500 font-bold hover:bg-blue-100">
                Tap here to color a backdrop first!
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {backdrops.map(b => (
                  <div key={b.id} className="relative">
                    <button
                      onClick={() => setSelectedBackdrop(b)}
                      className={`w-full rounded-xl overflow-hidden border-2 ${selectedBackdrop?.id === b.id ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <img src={b.thumbnail} alt={b.item_name} className="w-full aspect-square object-cover" />
                    </button>
                    {selectedBackdrop?.id === b.id && (
                      <Link
                        href={`/color/backdrop/${b.item_id}?returnTo=${encodeURIComponent(returnTo)}`}
                        className="absolute bottom-1 right-1 bg-white text-purple-600 text-xs font-bold px-1.5 py-0.5 rounded-lg shadow border border-purple-200 hover:bg-purple-50"
                      >
                        ✏️ Edit
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border-2 border-pink-200 p-3 flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-pink-600">🖍️ Objects <span className="text-xs text-gray-400 font-normal">(tap to add)</span></h3>
              <Link href="/color/object" className="text-xs font-bold text-pink-500 hover:underline">+ Color one</Link>
            </div>
            {objects.length === 0 ? (
              <Link href="/color/object" className="block text-center bg-pink-50 border-2 border-dashed border-pink-300 rounded-xl p-3 text-sm text-pink-500 font-bold hover:bg-pink-100">
                Tap here to color an object first!
              </Link>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {objects.map(obj => (
                  <button
                    key={obj.id}
                    onClick={() => addObject(obj)}
                    className="rounded-xl overflow-hidden border-2 border-gray-200 hover:border-pink-400 p-1 bg-gray-50 hover:bg-pink-50"
                    title={`Add ${obj.item_name}`}
                  >
                    <img src={obj.thumbnail} alt={obj.item_name} className="w-full aspect-square object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
