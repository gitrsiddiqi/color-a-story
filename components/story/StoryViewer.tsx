'use client'
import { useState } from 'react'
import { motion, AnimatePresence, type TargetAndTransition } from 'framer-motion'
import { StoryPage, SceneData, SceneObject } from '@/types'
import Link from 'next/link'

interface StoryViewerProps {
  pages: StoryPage[]
  title: string
  storyId: string
}

const animationVariants: Record<string, TargetAndTransition> = {
  none: {},
  bounce: {
    y: [0, -18, 0, -10, 0],
    transition: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
  },
  wiggle: {
    rotate: [0, -8, 8, -8, 8, 0],
    transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' },
  },
  float: {
    y: [0, -12, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
  },
  spin: {
    rotate: [0, 360],
    transition: { duration: 2, repeat: Infinity, ease: 'linear' },
  },
}

// Positions may be stored as percentages (new) or pixels/600 (old)
function toPercent(val: number): number {
  return val > 100 ? (val / 600) * 100 : val
}

export default function StoryViewer({ pages, title, storyId }: StoryViewerProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const sorted = [...pages].sort((a, b) => a.page_number - b.page_number)
  const page = sorted[currentPage]
  const sceneData: SceneData = page ? JSON.parse(page.scene_data) : { backdrop_thumbnail: null, objects: [] }

  const goNext = () => {
    if (currentPage < sorted.length - 1) {
      setDirection(1)
      setCurrentPage(p => p + 1)
    }
  }

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage(p => p - 1)
    }
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 400 : -400, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -400 : 400, opacity: 0 }),
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h1 className="text-3xl font-bold text-purple-600 text-center">{title}</h1>
      <p className="text-gray-400 font-bold">Page {currentPage + 1} of {sorted.length}</p>

      <div className="w-full max-w-3xl relative rounded-3xl overflow-hidden border-4 border-purple-300 shadow-2xl bg-white" style={{ aspectRatio: '3/2' }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.4 }}
            className="absolute inset-0"
          >
            {sceneData.backdrop_thumbnail ? (
              <img src={sceneData.backdrop_thumbnail} alt="backdrop" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-sky-200 to-green-200" />
            )}
            {sceneData.objects.map((obj: SceneObject, idx: number) => (
              <motion.img
                key={idx}
                src={obj.thumbnail}
                alt={obj.item_name}
                animate={animationVariants[obj.animation] || {}}
                className="absolute select-none"
                style={{
                  left: `${toPercent(obj.x)}%`,
                  top: `${toPercent(obj.y)}%`,
                  width: `${15 * obj.scale}%`,
                  aspectRatio: '1',
                  transform: 'translate(-50%, -50%)',
                  objectFit: 'contain',
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={goPrev}
          disabled={currentPage === 0}
          className="bg-purple-500 hover:bg-purple-600 disabled:opacity-30 text-white font-bold text-2xl w-14 h-14 rounded-full shadow transition-colors"
        >
          ←
        </button>
        <div className="flex gap-2">
          {sorted.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > currentPage ? 1 : -1); setCurrentPage(i) }}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentPage ? 'bg-purple-500' : 'bg-gray-300 hover:bg-purple-300'}`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          disabled={currentPage === sorted.length - 1}
          className="bg-purple-500 hover:bg-purple-600 disabled:opacity-30 text-white font-bold text-2xl w-14 h-14 rounded-full shadow transition-colors"
        >
          →
        </button>
      </div>

      {page && (
        <Link
          href={`/scene-builder?storyId=${storyId}&pageId=${page.id}&page=${page.page_number}`}
          className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-5 py-2 rounded-xl text-sm"
        >
          ✏️ Edit This Page
        </Link>
      )}
    </div>
  )
}
