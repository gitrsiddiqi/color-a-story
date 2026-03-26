export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-100 p-4">
      {children}
    </div>
  )
}
