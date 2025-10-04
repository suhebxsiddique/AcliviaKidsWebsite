"use client"
import { useEffect, useRef } from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const cards = [
  { icon: Zap, title: 'Fast Delivery', desc: '24-hour dispatch across India', color: 'from-blue-500 to-blue-600' },
  { icon: Shield, title: 'Quality Assured', desc: 'ISO & GMP certified products', color: 'from-green-500 to-green-600' },
  { icon: TrendingUp, title: 'Bulk Orders', desc: 'Competitive wholesale pricing', color: 'from-purple-500 to-purple-600' }
]

export function HeroCards() {
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, idx * 100)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (cardsRef.current) {
      cardsRef.current.querySelectorAll('.hero-card').forEach(card => observer.observe(card))
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-4 md:-mt-8 relative z-10 px-4 md:px-0">
      {cards.map(({ icon: Icon, title, desc, color }, idx) => (
        <div
          key={title}
          className="hero-card card p-4 md:p-6 opacity-0 translate-y-4 transition-all duration-500 hover:scale-105"
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${color} text-white grid place-items-center mb-3 md:mb-4 shadow-lg`}>
            <Icon size={24} className="md:w-7 md:h-7" />
          </div>
          <h3 className="font-bold text-base md:text-lg mb-1">{title}</h3>
          <p className="text-xs md:text-sm text-slate-600">{desc}</p>
        </div>
      ))}
    </div>
  )
}
