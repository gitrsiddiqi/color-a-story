'use client'
import { useRouter } from 'next/navigation'
import ImageLibrary from '@/components/coloring/ImageLibrary'
import { backdropPages, backdropCategories } from '@/data/coloring-pages'
import { ColoringPage } from '@/types'

export default function ColorBackdropPage() {
  const router = useRouter()
  const handleSelect = (page: ColoringPage) => {
    router.push(`/color/backdrop/${page.id}`)
  }
  return (
    <ImageLibrary
      pages={backdropPages}
      categories={backdropCategories}
      onSelect={handleSelect}
      title="🏞️ Pick a Backdrop to Color"
    />
  )
}
