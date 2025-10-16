import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, Headphones, DollarSign, Users, CheckCircle2, Star } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast & Scalable Solutions',
    description:
      'Cutting-edge technology delivering high-performance results that grow with your business.',
    gradient: 'from-primary to-primary-glow',
    benefits: ['Lightning Fast', 'Auto-Scaling', 'Future-Ready'],
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock dedicated support ensuring your operations run smoothly at all times.',
    gradient: 'from-accent to-secondary',
    benefits: ['Instant Response', 'Expert Team', 'Always Available'],
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description:
      'Competitive rates without compromising quality, making technology accessible for all.',
    gradient: 'from-secondary to-primary',
    benefits: ['Transparent Costs', 'Flexible Plans', 'Great ROI'],
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Skilled professionals with years of expertise delivering exceptional digital solutions.',
    gradient: 'from-primary to-accent',
    benefits: ['10+ Years', 'Certified Experts', 'Proven Track Record'],
  },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '50+', label: 'Team Members' },
]

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Excellence in Every Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            We deliver innovation, dedication, and expertise that sets us apart from the rest
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <CardContent className="pt-8 pb-6 px-4 relative z-10">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">Ready to experience the difference?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
