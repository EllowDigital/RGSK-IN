import { lazy, Suspense } from 'react'
import { SEO, PageTransition } from '@/components/common'
import { Header, PagePreloader } from '@/components/layout'
import { Hero } from '@/components/sections'

// Lazy load below-the-fold sections
const About = lazy(() =>
  import('@/components/sections/AboutSection').then((m) => ({ default: m.About }))
)
const Services = lazy(() =>
  import('@/components/sections/ServicesSection').then((m) => ({ default: m.Services }))
)
const WhyChooseUs = lazy(() =>
  import('@/components/sections/WhyChooseUsSection').then((m) => ({ default: m.WhyChooseUs }))
)
const Process = lazy(() =>
  import('@/components/sections/ProcessSection').then((m) => ({ default: m.Process }))
)
const Stats = lazy(() =>
  import('@/components/sections/StatsSection').then((m) => ({ default: m.Stats }))
)
const Testimonials = lazy(() =>
  import('@/components/sections/TestimonialsSection').then((m) => ({ default: m.Testimonials }))
)
const BlogPreview = lazy(() =>
  import('@/components/sections/BlogPreviewSection').then((m) => ({ default: m.BlogPreview }))
)
const FAQ = lazy(() =>
  import('@/components/sections/FAQSection').then((m) => ({ default: m.FAQ }))
)
const CTA = lazy(() => import('@/components/common/CTA').then((m) => ({ default: m.CTA })))
const Contact = lazy(() =>
  import('@/components/sections/ContactSection').then((m) => ({ default: m.Contact }))
)
const EnhancedFooter = lazy(() =>
  import('@/components/layout/Footer').then((m) => ({ default: m.EnhancedFooter }))
)

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
)

const Index = () => {
  return (
    <>
      <SEO />
      <PagePreloader />
      <div className="min-h-screen">
        <Header />
        <main>
          <PageTransition delay={800}>
            <Hero />
          </PageTransition>
          <Suspense fallback={<SectionFallback />}>
            <PageTransition delay={900}>
              <About />
            </PageTransition>
            <PageTransition delay={1000}>
              <Services />
            </PageTransition>
            <WhyChooseUs />
            <Process />
            <Stats />
            <Testimonials />
            <BlogPreview />
            <FAQ />
            <CTA />
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <EnhancedFooter />
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default Index
