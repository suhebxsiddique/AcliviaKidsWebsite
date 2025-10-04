"use client"
import Image from 'next/image'
import { Star } from 'lucide-react'
import Link from 'next/link'

export type Product = {
  id: string
  name: string
  price: number
  rating: number
  image: string
  badge?: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        {product.badge && (
          <div className="absolute left-2 top-2 bg-white/90 text-brand-700 text-xs font-semibold px-2 py-0.5 rounded">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="font-semibold line-clamp-1">{product.name}</div>
        <div className="flex items-center gap-1 text-sm text-slate-600">
          <Star size={14} className="text-amber-500 fill-amber-500" /> {product.rating.toFixed(1)}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-bold">₹{product.price}</div>
          <Link href={`#contact`} className="inline-flex items-center gap-2 rounded-lg border border-brand-600 text-brand-700 px-3 py-1.5 text-sm hover:bg-brand-50">
            View
          </Link>
        </div>
      </div>
    </div>
  )
}
