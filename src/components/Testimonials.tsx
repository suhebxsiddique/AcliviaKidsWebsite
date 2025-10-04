"use client"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Pediatrician, Mumbai',
    text: 'Aclivia Kids has been our trusted partner for pediatric medicines. Quality products and reliable supply.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Pharmacy Owner, Delhi',
    text: 'Excellent bulk pricing and fast delivery. Their customer support is outstanding.',
    rating: 5
  },
  {
    name: 'Anil Patel',
    role: 'Hospital Procurement, Ahmedabad',
    text: 'ISO certified products with complete documentation. Highly recommend for B2B purchases.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="container-max py-12 reveal">
      <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="card p-6">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
              ))}
            </div>
            <p className="text-slate-600 mb-4">&ldquo;{t.text}&rdquo;</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-slate-500">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
