import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="container-max py-12 reveal">
      <div className="card bg-gradient-to-r from-brand-600 to-brand-700 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
        <p className="text-lg mb-6 text-white/90">Get bulk pricing, private labeling, and consistent supply for your business</p>
        <div className="flex gap-4 justify-center">
          <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Quote <ArrowRight size={20} />
          </Link>
          <Link href="#categories" className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  )
}
