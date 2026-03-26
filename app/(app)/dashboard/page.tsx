import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const username = user?.user_metadata?.username || 'Artist'

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow border-2 border-yellow-300 text-center">
        <div className="text-6xl mb-3">🌈</div>
        <h1 className="text-4xl font-bold text-purple-600">Hello, {username}!</h1>
        <p className="text-gray-500 text-lg mt-2">Follow the steps to build your story!</p>
      </div>

      <div className="flex flex-col gap-3">
        <StepCard step={1} emoji="🖍️" title="Color some objects" desc="Pick animals, vehicles, food and more — then color them!" href="/color/object" color="border-pink-300 bg-pink-50 hover:bg-pink-100" />
        <StepCard step={2} emoji="🏞️" title="Color a backdrop" desc="Color a background like a jungle, beach or space!" href="/color/backdrop" color="border-blue-300 bg-blue-50 hover:bg-blue-100" />
        <StepCard step={3} emoji="🎭" title="Build a scene" desc="Place your objects on a backdrop to make a scene!" href="/scene-builder" color="border-green-300 bg-green-50 hover:bg-green-100" />
        <StepCard step={4} emoji="📖" title="View your stories" desc="Read your stories, add more pages, and share!" href="/stories" color="border-yellow-300 bg-yellow-50 hover:bg-yellow-100" />
      </div>
    </div>
  )
}

function StepCard({ step, emoji, title, desc, href, color }: {
  step: number; emoji: string; title: string; desc: string; href: string; color: string
}) {
  return (
    <Link href={href} className={`rounded-2xl border-2 p-4 flex items-center gap-4 shadow-sm transition-all ${color}`}>
      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
        {step}
      </div>
      <div className="text-3xl flex-shrink-0">{emoji}</div>
      <div className="flex-1">
        <div className="font-bold text-gray-700">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
      <div className="text-purple-400 font-bold text-xl">→</div>
    </Link>
  )
}
