import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const username = user?.user_metadata?.username || 'Artist'

  const { count: objectCount } = await supabase
    .from('colored_items')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user!.id)
    .eq('item_type', 'object')

  const { count: backdropCount } = await supabase
    .from('colored_items')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user!.id)
    .eq('item_type', 'backdrop')

  const { count: storyCount } = await supabase
    .from('stories')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user!.id)

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-white rounded-3xl p-8 shadow border-2 border-yellow-300 text-center">
        <div className="text-6xl mb-3">🌈</div>
        <h1 className="text-4xl font-bold text-purple-600">Hello, {username}!</h1>
        <p className="text-gray-500 text-lg mt-2">What would you like to create today?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ActionCard
          href="/color/object"
          emoji="🖍️"
          title="Color an Object"
          desc="Pick an object and color it!"
          color="bg-pink-100 border-pink-300 hover:bg-pink-200"
        />
        <ActionCard
          href="/color/backdrop"
          emoji="🏞️"
          title="Color a Backdrop"
          desc="Color a background scene"
          color="bg-blue-100 border-blue-300 hover:bg-blue-200"
        />
        <ActionCard
          href="/scene-builder"
          emoji="🎭"
          title="Build a Scene"
          desc="Place objects on backdrops"
          color="bg-green-100 border-green-300 hover:bg-green-200"
        />
        <ActionCard
          href="/stories"
          emoji="📖"
          title="My Stories"
          desc="View your story books"
          color="bg-yellow-100 border-yellow-300 hover:bg-yellow-200"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Objects Colored" count={objectCount ?? 0} emoji="🎨" />
        <StatCard label="Backdrops Colored" count={backdropCount ?? 0} emoji="🖼️" />
        <StatCard label="Stories Created" count={storyCount ?? 0} emoji="📚" />
      </div>
    </div>
  )
}

function ActionCard({ href, emoji, title, desc, color }: {
  href: string; emoji: string; title: string; desc: string; color: string
}) {
  return (
    <Link href={href} className={`rounded-2xl border-2 p-5 flex flex-col items-center text-center gap-2 transition-all shadow hover:shadow-md ${color}`}>
      <span className="text-4xl">{emoji}</span>
      <span className="font-bold text-lg text-gray-700">{title}</span>
      <span className="text-sm text-gray-500">{desc}</span>
    </Link>
  )
}

function StatCard({ label, count, emoji }: { label: string; count: number; emoji: string }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 text-center shadow">
      <div className="text-3xl">{emoji}</div>
      <div className="text-3xl font-bold text-purple-600 mt-1">{count}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  )
}
