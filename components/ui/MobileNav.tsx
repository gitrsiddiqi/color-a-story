'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/color/object', emoji: '🖍️', label: 'Color Objects', color: 'hover:bg-pink-50 text-pink-700' },
  { href: '/color/backdrop', emoji: '🏞️', label: 'Color Backdrop', color: 'hover:bg-blue-50 text-blue-700' },
  { href: '/scene-builder', emoji: '🎭', label: 'Build A Scene', color: 'hover:bg-green-50 text-green-700' },
  { href: '/stories', emoji: '📖', label: 'My Stories', color: 'hover:bg-yellow-50 text-yellow-700' },
  { href: '/library', emoji: '📚', label: 'My Library', color: 'hover:bg-indigo-50 text-indigo-700' },
]

export default function MobileNav({ username }: { username: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2 rounded-xl hover:bg-purple-50 transition-colors"
        aria-label="Open menu"
      >
        <span className="block h-0.5 w-full bg-purple-600 rounded" />
        <span className="block h-0.5 w-full bg-purple-600 rounded" />
        <span className="block h-0.5 w-full bg-purple-600 rounded" />
      </button>

      {/* Drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] sm:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b-4 border-yellow-400 bg-white">
              <Link href="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                <span className="text-xl font-bold text-purple-600">Color A Story</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-500 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Greeting */}
            <div className="px-5 py-3 bg-purple-50 border-b border-purple-100">
              <p className="text-base font-bold text-purple-600">👋 Hello, {username}!</p>
            </div>

            {/* Nav items */}
            <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-base transition-colors ${item.color}`}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Logout at bottom */}
            <div className="px-5 py-5 border-t border-gray-100">
              <LogoutInMenu />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function LogoutInMenu() {
  const handleLogout = async () => {
    const { createClient } = await import('@/lib/supabase/client')
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/login'
  }
  return (
    <button
      onClick={handleLogout}
      className="w-full text-center bg-red-50 hover:bg-red-100 text-red-500 font-bold px-4 py-3 rounded-2xl text-base transition-colors border-2 border-red-200"
    >
      Logout
    </button>
  )
}
