'use client'
import { useState } from 'react'
import { ColoringPage } from '@/types'

interface ImageLibraryProps {
  pages: ColoringPage[]
  categories: string[]
  onSelect: (page: ColoringPage) => void
  title: string
}

export default function ImageLibrary({ pages, categories, onSelect, title }: ImageLibraryProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = pages.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    return matchSearch && matchCat
  })

  return (
    <div className="w-full">
      <h1 className="text-4xl sm:text-5xl font-bold text-purple-600 mb-5">{title}</h1>

      <div className="flex gap-3 mb-5">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="🔍 Search..."
          className="flex-1 border-3 border-purple-300 rounded-2xl px-5 py-3 text-lg focus:outline-none focus:border-purple-500 bg-white shadow-sm"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {['All', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-bold text-base border-2 transition-colors shadow-sm ${
              activeCategory === cat
                ? 'bg-purple-500 text-white border-purple-500 shadow-md'
                : 'bg-white text-purple-500 border-purple-300 hover:bg-purple-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 text-2xl">No results found 🙁</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map(page => (
            <button
              key={page.id}
              onClick={() => onSelect(page)}
              className="bg-white rounded-2xl border-4 border-gray-200 hover:border-purple-400 shadow-md hover:shadow-xl transition-all group p-3 flex flex-col items-center gap-2"
            >
              <div
                className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 group-hover:bg-purple-50 transition-colors"
                dangerouslySetInnerHTML={{ __html: page.svg }}
              />
              <span className="font-bold text-gray-700 text-sm text-center leading-tight">{page.name}</span>
              <span className="text-xs text-gray-400">{page.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
