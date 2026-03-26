'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function RenameStory({ storyId, initialTitle }: { storyId: string; initialTitle: string }) {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(initialTitle)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const handleSave = async () => {
    if (!title.trim()) return
    setSaving(true)
    const supabase = createClient()
    await supabase.from('stories').update({ title: title.trim(), updated_at: new Date().toISOString() }).eq('id', storyId)
    setSaving(false)
    setEditing(false)
    router.refresh()
  }

  if (editing) {
    return (
      <div className="flex items-center gap-2">
        <input
          autoFocus
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') setEditing(false) }}
          className="border-2 border-purple-400 rounded-xl px-3 py-1 text-xl font-bold text-purple-600 focus:outline-none"
        />
        <button onClick={handleSave} disabled={saving} className="bg-green-500 text-white font-bold px-3 py-1 rounded-xl text-sm">
          {saving ? '...' : '✓'}
        </button>
        <button onClick={() => setEditing(false)} className="bg-gray-200 text-gray-600 font-bold px-3 py-1 rounded-xl text-sm">✕</button>
      </div>
    )
  }

  return (
    <button onClick={() => setEditing(true)} className="text-2xl font-bold text-purple-600 hover:underline flex items-center gap-2">
      📖 {title} <span className="text-sm text-gray-400">✏️</span>
    </button>
  )
}
