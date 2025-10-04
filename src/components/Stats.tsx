"use client"
import { Users, Package, Award, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { icon: Users, label: 'Happy Clients', value: 500, suffix: '+' },
  { icon: Package, label: 'Products', value: 200, suffix: '+' },
  { icon: Award, label: 'Years Experience', value: 5, suffix: '+' },
  { icon: TrendingUp, label: 'Cities Served', value: 50, suffix: '+' }
]

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <div ref={countRef}>{count}</div>
}

export function Stats() {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-purple-700 text-white py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container-max relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-white/80 text-lg">Numbers that speak for our commitment to excellence</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value, suffix }, idx) => (
            <div 
              key={label} 
              className="text-center group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="inline-flex w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Icon size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
                <Counter end={value} />
                {suffix}
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
