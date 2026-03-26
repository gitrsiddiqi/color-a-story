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

  const obj = objectCount ?? 0
  const bkg = backdropCount ?? 0
  const stories = storyCount ?? 0

  // Determine which step they're on
  const step = obj === 0 ? 1 : bkg === 0 ? 2 : stories === 0 ? 3 : 4

  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow border-2 border-yellow-300 text-center">
        <div className="text-6xl mb-3">🌈</div>
        <h1 className="text-4xl font-bold text-purple-600">Hello, {username}!</h1>
        <p className="text-gray-500 text-lg mt-2">Build your story step by step!</p>
      </div>

      {/* Guided steps */}
      <div className="flex flex-col gap-3">
        <StepCard
          step={1}
          emoji="🖍️"
          title="Color some objects"
          desc="Pick animals, vehicles, food and more — then color them!"
          href="/color/object"
          done={obj > 0}
          active={step === 1}
          count={obj > 0 ? `${obj} colored` : undefined}
        />
        <StepCard
          step={2}
          emoji="🏞️"
          title="Color a backdrop"
          desc="Color a background like a jungle, beach or space!"
          href="/color/backdrop"
          done={bkg > 0}
          active={step === 2}
          count={bkg > 0 ? `${bkg} colored` : undefined}
        />
        <StepCard
          step={3}
          emoji="🎭"
          title="Build a scene"
          desc="Place your objects on a backdrop to create a scene!"
          href="/scene-builder"
          done={stories > 0}
          active={step === 3}
          disabled={obj === 0 && bkg === 0}
        />
        <StepCard
          step={4}
          emoji="📖"
          title="View your stories"
          desc="Read your stories, add more pages, and share!"
          href="/stories"
          done={false}
          active={step === 4}
          disabled={stories === 0}
          count={stories > 0 ? `${stories} ${stories === 1 ? 'story' : 'stories'}` : undefined}
        />
      </div>

      {/* Quick links if returning user */}
      {step === 4 && (
        <div className="grid grid-cols-2 gap-3">
          <Link href="/color/object" className="bg-pink-100 border-2 border-pink-300 hover:bg-pink-200 rounded-2xl p-4 text-center font-bold text-gray-700 transition-all">
            🖍️ Color more objects
          </Link>
          <Link href="/scene-builder" className="bg-green-100 border-2 border-green-300 hover:bg-green-200 rounded-2xl p-4 text-center font-bold text-gray-700 transition-all">
            🎭 New scene
          </Link>
        </div>
      )}
    </div>
  )
}

function StepCard({ step, emoji, title, desc, href, done, active, disabled, count }: {
  step: number
  emoji: string
  title: string
  desc: string
  href: string
  done: boolean
  active: boolean
  disabled?: boolean
  count?: string
}) {
  const base = 'rounded-2xl border-2 p-4 flex items-center gap-4 transition-all shadow-sm'
  const style = disabled
    ? `${base} bg-gray-50 border-gray-200 opacity-50 cursor-not-allowed`
    : active
    ? `${base} bg-yellow-50 border-yellow-400 shadow-md`
    : done
    ? `${base} bg-green-50 border-green-300`
    : `${base} bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50`

  const inner = (
    <>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${done ? 'bg-green-500' : active ? 'bg-yellow-400' : 'bg-gray-300'}`}>
        {done ? '✓' : step}
      </div>
      <div className="text-3xl flex-shrink-0">{emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-gray-700">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
      {count && <div className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-lg flex-shrink-0">{count}</div>}
      {active && <div className="text-yellow-600 font-bold flex-shrink-0">Start →</div>}
    </>
  )

  if (disabled) return <div className={style}>{inner}</div>
  return <Link href={href} className={style}>{inner}</Link>
}
