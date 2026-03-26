import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function LibraryPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: items } = await supabase
    .from('colored_items')
    .select('*')
    .eq('user_id', user!.id)
    .order('created_at', { ascending: false })

  const objects = items?.filter(i => i.item_type === 'object') ?? []
  const backdrops = items?.filter(i => i.item_type === 'backdrop') ?? []

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-purple-600">📚 My Library</h1>
        <div className="flex gap-2">
          <Link href="/color/object" className="bg-pink-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-pink-600 text-sm">
            + Color Object
          </Link>
          <Link href="/color/backdrop" className="bg-blue-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-blue-600 text-sm">
            + Color Backdrop
          </Link>
        </div>
      </div>

      {items?.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-300">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-2xl font-bold text-gray-400">Your library is empty!</p>
          <p className="text-gray-400 mt-2">Start coloring to fill it up</p>
          <Link href="/color/object" className="mt-4 inline-block bg-purple-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-purple-600">
            Color Something!
          </Link>
        </div>
      )}

      {objects.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-gray-600 mb-3">🖍️ Colored Objects ({objects.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {objects.map(item => (
              <LibraryItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {backdrops.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-gray-600 mb-3">🏞️ Colored Backdrops ({backdrops.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {backdrops.map(item => (
              <LibraryItem key={item.id} item={item} wide />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function LibraryItem({ item, wide = false }: { item: any; wide?: boolean }) {
  return (
    <div className={`bg-white rounded-2xl border-2 border-gray-200 shadow p-2 flex flex-col items-center gap-2 ${wide ? 'col-span-1' : ''}`}>
      {item.thumbnail ? (
        <img
          src={item.thumbnail}
          alt={item.item_name}
          className="w-full rounded-xl object-contain bg-gray-50"
          style={{ aspectRatio: '1' }}
        />
      ) : (
        <div className="w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-3xl" style={{ aspectRatio: '1' }}>
          🎨
        </div>
      )}
      <span className="font-bold text-sm text-gray-700 text-center">{item.item_name}</span>
    </div>
  )
}
