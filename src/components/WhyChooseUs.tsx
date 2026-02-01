import { Zap, Headphones, DollarSign, Users, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Zap,
    title: 'Fast & Scalable',
    description: 'High-performance solutions that grow with your business needs.',
    benefits: ['Lightning Fast', 'Auto-Scaling', 'Future-Ready'],
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock dedicated support ensuring smooth operations.',
    benefits: ['Instant Response', 'Expert Team', 'Always Available'],
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising on quality.',
    benefits: ['Transparent Costs', 'Flexible Plans', 'Great ROI'],
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled professionals with years of expertise.',
    benefits: ['5+ Years', 'Certified Experts', 'Proven Track Record'],
  },
]

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Excellence in Every
            <span className="text-primary"> Solution</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We deliver innovation, dedication, and expertise that sets us apart
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 pt-4 border-t border-border">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
