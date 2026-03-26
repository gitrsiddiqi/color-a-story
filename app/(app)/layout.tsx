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
      <nav className="bg-white shadow-md border-b-4 border-yellow-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <span className="text-xl font-bold text-purple-600 hidden sm:block">Color A Story</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
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
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        {children}
      </main>
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
      <span className="hidden md:block">{label}</span>
    </Link>
  )
}
