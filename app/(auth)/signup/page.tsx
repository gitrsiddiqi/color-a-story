'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('Passwords do not match!'); return }
    if (username.length < 3) { setError('Username must be at least 3 characters!'); return }
    if (password.length < 6) { setError('Password must be at least 6 characters!'); return }
    setLoading(true)

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.toLowerCase().trim(), password }),
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error || 'Something went wrong. Try a different username!')
      setLoading(false)
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm border-4 border-green-400">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2">🌈</div>
        <h1 className="text-3xl font-bold text-green-600">Join the Fun!</h1>
        <p className="text-gray-500 mt-1">Create your account</p>
      </div>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border-2 border-green-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-green-500"
            placeholder="Pick a cool username"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border-2 border-green-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-green-500"
            placeholder="At least 6 characters"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            className="w-full border-2 border-green-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-green-500"
            placeholder="Type it again"
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
          className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white font-bold text-xl rounded-xl py-3 transition-colors"
        >
          {loading ? 'Creating account...' : 'Start Coloring! 🎨'}
        </button>
      </form>
      <p className="text-center mt-4 text-gray-500 text-sm">
        Already have an account?{' '}
        <Link href="/login" className="text-green-500 font-bold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  )
}
