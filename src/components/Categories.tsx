import Image from 'next/image'
import Link from 'next/link'

type Category = {
  id: string
  name: string
  image: string
}

export function Categories({ items }: { items: readonly Category[] }) {
  return (
    <section id="categories" className="container-max py-6 reveal">
      <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {items.map((c) => (
          <Link key={c.id} href={`/category/${c.id}` as any} className="card overflow-hidden group transition-transform hover:-translate-y-1">
            <div className="relative h-28">
              <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-3 text-center text-sm font-medium">{c.name}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
