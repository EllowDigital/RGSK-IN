import { Zap, Headphones, DollarSign, Users, CheckCircle2, Trophy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Zap,
    title: 'Fast & Scalable',
    description: 'High-performance solutions that grow with your business needs.',
    benefits: ['Lightning Fast', 'Auto-Scaling', 'Future-Ready'],
    color: 'from-primary to-primary/80',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock dedicated support ensuring smooth operations.',
    benefits: ['Instant Response', 'Expert Team', 'Always Available'],
    color: 'from-accent to-accent/80',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising on quality.',
    benefits: ['Transparent Costs', 'Flexible Plans', 'Great ROI'],
    color: 'from-primary to-primary/80',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled professionals with years of expertise.',
    benefits: ['5+ Years', 'Certified Experts', 'Proven Track Record'],
    color: 'from-accent to-accent/80',
  },
]

export const WhyChooseUs = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            'text-center mb-12 sm:mb-16 lg:mb-20',
            headerVisible ? 'scroll-visible' : 'scroll-hidden'
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Excellence in Every
            <span className="text-primary"> Solution</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            We deliver innovation, dedication, and expertise that sets us apart
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'group p-5 sm:p-6 bg-card rounded-2xl sm:rounded-3xl border border-border hover:border-primary/40 transition-all duration-300 hover-lift text-center',
                gridVisible ? 'scroll-visible' : 'scroll-hidden'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-border">
                {feature.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 text-2xs sm:text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn('text-center', gridVisible ? 'scroll-visible' : 'scroll-hidden')}
          style={{ transitionDelay: '400ms' }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold group"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
