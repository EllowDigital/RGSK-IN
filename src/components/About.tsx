import { Target, Lightbulb, Users } from 'lucide-react'
import founderImage from '@/assets/founder.png'

export const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Empowering businesses with innovative digital solutions that drive real results.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Leading with cutting-edge technology and creative thinking to solve complex challenges.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our priority. We build lasting partnerships, not just projects.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Transforming Ideas Into
            <span className="text-primary"> Digital Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            RGSK Technologies is a forward-thinking digital solutions company committed 
            to helping businesses thrive in the digital age.
          </p>
        </div>

        {/* Founder Section */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 mb-16 shadow-lg animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={founderImage}
                  alt="Er. Awanish Kannaujia - Founder & Director"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Er. Awanish Kannaujia
                </h3>
                <p className="text-accent font-medium mt-1">Founder & Director</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                With a vision to revolutionize digital communication and web solutions, 
                Er. Awanish Kannaujia founded RGSK Technologies to bridge the gap between 
                businesses and cutting-edge technology. Under his leadership, the company 
                has grown to become a trusted partner for digital transformation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-2xl font-bold text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-2xl font-bold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
