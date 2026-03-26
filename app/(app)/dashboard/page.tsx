import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const username = user?.user_metadata?.username || 'Artist'

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome hero */}
      <div className="rounded-2xl px-6 py-4 sm:py-5 flex items-center gap-4 border-2 border-yellow-300" style={{ background: 'linear-gradient(135deg, #fff7ed, #fdf4ff)' }}>
        <div className="text-4xl">🌈</div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-600">Hello, {username}!</h1>
          <p className="text-gray-500 text-sm sm:text-base">Follow the steps below to build your story!</p>
        </div>
      </div>

      {/* Step cards — 2 columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <StepCard
          step={1} emoji="🖍️"
          title="Color Objects"
          desc="Pick animals, vehicles, food and more — then color them!"
          href="/color/object"
          bg="from-pink-400 to-rose-500"
          border="border-pink-300"
        />
        <StepCard
          step={2} emoji="🏞️"
          title="Color Backdrop"
          desc="Color a background like a jungle, beach or space!"
          href="/color/backdrop"
          bg="from-blue-400 to-cyan-500"
          border="border-blue-300"
        />
        <StepCard
          step={3} emoji="🎭"
          title="Build A Scene"
          desc="Place your objects on a backdrop to make a scene!"
          href="/scene-builder"
          bg="from-green-400 to-emerald-500"
          border="border-green-300"
        />
        <StepCard
          step={4} emoji="📖"
          title="View Your Stories"
          desc="Read your stories, add more pages, and share!"
          href="/stories"
          bg="from-yellow-400 to-orange-500"
          border="border-yellow-300"
        />
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/library" className="bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-600 font-bold px-6 py-3 rounded-2xl text-base shadow hover:shadow-md transition-all">
          📚 My Library
        </Link>
        <Link href="/stories" className="bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-600 font-bold px-6 py-3 rounded-2xl text-base shadow hover:shadow-md transition-all">
          📖 My Stories
        </Link>
      </div>
    </div>
  )
}

function StepCard({ step, emoji, title, desc, href, bg, border }: {
  step: number; emoji: string; title: string; desc: string; href: string; bg: string; border: string
}) {
  return (
    <Link href={href} className={`rounded-3xl border-4 ${border} bg-white hover:shadow-2xl shadow-lg transition-all group overflow-hidden`}>
      {/* Colored top bar */}
      <div className={`bg-gradient-to-r ${bg} p-5 flex items-center gap-4`}>
        <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
          {step}
        </div>
        <span className="text-5xl">{emoji}</span>
      </div>
      {/* Text body */}
      <div className="p-5">
        <div className="text-xl font-bold text-gray-800">{title}</div>
        <div className="text-base text-gray-500 mt-1">{desc}</div>
        <div className="mt-4 text-purple-500 font-bold text-base group-hover:translate-x-1 transition-transform inline-block">
          Let's go →
        </div>
      </div>
    </Link>
  )
}
