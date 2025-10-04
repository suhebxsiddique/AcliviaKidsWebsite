"use client"
import Image from 'next/image'

const medicineImages = [
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop&sig=2',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop&sig=2'
]

export function Gallery() {
  return (
    <section className="container-max py-8 reveal">
      <h2 className="text-xl font-bold mb-4">Our Medicine Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {medicineImages.map((src, idx) => (
          <div key={idx} className="card overflow-hidden aspect-[4/3] group transition-transform hover:-translate-y-1">
            <div className="relative w-full h-full">
              <Image src={src} alt="Medicine image" fill className="object-cover group-hover:scale-105 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
