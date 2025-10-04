export function ContactSection() {
  return (
    <section id="contact" className="container-max py-10 reveal">
      <div className="card p-6">
        <h2 className="text-xl font-bold">Contact our Sales Team</h2>
        <p className="text-slate-600 mt-1">For bulk pricing, distribution, and private label inquiries.</p>
        <form action="mailto:sales@acliviakids.example.com" method="post" className="mt-4 grid md:grid-cols-3 gap-3">
          <input name="name" placeholder="Your name" className="rounded-lg border border-slate-200 px-3 py-2" />
          <input name="email" type="email" placeholder="Business email" className="rounded-lg border border-slate-200 px-3 py-2" />
          <input name="phone" placeholder="Phone" className="rounded-lg border border-slate-200 px-3 py-2" />
          <textarea name="message" placeholder="Tell us what you need (SKUs, MOQ, locations)" className="md:col-span-3 rounded-lg border border-slate-200 px-3 py-2 min-h-24" />
          <button className="btn-primary md:col-span-3 w-full">Contact Now</button>
        </form>
      </div>
    </section>
  )
}
