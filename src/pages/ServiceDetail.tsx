import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Send, Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/Header'
import { EnhancedFooter } from '@/components/EnhancedFooter'
import { SEO } from '@/components/SEO'
import { servicesData } from '@/data/services'
import { toast } from 'sonner'

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = servicesData.find((s) => s.slug === slug)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  if (!service) return <Navigate to="/services" replace />

  const canonicalUrl = `https://rgsktechnologies.in/services/${service.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    provider: {
      '@type': 'Organization',
      name: 'RGSK Technologies Pvt Ltd',
      url: 'https://rgsktechnologies.in',
    },
    areaServed: { '@type': 'Country', name: 'India' },
    serviceType: service.title,
    url: canonicalUrl,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rgsktechnologies.in' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://rgsktechnologies.in/services',
      },
      { '@type': 'ListItem', position: 3, name: service.title, item: canonicalUrl },
    ],
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <SEO
        title={`${service.title} | RGSK Technologies Pvt Ltd`}
        description={service.longDescription}
        canonicalUrl={canonicalUrl}
        keywords={service.keywords}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{service.shortTitle}</span>
            </nav>

            {/* Hero */}
            <div className="mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Features & Benefits */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">What's Included</h2>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">Key Benefits</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-3xl border border-border p-8 mb-16" id="inquiry">
              <h2 className="text-2xl font-bold mb-2 text-foreground">
                Inquire About {service.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
                    toast.error('Please fill in all required fields.')
                    return
                  }
                  setIsSubmitting(true)
                  try {
                    const res = await fetch(
                      'https://formsubmit.co/ajax/rgsktechnologies@gmail.com',
                      {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                        body: JSON.stringify({
                          name: formData.name,
                          email: formData.email,
                          phone: formData.phone,
                          message: formData.message,
                          _subject: `Service Inquiry: ${service.title}`,
                          service: service.title,
                        }),
                      }
                    )
                    if (res.ok) {
                      toast.success("Your inquiry has been sent! We'll contact you soon.")
                      setFormData({ name: '', email: '', phone: '', message: '' })
                    } else {
                      toast.error('Something went wrong. Please try again.')
                    }
                  } catch {
                    toast.error('Network error. Please try again later.')
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
                className="grid sm:grid-cols-2 gap-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    maxLength={100}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    maxLength={255}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    maxLength={20}
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder={`Tell us about your ${service.title.toLowerCase()} requirements...`}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    maxLength={1000}
                    rows={4}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 py-6 font-semibold w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" /> Send Inquiry
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Related Services */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Other Services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group p-5 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300"
                  >
                    <s.icon className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {service.slug === s.slug ? '' : s.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all services
              </Link>
            </div>
          </div>
        </main>
        <EnhancedFooter />
      </div>
    </>
  )
}

export default ServiceDetail
