'use client'
import { useRouter } from 'next/navigation'
import ImageLibrary from '@/components/coloring/ImageLibrary'
import { objectPages, objectCategories } from '@/data/coloring-pages'
import { ColoringPage } from '@/types'

export default function ColorObjectPage() {
  const router = useRouter()
  const handleSelect = (page: ColoringPage) => {
    router.push(`/color/object/${page.id}`)
  }
  return (
    <ImageLibrary
      pages={objectPages}
      categories={objectCategories}
      onSelect={handleSelect}
      title="🖍️ Pick an Object to Color"
    />
  )
}
