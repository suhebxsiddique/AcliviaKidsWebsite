import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { MobileBlocker } from '@/components/MobileBlocker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aclivia-kids.example.com'),
  title: {
    default: 'Aclivia Kids — Trusted Pediatric Care Online',
    template: '%s | Aclivia Kids'
  },
  description: 'Order pediatric medicines, vitamins, and baby care essentials. Fast delivery, verified products, trusted by parents.',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Aclivia Kids — Trusted Pediatric Care Online',
    description: 'Order pediatric medicines, vitamins, and baby care essentials with fast delivery.',
    url: '/',
    siteName: 'Aclivia Kids',
    locale: 'en_IN',
    type: 'website'
  }
}

export const viewport = {
  themeColor: '#1e5df5'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileBlocker />
        {/* Reveal-on-scroll observer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{if(typeof window==='undefined')return;const io=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}},{threshold:0.12});window.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.reveal').forEach(el=>io.observe(el));});})();`
          }}
        />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
