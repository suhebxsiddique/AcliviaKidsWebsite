import { Factory, ShieldCheck, Boxes, ClipboardCheck } from 'lucide-react'

const features = [
  { icon: Factory, title: 'ISO & GMP Certified', desc: 'Compliant manufacturing for pediatric formulations.' },
  { icon: Boxes, title: 'Bulk Availability', desc: 'Consistent supply across syrups, drops, and topicals.' },
  { icon: ClipboardCheck, title: 'Private Label', desc: 'White-label options with regulatory support.' },
  { icon: ShieldCheck, title: 'Quality Assured', desc: 'COAs and batch traceability for every SKU.' }
]

export function Features() {
  return (
    <section className="container-max py-8 reveal">
      <div className="grid md:grid-cols-4 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div className="card p-4 transition-transform hover:-translate-y-1" key={title}>
            <div className="w-10 h-10 rounded-md bg-brand-100 text-brand-700 grid place-items-center mb-3">
              <Icon size={20} />
            </div>
            <div className="font-semibold">{title}</div>
            <div className="text-sm text-slate-600">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
