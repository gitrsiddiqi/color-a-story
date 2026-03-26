'use client'
import { useState } from 'react'
import { motion, AnimatePresence, type TargetAndTransition } from 'framer-motion'
import { StoryPage, SceneData, SceneObject } from '@/types'

interface StoryViewerProps {
  pages: StoryPage[]
  title: string
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

export default function StoryViewer({ pages, title }: StoryViewerProps) {
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
                  left: `${(obj.x / 600) * 100}%`,
                  top: `${(obj.y / 400) * 100}%`,
                  width: `${(80 * obj.scale / 600) * 100}%`,
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
    </div>
  )
}
