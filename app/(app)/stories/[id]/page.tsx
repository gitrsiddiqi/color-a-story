import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import StoryViewer from '@/components/story/StoryViewer'
import RenameStory from '@/components/story/RenameStory'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: story } = await supabase
    .from('stories')
    .select('*, story_pages(*)')
    .eq('id', id)
    .eq('user_id', user!.id)
    .single()

  if (!story) notFound()

  const nextPage = (story.story_pages?.length ?? 0) + 1

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb crumbs={[{ label: '📖 My Stories', href: '/stories' }, { label: story.title }]} />
      <div className="flex items-center justify-between flex-wrap gap-4">
        <RenameStory storyId={story.id} initialTitle={story.title} />
        <div className="flex gap-3">
          <Link
            href={`/scene-builder?storyId=${story.id}&page=${nextPage}`}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-5 py-3 rounded-2xl text-base shadow hover:shadow-md transition-all"
          >
            + Add Page
          </Link>
          <Link href="/stories" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-5 py-3 rounded-2xl text-base shadow hover:shadow-md transition-all">
            ← All Stories
          </Link>
        </div>
      </div>

      {(!story.story_pages || story.story_pages.length === 0) ? (
        <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-300">
          <div className="text-6xl mb-4">🎭</div>
          <p className="text-xl font-bold text-gray-400">This story has no pages yet!</p>
          <Link
            href={`/scene-builder?storyId=${story.id}&page=1`}
            className="mt-4 inline-block bg-purple-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-purple-600"
          >
            Build Page 1
          </Link>
        </div>
      ) : (
        <StoryViewer pages={story.story_pages} title={story.title} storyId={story.id} />
      )}
    </div>
  )
}
