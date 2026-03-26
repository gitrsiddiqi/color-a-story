import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import LogoutButton from '@/components/ui/LogoutButton'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const username = user.user_metadata?.username || 'Artist'

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* Top nav */}
      <nav className="bg-white shadow-md border-b-4 border-yellow-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <span className="text-xl font-bold text-purple-600">Color A Story</span>
          </Link>
          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-1">
            <NavLink href="/color/object" emoji="🖍️" label="Color" />
            <NavLink href="/library" emoji="📚" label="Library" />
            <NavLink href="/scene-builder" emoji="🏞️" label="Scenes" />
            <NavLink href="/stories" emoji="📖" label="Stories" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-500 hidden sm:block">👋 {username}</span>
            <LogoutButton />
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 pb-24 sm:pb-6">
        {children}
      </main>

      {/* Mobile bottom nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-yellow-400 z-50">
        <div className="flex items-center justify-around px-2 py-2">
          <BottomNavLink href="/color/object" emoji="🖍️" label="Color" />
          <BottomNavLink href="/library" emoji="📚" label="Library" />
          <BottomNavLink href="/scene-builder" emoji="🏞️" label="Scenes" />
          <BottomNavLink href="/stories" emoji="📖" label="Stories" />
        </div>
      </nav>
    </div>
  )
}

function NavLink({ href, emoji, label }: { href: string; emoji: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-sm text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </Link>
  )
}

function BottomNavLink({ href, emoji, label }: { href: string; emoji: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl text-gray-600 hover:text-purple-600 transition-colors"
    >
      <span className="text-2xl">{emoji}</span>
      <span className="text-xs font-bold">{label}</span>
    </Link>
  )
}
