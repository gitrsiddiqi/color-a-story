'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LibraryItemCard({ item, wide = false }: { item: any; wide?: boolean }) {
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    setDeleting(true)
    await fetch(`/api/library/${item.id}`, { method: 'DELETE' })
    router.refresh()
  }

  return (
    <div className={`bg-white rounded-2xl border-2 border-gray-200 shadow p-2 flex flex-col items-center gap-2 group relative`}>
      {item.thumbnail ? (
        <img
          src={item.thumbnail}
          alt={item.item_name}
          className="w-full rounded-xl object-contain bg-gray-50"
          style={{ aspectRatio: '1' }}
        />
      ) : (
        <div className="w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-3xl" style={{ aspectRatio: '1' }}>
          🎨
        </div>
      )}
      <span className="font-bold text-sm text-gray-700 text-center">{item.item_name}</span>

      {!confirming ? (
        <div className="flex gap-1 w-full">
          <Link
            href={`/color/${item.item_type}/${item.item_id}`}
            className="flex-1 text-center bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold text-xs py-1 rounded-lg"
          >
            ✏️ Re-color
          </Link>
          <button
            onClick={() => setConfirming(true)}
            className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 font-bold text-xs py-1 rounded-lg"
          >
            🗑 Delete
          </button>
        </div>
      ) : (
        <div className="flex gap-1 w-full">
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-xs py-1 rounded-lg disabled:opacity-50"
          >
            {deleting ? '...' : 'Yes, delete'}
          </button>
          <button
            onClick={() => setConfirming(false)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xs py-1 rounded-lg"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
