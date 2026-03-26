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
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #fef9f0 0%, #fdf0ff 50%, #f0f4ff 100%)' }}>
      {/* Top nav */}
      <nav className="bg-white shadow-lg border-b-4 border-yellow-400 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            <span className="text-2xl font-bold text-purple-600 hidden sm:block">Color A Story</span>
          </Link>
          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-2">
            <NavLink href="/color/object" emoji="🖍️" label="Color" color="hover:bg-pink-100 hover:text-pink-700" />
            <NavLink href="/library" emoji="📚" label="Library" color="hover:bg-blue-100 hover:text-blue-700" />
            <NavLink href="/scene-builder" emoji="🎭" label="Scenes" color="hover:bg-green-100 hover:text-green-700" />
            <NavLink href="/stories" emoji="📖" label="Stories" color="hover:bg-yellow-100 hover:text-yellow-700" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-gray-500 hidden md:block">👋 {username}</span>
            <LogoutButton />
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 py-6 pb-28 sm:pb-8">
        {children}
      </main>

      {/* Mobile bottom nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-yellow-400 z-50 shadow-2xl">
        <div className="flex items-center justify-around px-2 py-2">
          <BottomNavLink href="/color/object" emoji="🖍️" label="Color" />
          <BottomNavLink href="/library" emoji="📚" label="Library" />
          <BottomNavLink href="/scene-builder" emoji="🎭" label="Scenes" />
          <BottomNavLink href="/stories" emoji="📖" label="Stories" />
        </div>
      </nav>
    </div>
  )
}

function NavLink({ href, emoji, label, color }: { href: string; emoji: string; label: string; color: string }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-base text-gray-600 transition-colors ${color}`}
    >
      <span className="text-xl">{emoji}</span>
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
