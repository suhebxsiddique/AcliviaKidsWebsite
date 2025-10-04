import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-10 bg-slate-50 border-t">
      <div className="container-max py-8 grid md:grid-cols-4 gap-6 text-sm text-slate-600">
        <div>
          <div className="text-brand-700 font-extrabold text-lg">Aclivia Kids</div>
          <p className="mt-2">Trusted pediatric care at your doorstep.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Company</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Support</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Returns</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Legal</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="#">Terms</Link></li>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Compliance</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-max py-4 text-xs text-slate-500">© {new Date().getFullYear()} Aclivia Kids</div>
      </div>
    </footer>
  )
}
