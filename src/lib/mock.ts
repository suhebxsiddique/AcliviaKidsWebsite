import type { Product } from '@/components/ProductCard'

export const categories = [
  { id: 'syrups', name: 'Pediatric Syrups', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop' },
  { id: 'drops', name: 'Oral Drops', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop' },
  { id: 'vitamins', name: 'Vitamins & Minerals', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop' },
  { id: 'baby-care', name: 'Baby Care', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop' },
  { id: 'ointments', name: 'Ointments & Topicals', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop' },
  { id: 'devices', name: 'Devices & Accessories', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop' }
] as const

export const topSellers: Product[] = [
  { id: 'p1', name: 'Paracetamol Pediatric Syrup 250mg/5ml • 60/100ml', price: 189, rating: 4.6, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop', badge: 'Bulk Ready' },
  { id: 'p2', name: 'Zinc + Vitamin D3 Oral Drops 30ml', price: 149, rating: 4.5, image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop' },
  { id: 'p3', name: 'Probiotic & Zinc Sachets (10x1g)', price: 299, rating: 4.7, image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop' },
  { id: 'p4', name: 'ORS Powder Apple Flavor (20x21g)', price: 119, rating: 4.2, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop' },
  { id: 'p5', name: 'Baby Moisturizing Lotion 200ml', price: 249, rating: 4.4, image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop' }
]

export const trendingNearYou: Product[] = [
  { id: 'p6', name: 'Ibuprofen Pediatric Suspension 100mg/5ml', price: 139, rating: 4.3, image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop' },
  { id: 'p7', name: 'Multivitamin Syrup (12 Vitamins) 200ml', price: 349, rating: 4.8, image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop' },
  { id: 'p8', name: 'Baby Massage Oil 200ml', price: 199, rating: 4.5, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop' },
  { id: 'p9', name: 'ORS Citrus Powder 20x21g', price: 99, rating: 4.1, image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop' },
  { id: 'p10', name: 'Digital Thermometer (Pediatric Tip)', price: 399, rating: 4.6, image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop' }
]
