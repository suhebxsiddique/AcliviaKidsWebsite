import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container-max py-12 md:py-16 lg:py-24 relative px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/80 backdrop-blur-sm border border-brand-200 rounded-full text-xs md:text-sm font-semibold text-brand-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              <span className="hidden sm:inline">ISO & GMP Certified Manufacturer</span>
              <span className="sm:hidden">ISO Certified</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="gradient-text">Premium Pediatric</span>
              <br />
              <span className="text-slate-900">Formulations at Scale</span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
              Your trusted B2B partner for ISO-certified pediatric medicines. Serving 500+ pharmacies, hospitals, and distributors across India with reliable bulk supply and competitive pricing.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-slate-700">WHO-GMP certified manufacturing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-slate-700">24-48 hour dispatch nationwide</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-slate-700">Private label & bulk pricing available</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="#categories" 
                className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-brand-700 transition-all hover:shadow-xl hover:scale-105"
              >
                Browse Catalog
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 hover:border-brand-600 hover:text-brand-700 transition-all hover:shadow-lg"
              >
                Get Bulk Quote
              </Link>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl opacity-20"></div>
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=800&fit=crop" 
                  alt="Pediatric medicine products" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto" 
                  priority
                />
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl md:text-3xl font-bold text-brand-600">5+</div>
              <div className="text-xs md:text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl border border-slate-100 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-2xl md:text-3xl font-bold text-green-600">500+</div>
              <div className="text-xs md:text-sm text-slate-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
