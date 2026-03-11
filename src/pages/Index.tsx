import { lazy, Suspense } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SEO } from '@/components/SEO'
import { Preloader } from '@/components/Preloader'
import { PageTransition } from '@/components/PageTransition'

// Lazy load below-the-fold sections
const About = lazy(() => import('@/components/About').then((m) => ({ default: m.About })))
const Services = lazy(() => import('@/components/Services').then((m) => ({ default: m.Services })))
const WhyChooseUs = lazy(() =>
  import('@/components/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs }))
)
const Process = lazy(() => import('@/components/Process').then((m) => ({ default: m.Process })))
const Stats = lazy(() => import('@/components/Stats').then((m) => ({ default: m.Stats })))
const Testimonials = lazy(() =>
  import('@/components/Testimonials').then((m) => ({ default: m.Testimonials }))
)
const BlogPreview = lazy(() =>
  import('@/components/BlogPreview').then((m) => ({ default: m.BlogPreview }))
)
const FAQ = lazy(() => import('@/components/FAQ').then((m) => ({ default: m.FAQ })))
const CTA = lazy(() => import('@/components/CTA').then((m) => ({ default: m.CTA })))
const Contact = lazy(() => import('@/components/Contact').then((m) => ({ default: m.Contact })))
const EnhancedFooter = lazy(() =>
  import('@/components/EnhancedFooter').then((m) => ({ default: m.EnhancedFooter }))
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
      <Preloader />
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
