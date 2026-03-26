import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required' }, { status: 400 })
  }

  const supabase = await createClient()
  const email = `${username}@colorastory.app`

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } },
  })

  if (error) {
    if (error.message.includes('already registered')) {
      return NextResponse.json({ error: 'That username is already taken! Try another.' }, { status: 400 })
    }
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  if (data.user) {
    await supabase.from('profiles').insert({ id: data.user.id, username })
  }

  return NextResponse.json({ success: true })
}
