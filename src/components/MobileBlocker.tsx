"use client"
import { useEffect, useState } from 'react'
import { Monitor, Smartphone } from 'lucide-react'

export function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase()
      )
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isMobileDevice || isSmallScreen)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-brand-600 via-brand-700 to-purple-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        {/* Icon Animation */}
        <div className="mb-6 flex justify-center gap-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
            <Smartphone size={32} className="text-red-600" />
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Monitor size={32} className="text-green-600" />
          </div>
        </div>

        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/aclivia-logo.png" 
            alt="Aclivia Kids" 
            className="h-10 mx-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Desktop Only
        </h1>
        
        <p className="text-slate-600 mb-3 leading-relaxed">
          For the best experience and full functionality, please open this website on a <strong className="text-brand-600">desktop or laptop computer</strong>.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>B2B Portal:</strong> This professional portal is optimized for desktop viewing to provide the best catalog browsing and order placement experience.
          </p>
        </div>

        {/* Instructions */}
        <div className="text-left bg-slate-50 rounded-xl p-4 mb-6">
          <p className="text-sm font-semibold text-slate-700 mb-2">How to access:</p>
          <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
            <li>Open a desktop or laptop computer</li>
            <li>Visit this website URL</li>
            <li>Browse our complete product catalog</li>
          </ol>
        </div>

        {/* Contact Info */}
        <div className="pt-4 border-t">
          <p className="text-xs text-slate-500 mb-2">Need assistance?</p>
          <a 
            href="tel:+911234567890" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            📞 Call us for support
          </a>
        </div>
      </div>
    </div>
  )
}
