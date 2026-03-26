'use client'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import SceneBuilder from '@/components/scene/SceneBuilder'
import { ColoredItem, SceneData } from '@/types'

export default function SceneBuilderPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const storyId = searchParams.get('storyId')
  const pageNum = searchParams.get('page') ? parseInt(searchParams.get('page')!) : null
  const pageId = searchParams.get('pageId') // for editing existing page

  const [objects, setObjects] = useState<ColoredItem[]>([])
  const [backdrops, setBackdrops] = useState<ColoredItem[]>([])
  const [initialData, setInitialData] = useState<SceneData | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data } = await supabase
        .from('colored_items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      setObjects(data?.filter(i => i.item_type === 'object') ?? [])
      setBackdrops(data?.filter(i => i.item_type === 'backdrop') ?? [])

      // Load existing page data if editing
      if (pageId) {
        const { data: existingPage } = await supabase
          .from('story_pages')
          .select('scene_data')
          .eq('id', pageId)
          .single()
        if (existingPage?.scene_data) {
          setInitialData(JSON.parse(existingPage.scene_data))
        }
      }

      setLoading(false)
    }
    load()
  }, [pageId])

  const handleSave = async (sceneData: SceneData) => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    if (pageId) {
      // Update existing page
      await supabase.from('story_pages')
        .update({ scene_data: JSON.stringify(sceneData) })
        .eq('id', pageId)
      router.push(`/stories/${storyId}`)
    } else if (storyId && pageNum !== null) {
      // Add new page to existing story
      await supabase.from('story_pages').upsert({
        story_id: storyId,
        page_number: pageNum,
        backdrop_item_id: null,
        scene_data: JSON.stringify(sceneData),
      })
      router.push(`/stories/${storyId}`)
    } else {
      // Brand new story
      const { data: story } = await supabase.from('stories').insert({
        user_id: user.id,
        title: 'My Story',
      }).select().single()

      if (story) {
        await supabase.from('story_pages').insert({
          story_id: story.id,
          page_number: 1,
          backdrop_item_id: null,
          scene_data: JSON.stringify(sceneData),
        })
        router.push(`/stories/${story.id}`)
      }
    }
  }

  if (loading) {
    return <div className="text-center py-20 text-2xl text-gray-400">Loading your library... 🎨</div>
  }

  return (
    <SceneBuilder
      objects={objects}
      backdrops={backdrops}
      initialData={initialData}
      onSave={handleSave}
      onCancel={() => router.back()}
    />
  )
}
