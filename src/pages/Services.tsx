import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/Header'
import { EnhancedFooter } from '@/components/layout/Footer'
import { SEO } from '@/components/common/SEO'
import { servicesData } from '@/constants/services'
import { cn } from '@/lib/utils'

const SERVICES_URL = 'https://rgsktechnologies.in/services'

const ServicesPage = () => {
  const servicesCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SERVICES_URL}#collection`,
    url: SERVICES_URL,
    name: 'RGSK Technologies Services',
    description:
      'Explore web development, mobile app development, social media marketing, bulk SMS, WhatsApp marketing, and SEO services from RGSK Technologies.',
    mainEntity: {
      '@id': `${SERVICES_URL}#services`,
    },
  }

  const servicesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SERVICES_URL}#services`,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: servicesData.length,
    itemListElement: servicesData.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SERVICES_URL}/${service.slug}`,
      name: service.title,
      description: service.description,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rgsktechnologies.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: SERVICES_URL },
    ],
  }

  return (
    <>
      <SEO
        title="Our Services | RGSK Technologies Pvt Ltd"
        description="Explore RGSK Technologies' digital services: Website Development, Mobile Apps, Bulk SMS, WhatsApp Marketing, Social Media Management & Digital Marketing in Lucknow."
        canonicalUrl={SERVICES_URL}
        keywords="RGSK Technologies services, web development, mobile apps, bulk SMS, WhatsApp marketing, social media, digital marketing Lucknow"
        structuredData={[servicesCollectionSchema, servicesItemListSchema, breadcrumbSchema]}
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
                Tailored services to elevate your business in the digital landscape. Click any
                service to learn more.
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
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
                      Learn more{' '}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/#contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 py-6 text-base font-semibold group"
                >
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
