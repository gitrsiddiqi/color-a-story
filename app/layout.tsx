import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Color A Story',
  description: 'Color, create, and tell your own stories!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
