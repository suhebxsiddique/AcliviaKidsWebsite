import { ShieldCheck, Truck, HeadphonesIcon, BadgeCheck, Clock, Percent } from 'lucide-react'

const reasons = [
  { icon: ShieldCheck, title: 'ISO & GMP Certified', desc: 'All products meet international quality standards' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Quick dispatch and reliable logistics across India' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Dedicated support team for all your queries' },
  { icon: BadgeCheck, title: 'Verified Products', desc: 'Each batch comes with COA and traceability' },
  { icon: Clock, title: 'Consistent Supply', desc: 'Never run out of stock with our inventory' },
  { icon: Percent, title: 'Bulk Discounts', desc: 'Competitive pricing for large orders' }
]

export function WhyChooseUs() {
  return (
    <section className="container-max py-8 md:py-12 px-4 reveal">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Why Choose Aclivia Kids?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card p-4 md:p-6 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-700 grid place-items-center mb-3 md:mb-4">
              <Icon size={24} />
            </div>
            <h3 className="font-semibold text-base md:text-lg mb-2">{title}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
