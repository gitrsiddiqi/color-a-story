export interface ColoringPage {
  id: string
  name: string
  category: string
  type: 'object' | 'backdrop'
  svg: string
}

export interface ColoredItem {
  id: string
  user_id: string
  item_id: string
  item_type: 'object' | 'backdrop'
  item_name: string
  colored_svg: string
  thumbnail: string
  created_at: string
}

export interface Story {
  id: string
  user_id: string
  title: string
  created_at: string
  updated_at: string
  pages?: StoryPage[]
}

export interface StoryPage {
  id: string
  story_id: string
  page_number: number
  backdrop_item_id: string | null
  scene_data: string
  created_at: string
}

export interface SceneObject {
  colored_item_id: string
  item_name: string
  thumbnail: string
  x: number
  y: number
  scale: number
  animation: 'none' | 'bounce' | 'wiggle' | 'float' | 'spin'
}

export interface SceneData {
  backdrop_thumbnail: string | null
  objects: SceneObject[]
}

export interface Profile {
  id: string
  username: string
  created_at: string
}
