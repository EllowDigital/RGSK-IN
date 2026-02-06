import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Process } from '@/components/Process'
import { Stats } from '@/components/Stats'
import { Portfolio } from '@/components/Portfolio'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'
import { EnhancedFooter } from '@/components/EnhancedFooter'
import { SEO } from '@/components/SEO'
import { Preloader } from '@/components/Preloader'
import { PageTransition } from '@/components/PageTransition'

const Index = () => {
  return (
    <>
      <SEO />
      <Preloader />
      <div className="min-h-screen">
        <Header />
        <main>
          <PageTransition delay={1300}>
            <Hero />
          </PageTransition>
          <PageTransition delay={1400}>
            <About />
          </PageTransition>
          <PageTransition delay={1500}>
            <Services />
          </PageTransition>
          <WhyChooseUs />
          <Process />
          <Stats />
          {/* <Portfolio /> */}
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
