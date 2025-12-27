import { Card } from '@/components/ui/card'
import {
  Globe,
  Smartphone,
  Share2,
  Phone,
  MessageCircle,
  ArrowRight,
  Code,
  Palette,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Custom, responsive websites built with modern technologies to establish your online presence.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications designed for seamless user experiences.',
    features: ['iOS & Android', 'Cross-platform', 'User-Friendly'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Strategic social media campaigns to grow your brand and engage with your audience.',
    features: ['Content Strategy', 'Analytics', 'Engagement'],
  },
  {
    icon: Phone,
    title: 'Bulk SMS & Voice Call',
    description: 'Reliable bulk messaging and voice call services for effective customer outreach.',
    features: ['High Delivery', 'Cost-Effective', 'Real-time Reports'],
  },
  {
    icon: MessageCircle,
    title: 'Bulk WhatsApp',
    description: 'Mass WhatsApp messaging solutions to connect with customers instantly.',
    features: ['Instant Delivery', 'Rich Media', 'API Integration'],
  },
]

const highlights = [
  { icon: Code, title: 'Clean Code', description: 'Well-structured & maintainable' },
  { icon: Palette, title: 'Modern Design', description: 'Beautiful & intuitive UI' },
  { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround times' },
]

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="relative py-20 md:py-32 bg-muted/50">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Comprehensive</span>
            <br />
            <span className="text-primary">Digital Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tailored services to elevate your business in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow Icon */}
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(services.length + index) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <highlight.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: `${(services.length + highlights.length) * 100}ms` }}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-base px-8 py-6 bg-primary hover:bg-primary/90 transition-colors shadow-md group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
