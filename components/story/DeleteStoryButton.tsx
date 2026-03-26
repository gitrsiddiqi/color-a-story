'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteStoryButton({ storyId }: { storyId: string }) {
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    setDeleting(true)
    await fetch(`/api/stories/${storyId}`, { method: 'DELETE' })
    router.refresh()
  }

  if (!confirming) {
    return (
      <button
        onClick={e => { e.preventDefault(); setConfirming(true) }}
        className="mt-auto bg-red-100 hover:bg-red-200 text-red-600 font-bold text-xs py-1 px-3 rounded-lg"
      >
        🗑 Delete
      </button>
    )
  }

  return (
    <div className="mt-auto flex gap-1" onClick={e => e.preventDefault()}>
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-xs py-1 px-2 rounded-lg disabled:opacity-50"
      >
        {deleting ? '...' : 'Yes, delete'}
      </button>
      <button
        onClick={() => setConfirming(false)}
        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xs py-1 px-2 rounded-lg"
      >
        Cancel
      </button>
    </div>
  )
}
