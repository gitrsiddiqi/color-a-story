'use client'
import { useState, useRef } from 'react'
import { ColoredItem, SceneObject, SceneData } from '@/types'

interface SceneBuilderProps {
  backdrops: ColoredItem[]
  objects: ColoredItem[]
  initialData?: SceneData
  onSave: (sceneData: SceneData) => void
  onCancel: () => void
}

const ANIMATIONS = ['none', 'bounce', 'wiggle', 'float', 'spin'] as const

export default function SceneBuilder({ backdrops, objects, initialData, onSave, onCancel }: SceneBuilderProps) {
  const [selectedBackdrop, setSelectedBackdrop] = useState<ColoredItem | null>(
    initialData?.backdrop_thumbnail
      ? backdrops.find(b => b.thumbnail === initialData.backdrop_thumbnail) ?? null
      : null
  )
  const [sceneObjects, setSceneObjects] = useState<SceneObject[]>(initialData?.objects ?? [])
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [selectedObjectIdx, setSelectedObjectIdx] = useState<number | null>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  const addObject = (item: ColoredItem) => {
    setSceneObjects(prev => [...prev, {
      colored_item_id: item.id,
      item_name: item.item_name,
      thumbnail: item.thumbnail,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 150,
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

  const handleStageDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const stage = stageRef.current
    if (!stage || !draggingId) return
    const rect = stage.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const idx = sceneObjects.findIndex((_, i) => String(i) === draggingId)
    if (idx !== -1) {
      setSceneObjects(prev => prev.map((o, i) => i === idx ? { ...o, x, y } : o))
    }
    setDraggingId(null)
  }

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
            className="relative bg-white rounded-2xl border-4 border-purple-300 overflow-hidden shadow-lg"
            style={{ width: '100%', paddingBottom: '66%' }}
            onDragOver={e => e.preventDefault()}
            onDrop={handleStageDrop}
          >
            <div className="absolute inset-0">
              {selectedBackdrop ? (
                <img src={selectedBackdrop.colored_svg || selectedBackdrop.thumbnail} alt="backdrop" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xl">
                  Pick a backdrop from the panel →
                </div>
              )}
              {sceneObjects.map((obj, idx) => (
                <img
                  key={idx}
                  src={obj.thumbnail}
                  alt={obj.item_name}
                  draggable
                  onDragStart={() => setDraggingId(String(idx))}
                  onClick={() => setSelectedObjectIdx(idx === selectedObjectIdx ? null : idx)}
                  className={`absolute cursor-grab active:cursor-grabbing select-none ${selectedObjectIdx === idx ? 'ring-4 ring-yellow-400 ring-offset-1 rounded' : ''}`}
                  style={{
                    left: obj.x,
                    top: obj.y,
                    width: 80 * obj.scale,
                    height: 80 * obj.scale,
                    transform: 'translate(-50%, -50%)',
                    objectFit: 'contain',
                  }}
                />
              ))}
            </div>
          </div>

          {selectedObjectIdx !== null && sceneObjects[selectedObjectIdx] && (
            <div className="mt-3 bg-white rounded-2xl border-2 border-yellow-300 p-4 flex flex-wrap gap-4 items-center">
              <span className="font-bold text-gray-600">{sceneObjects[selectedObjectIdx].item_name}</span>
              <div className="flex items-center gap-2">
                <label className="text-sm font-bold text-gray-500">Size:</label>
                <input
                  type="range" min="0.5" max="3" step="0.1"
                  value={sceneObjects[selectedObjectIdx].scale}
                  onChange={e => updateScale(selectedObjectIdx, parseFloat(e.target.value))}
                  className="w-24"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-bold text-gray-500">Animation:</label>
                <select
                  value={sceneObjects[selectedObjectIdx].animation}
                  onChange={e => updateAnimation(selectedObjectIdx, e.target.value as SceneObject['animation'])}
                  className="border-2 border-purple-300 rounded-lg px-2 py-1 text-sm"
                >
                  {ANIMATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <button
                onClick={() => removeObject(selectedObjectIdx)}
                className="ml-auto bg-red-100 hover:bg-red-200 text-red-600 font-bold px-3 py-1 rounded-xl text-sm"
              >
                🗑 Remove
              </button>
            </div>
          )}
        </div>

        {/* Side panel */}
        <div className="w-full lg:w-64 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border-2 border-blue-200 p-3">
            <h3 className="font-bold text-blue-600 mb-2">🏞️ Backdrops</h3>
            {backdrops.length === 0 ? (
              <p className="text-sm text-gray-400">No backdrops yet. Color some backdrops first!</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {backdrops.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBackdrop(b)}
                    className={`rounded-xl overflow-hidden border-3 ${selectedBackdrop?.id === b.id ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <img src={b.thumbnail} alt={b.item_name} className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border-2 border-pink-200 p-3 flex-1">
            <h3 className="font-bold text-pink-600 mb-2">🖍️ Objects</h3>
            {objects.length === 0 ? (
              <p className="text-sm text-gray-400">No objects yet. Color some objects first!</p>
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
