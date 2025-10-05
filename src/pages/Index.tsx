import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Stats } from '@/components/Stats'
import { Portfolio } from '@/components/Portfolio'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'
import { EnhancedFooter } from '@/components/EnhancedFooter'
import { SEO } from '@/components/SEO'
import { Preloader } from '@/components/Preloader'

const Index = () => {
  return (
    <>
      <SEO />
      <Preloader />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Stats />
          <Portfolio />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <EnhancedFooter />
      </div>
    </>
  )
}

export default Index
