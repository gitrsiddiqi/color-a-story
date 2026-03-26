'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()
    const email = `${username.toLowerCase().trim()}@colorastory.app`
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Wrong username or password. Try again!')
      setLoading(false)
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm border-4 border-yellow-400">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2">🎨</div>
        <h1 className="text-3xl font-bold text-purple-600">Color A Story</h1>
        <p className="text-gray-500 mt-1">Welcome back!</p>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border-2 border-purple-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-purple-500"
            placeholder="Your username"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border-2 border-purple-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-purple-500"
            placeholder="Your password"
            required
          />
        </div>
        {error && (
          <div className="bg-red-100 text-red-600 rounded-xl px-4 py-2 text-sm font-bold text-center">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-500 hover:bg-purple-600 disabled:opacity-50 text-white font-bold text-xl rounded-xl py-3 transition-colors"
        >
          {loading ? 'Logging in...' : 'Let\'s Color! 🖍️'}
        </button>
      </form>
      <p className="text-center mt-4 text-gray-500 text-sm">
        New here?{' '}
        <Link href="/signup" className="text-purple-500 font-bold hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  )
}
