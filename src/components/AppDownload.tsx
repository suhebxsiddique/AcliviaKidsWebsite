"use client"
import dynamic from 'next/dynamic'
import { Smartphone, Download, Bell } from 'lucide-react'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const mobileAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 300,
  h: 300,
  nm: "Mobile",
  ddd: 0,
  assets: [],
  layers: [{
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Phone",
    sr: 1,
    ks: {
      o: { a: 0, k: 100 },
      r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 60 }] },
      p: { a: 0, k: [150, 150, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 0, k: [100, 100, 100] }
    },
    shapes: [{
      ty: "rc",
      d: 1,
      s: { a: 0, k: [80, 140] },
      p: { a: 0, k: [0, 0] },
      r: { a: 0, k: 15 },
      nm: "Rectangle"
    }]
  }]
}

export function AppDownload() {
  return (
    <section className="bg-gradient-to-br from-brand-50 to-blue-50 py-16 reveal">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-brand-600 text-white rounded-full text-sm font-semibold mb-4 animate-pulse">
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold mb-4">Order On-The-Go with Our Mobile App</h2>
            <p className="text-slate-600 mb-6 text-lg">
              Place bulk orders, track deliveries, and manage your account—all from your mobile device. Get notified about new products and exclusive deals.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 grid place-items-center flex-shrink-0">
                  <Smartphone size={20} />
                </div>
                <div>
                  <div className="font-semibold">Easy Ordering</div>
                  <div className="text-sm text-slate-600">Browse catalog and place orders in seconds</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 grid place-items-center flex-shrink-0">
                  <Bell size={20} />
                </div>
                <div>
                  <div className="font-semibold">Real-Time Updates</div>
                  <div className="text-sm text-slate-600">Get instant notifications on order status</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 grid place-items-center flex-shrink-0">
                  <Download size={20} />
                </div>
                <div>
                  <div className="font-semibold">Offline Access</div>
                  <div className="text-sm text-slate-600">Download catalogs for offline viewing</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left text-xs">
                  <div>Download on</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left text-xs">
                  <div>Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-[9/16] bg-gradient-to-br from-brand-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                    <Smartphone size={120} strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
