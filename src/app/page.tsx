import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Categories } from '@/components/Categories'
import { ProductsGrid } from '@/components/ProductsGrid'
import { Footer } from '@/components/Footer'
import { categories, topSellers, trendingNearYou } from '@/lib/mock'
import { ContactSection } from '@/components/ContactSection'
import { Features } from '@/components/Features'
import { Stats } from '@/components/Stats'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { CTABanner } from '@/components/CTABanner'
import { HeroCards } from '@/components/HeroCards'
import { Timeline } from '@/components/Timeline'
import { Certifications } from '@/components/Certifications'
import { FAQ } from '@/components/FAQ'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="container-max">
        <HeroCards />
      </div>
      <Stats />
      <Categories items={categories} />
      <Features />
      <Certifications />
      <WhyChooseUs />
      <ProductsGrid title="Top sellers" products={topSellers} />
      <ProductsGrid title="Trending near you" products={trendingNearYou} />
      <Timeline />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
