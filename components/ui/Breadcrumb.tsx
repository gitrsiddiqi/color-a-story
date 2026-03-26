import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 mb-4 flex-wrap">
      <Link href="/dashboard" className="flex items-center gap-1.5 bg-purple-500 hover:bg-purple-600 text-white font-bold text-sm px-4 py-2 rounded-full transition-colors shadow-sm">
        🏠 Home
      </Link>
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-gray-300 font-bold text-lg">›</span>
          {c.href ? (
            <Link href={c.href} className="flex items-center gap-1 bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold text-sm px-4 py-2 rounded-full transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="flex items-center gap-1 bg-gray-100 text-gray-600 font-bold text-sm px-4 py-2 rounded-full">
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
