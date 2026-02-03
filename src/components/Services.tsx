import {
  Globe,
  Smartphone,
  Share2,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies to establish your online presence.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications designed for seamless user experiences.',
    features: ['iOS & Android', 'Cross-platform', 'User-Friendly'],
    gradient: 'from-accent/20 to-accent/5',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic social media campaigns to grow your brand and engage with your audience.',
    features: ['Content Strategy', 'Analytics', 'Engagement'],
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    icon: Phone,
    title: 'Bulk SMS & Voice Call',
    description: 'Reliable bulk messaging and voice call services for effective customer outreach.',
    features: ['High Delivery', 'Cost-Effective', 'Real-time Reports'],
    gradient: 'from-accent/20 to-accent/5',
  },
  {
    icon: MessageCircle,
    title: 'Bulk WhatsApp',
    description: 'Mass WhatsApp messaging solutions to connect with customers instantly.',
    features: ['Instant Delivery', 'Rich Media', 'API Integration'],
    gradient: 'from-primary/20 to-primary/5',
  },
]

export const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-16 lg:mb-20",
            headerVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Comprehensive
            <span className="text-primary"> Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Tailored services to elevate your business in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-5 sm:p-6 lg:p-8 bg-card rounded-2xl sm:rounded-3xl border border-border hover:border-primary/40 transition-all duration-500 hover-lift overflow-hidden",
                gridVisible ? "scroll-visible" : "scroll-hidden"
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="relative space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={cn(
            "text-center",
            gridVisible ? "scroll-visible" : "scroll-hidden"
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
