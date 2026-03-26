import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1.5 mb-5 flex-wrap">
      <Link href="/dashboard" className="flex items-center gap-1 bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold text-xs px-3 py-1.5 rounded-full transition-colors">
        🏠 Home
      </Link>
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="text-gray-300 font-bold">›</span>
          {c.href ? (
            <Link href={c.href} className="flex items-center gap-1 bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold text-xs px-3 py-1.5 rounded-full transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="flex items-center gap-1 bg-gray-100 text-gray-600 font-bold text-xs px-3 py-1.5 rounded-full">
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
