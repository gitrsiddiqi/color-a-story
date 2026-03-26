import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm font-bold text-gray-400 mb-4 flex-wrap">
      <Link href="/dashboard" className="hover:text-purple-500 transition-colors">🏠 Home</Link>
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="text-gray-300">›</span>
          {c.href ? (
            <Link href={c.href} className="hover:text-purple-500 transition-colors">{c.label}</Link>
          ) : (
            <span className="text-gray-600">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
