'use client'
import { useParams, useRouter } from 'next/navigation'
import { coloringPages } from '@/data/coloring-pages'
import ColoringCanvas from '@/components/coloring/ColoringCanvas'
import { createClient } from '@/lib/supabase/client'

export default function ColorObjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const page = coloringPages.find(p => p.id === id)

  if (!page) {
    return <div className="text-center py-20 text-2xl text-gray-400">Object not found 😢</div>
  }

  const handleSave = async (coloredSvg: string, thumbnail: string) => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { error } = await supabase.from('colored_items').insert({
      user_id: user.id,
      item_id: page.id,
      item_type: 'object',
      item_name: page.name,
      colored_svg: coloredSvg,
      thumbnail,
    })

    if (!error) {
      router.push('/library?saved=1')
    } else {
      alert('Could not save. Please try again!')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <ColoringCanvas
        svgString={page.svg}
        itemName={page.name}
        onSave={handleSave}
        onCancel={() => router.back()}
      />
    </div>
  )
}
