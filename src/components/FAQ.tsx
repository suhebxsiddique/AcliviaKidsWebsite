"use client"
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our MOQ varies by product category. Typically, for syrups and drops it\'s 100 units, for tablets/capsules 500 units. Contact us for specific product MOQs.'
  },
  {
    q: 'Do you offer private labeling services?',
    a: 'Yes, we provide white-label and private label services with regulatory support. We can help with packaging design, labeling, and compliance documentation.'
  },
  {
    q: 'What are your delivery timelines?',
    a: 'Standard delivery within metro cities is 2-3 business days. For other locations, it typically takes 4-7 business days. Expedited shipping is available for urgent orders.'
  },
  {
    q: 'Are your products WHO-GMP certified?',
    a: 'Yes, all our manufacturing facilities are WHO-GMP and ISO 9001:2015 certified. Each batch comes with Certificate of Analysis (COA) and proper documentation.'
  },
  {
    q: 'What payment terms do you offer?',
    a: 'We offer flexible payment terms for verified partners including credit periods of 30-45 days based on order volume. New customers can start with advance payment or LC.'
  },
  {
    q: 'Can I get product samples before bulk ordering?',
    a: 'Absolutely! We provide samples for quality verification. Contact our sales team with your requirements and they will arrange sample dispatch.'
  }
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  
  return (
    <section className="py-12 md:py-16 bg-white reveal">
      <div className="container-max px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Frequently Asked Questions</h2>
          <p className="text-sm md:text-base text-slate-600 px-4">Everything you need to know about partnering with us</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  open === idx ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-slate-600">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
