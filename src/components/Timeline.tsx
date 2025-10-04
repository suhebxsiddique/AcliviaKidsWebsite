"use client"
import { Award, Users, Globe, TrendingUp, Building, Package } from 'lucide-react'

const timeline = [
  { year: '2020', title: 'Company Founded', desc: 'Established with a mission to provide quality pediatric medicines across India', icon: Building },
  { year: '2021', title: 'Product Launch', desc: 'Launched first range of 50+ pediatric formulations', icon: Package },
  { year: '2022', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 and WHO-GMP certification', icon: Award },
  { year: '2023', title: 'Expansion', desc: 'Expanded operations to 25+ cities nationwide', icon: Globe },
  { year: '2024', title: '200+ Partners', desc: 'Built strong network of pharmacies and hospitals', icon: Users },
  { year: '2025', title: 'Industry Leader', desc: 'Recognized as trusted B2B supplier in pediatric pharmaceuticals', icon: TrendingUp }
]

export function Timeline() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 reveal">
      <div className="container-max px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
            Our Journey
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">5 Years of Excellence</h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            From a startup vision to industry leadership—our commitment to quality and service
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - gradient from start to end */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-300 via-brand-500 to-brand-700 transform -translate-x-1/2"></div>
          {/* Mobile timeline line - left side */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-300 via-brand-500 to-brand-700"></div>
          
          <div className="space-y-8 md:space-y-16">
            {timeline.map(({ year, title, desc, icon: Icon }, idx) => (
              <div
                key={year}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } group`}
              >
                {/* Left/Right content */}
                <div className={`flex-1 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="card p-4 md:p-8 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10">
                      <div className="inline-block px-3 md:px-4 py-1 bg-brand-600 text-white rounded-full text-xs md:text-sm font-bold mb-2 md:mb-3 shadow-lg">
                        {year}
                      </div>
                      <h3 className="font-bold text-lg md:text-2xl mb-2 md:mb-3 text-slate-900 group-hover:text-brand-700 transition-colors">
                        {title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
                
                {/* Center icon */}
                <div className="hidden md:flex w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white items-center justify-center shadow-2xl z-10 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 border-4 border-white">
                  <Icon size={32} strokeWidth={2.5} />
                </div>
                
                {/* Mobile icon */}
                <div className="md:hidden absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-xl z-10 border-4 border-white">
                  <Icon size={20} />
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 pt-8 md:pt-12 border-t px-4">
          <p className="text-slate-600 text-base md:text-lg mb-2">
            <span className="font-bold text-brand-600">5 years</span> of trust, quality, and excellence
          </p>
          <p className="text-sm md:text-base text-slate-500">Serving the healthcare industry with dedication and integrity</p>
        </div>
      </div>
    </section>
  )
}
