"use client"
import { ProductCard, type Product } from './ProductCard'

export function ProductsGrid({ title, products }: { title: string; products: Product[] }) {
  return (
    <section className="container-max py-6 reveal" id={title.toLowerCase().replace(/\s+/g, '-') }>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-brand-700 text-sm">See all</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
