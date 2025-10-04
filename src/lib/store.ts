import { create } from 'zustand'

type CartState = {
  count: number
  add: (qty?: number) => void
}

export const useCart = create<CartState>((set) => ({
  count: 0,
  add: (qty = 1) => set((s) => ({ count: s.count + qty }))
}))
