'use client'
import { SearchBar } from './SearchBar'
import { Stethoscope } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {

  return (
    <header className="sticky top-0 z-40 bg-white shadow-header">
      <div className="container-max h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Aclivia Kids Home">
            <div className="h-9 w-auto">
              <Image src="/aclivia-logo.png" alt="Aclivia Kids" width={120} height={36} className="h-9 w-auto object-contain" priority />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-2 ml-6 text-sm text-slate-700">
            <Stethoscope size={16} className="text-brand-600" />
            <span>ISO Certified • B2B Pediatric Pharma</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4 hidden md:block">
          <SearchBar />
        </div>

        <nav className="flex items-center gap-3">
          <Link href="#categories" className="text-sm text-slate-700 hover:text-brand-700 hover-underline">Catalog</Link>
          <Link href="#contact" className="btn-primary hidden sm:inline-flex">Contact Now</Link>
        </nav>
      </div>
      <div className="md:hidden border-t">
        <div className="container-max py-2"><SearchBar /></div>
      </div>
    </header>
  )
}
