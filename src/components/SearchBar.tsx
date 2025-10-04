'use client'
import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input
        placeholder="Search medicines, syrups, baby care..."
        className="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-2 focus:outline-brand-600 shadow-sm"
      />
    </div>
  )
}
