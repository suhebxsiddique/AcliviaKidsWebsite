"use client"
import { Award, CheckCircle } from 'lucide-react'

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management System', color: 'from-blue-500 to-blue-600' },
  { name: 'WHO-GMP', desc: 'Good Manufacturing Practice', color: 'from-green-500 to-green-600' },
  { name: 'FSSAI Certified', desc: 'Food Safety Standards', color: 'from-purple-500 to-purple-600' },
  { name: 'ISO 14001', desc: 'Environmental Management', color: 'from-teal-500 to-teal-600' }
]

const compliance = [
  'Regular third-party audits and inspections',
  'Complete batch traceability with QR codes',
  'Certificate of Analysis (COA) for every batch',
  'Stability testing and shelf-life validation',
  'Heavy metal testing and microbial analysis',
  'Compliance with pharmacopoeia standards'
]

export function Certifications() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50 reveal">
      <div className="container-max px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
            <Award size={18} />
            Certified & Compliant
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Quality You Can Trust</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Our commitment to quality is backed by international certifications and stringent quality control processes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {certifications.map((cert) => (
            <div key={cert.name} className="card p-4 md:p-6 text-center hover:shadow-xl transition group">
              <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br ${cert.color} text-white grid place-items-center mb-3 md:mb-4 group-hover:scale-110 transition shadow-lg`}>
                <Award size={28} className="md:w-9 md:h-9" />
              </div>
              <h3 className="font-bold text-sm md:text-lg mb-1">{cert.name}</h3>
              <p className="text-xs md:text-sm text-slate-600">{cert.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="card p-4 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Our Quality Assurance Process</h3>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {compliance.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
