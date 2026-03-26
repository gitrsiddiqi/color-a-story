import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import DeleteStoryButton from '@/components/story/DeleteStoryButton'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default async function StoriesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: stories } = await supabase
    .from('stories')
    .select('*, story_pages(count)')
    .eq('user_id', user!.id)
    .order('updated_at', { ascending: false })

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb crumbs={[{ label: '📖 My Stories' }]} />

      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-600">📖 My Stories</h1>
        <Link href="/scene-builder" className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-2xl text-base shadow hover:shadow-md transition-all">
          + New Story
        </Link>
      </div>

      {(!stories || stories.length === 0) && (
        <div className="text-center py-20 bg-white rounded-3xl border-4 border-dashed border-gray-300">
          <div className="text-8xl mb-6">📖</div>
          <p className="text-3xl font-bold text-gray-400">No stories yet!</p>
          <p className="text-gray-400 mt-2 text-lg">Build a scene to start your first story</p>
          <Link href="/scene-builder" className="mt-6 inline-block bg-purple-500 text-white font-bold px-8 py-4 rounded-2xl hover:bg-purple-600 text-lg shadow-lg">
            Build a Scene
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stories?.map(story => (
          <div key={story.id} className="bg-white rounded-3xl border-4 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all flex flex-col overflow-hidden">
            {/* Top color bar */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 text-center">
              <div className="text-6xl">📖</div>
            </div>
            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="text-xl font-bold text-gray-800">{story.title}</h3>
              <p className="text-sm text-gray-400">
                {story.story_pages?.[0]?.count ?? 0} page(s) · {new Date(story.updated_at).toLocaleDateString()}
              </p>
              <div className="flex gap-2 mt-auto">
                <Link
                  href={`/stories/${story.id}`}
                  className="flex-1 text-center bg-purple-500 hover:bg-purple-600 text-white font-bold text-base py-3 rounded-2xl shadow transition-all"
                >
                  📖 Read & Edit
                </Link>
                <DeleteStoryButton storyId={story.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
