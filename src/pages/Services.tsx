import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { EnhancedFooter } from '@/components/EnhancedFooter'
import { SEO } from '@/components/SEO'
import { servicesData } from '@/data/services'
import { cn } from '@/lib/utils'

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Our Services | RGSK Technologies Pvt Ltd"
        description="Explore RGSK Technologies' digital services: Website Development, Mobile Apps, Bulk SMS, WhatsApp Marketing, Social Media Management & Digital Marketing in Lucknow."
        canonicalUrl="https://rgsktechnologies.in/services"
        keywords="RGSK Technologies services, web development, mobile apps, bulk SMS, WhatsApp marketing, social media, digital marketing Lucknow"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container">
            {/* Page Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Services
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Comprehensive <span className="text-primary">Digital Solutions</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
                Tailored services to elevate your business in the digital landscape. Click any service to learn more.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group relative p-6 lg:p-8 bg-card rounded-3xl border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 py-6 text-base font-semibold group">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <EnhancedFooter />
      </div>
    </>
  )
}

export default ServicesPage
