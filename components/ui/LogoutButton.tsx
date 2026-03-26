'use client'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LogoutButton() {
  const router = useRouter()
  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }
  return (
    <button
      onClick={handleLogout}
      className="text-base font-bold text-gray-400 hover:text-red-500 transition-colors px-3 py-2 rounded-xl hover:bg-red-50 border-2 border-transparent hover:border-red-200"
    >
      Logout
    </button>
  )
}
