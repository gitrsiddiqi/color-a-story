'use client'
import { useRouter } from 'next/navigation'
import ImageLibrary from '@/components/coloring/ImageLibrary'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { objectPages, objectCategories } from '@/data/coloring-pages'
import { ColoringPage } from '@/types'

export default function ColorObjectPage() {
  const router = useRouter()
  const handleSelect = (page: ColoringPage) => {
    router.push(`/color/object/${page.id}`)
  }
  return (
    <div>
      <Breadcrumb crumbs={[{ label: '🖍️ Color Objects' }]} />
      <ImageLibrary
        pages={objectPages}
        categories={objectCategories}
        onSelect={handleSelect}
        title="🖍️ Pick an Object to Color"
      />
    </div>
  )
}
