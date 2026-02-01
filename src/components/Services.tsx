import {
  Globe,
  Smartphone,
  Share2,
  Phone,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies to establish your online presence.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications designed for seamless user experiences.',
    features: ['iOS & Android', 'Cross-platform', 'User-Friendly'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic social media campaigns to grow your brand and engage with your audience.',
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

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Comprehensive
            <span className="text-primary"> Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tailored services to elevate your business in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-8 py-6 text-base group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
