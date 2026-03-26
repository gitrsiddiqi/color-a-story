import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function StoriesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: stories } = await supabase
    .from('stories')
    .select('*, story_pages(count)')
    .eq('user_id', user!.id)
    .order('updated_at', { ascending: false })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-purple-600">📖 My Stories</h1>
        <Link href="/scene-builder" className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-5 py-2 rounded-xl">
          + New Story
        </Link>
      </div>

      {(!stories || stories.length === 0) && (
        <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-300">
          <div className="text-6xl mb-4">📖</div>
          <p className="text-2xl font-bold text-gray-400">No stories yet!</p>
          <p className="text-gray-400 mt-2">Build a scene to start your first story</p>
          <Link href="/scene-builder" className="mt-4 inline-block bg-purple-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-purple-600">
            Build a Scene
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories?.map(story => (
          <Link
            key={story.id}
            href={`/stories/${story.id}`}
            className="bg-white rounded-2xl border-2 border-purple-200 hover:border-purple-400 shadow hover:shadow-lg p-5 flex flex-col gap-3 transition-all"
          >
            <div className="text-4xl">📖</div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">{story.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {story.story_pages?.[0]?.count ?? 0} page(s) •{' '}
                {new Date(story.updated_at).toLocaleDateString()}
              </p>
            </div>
            <span className="text-purple-500 font-bold text-sm">Read & Edit →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
