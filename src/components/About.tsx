import { Target, Lightbulb, Users } from 'lucide-react'
import founderImage from '@/assets/founder.png'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: founderRef, isVisible: founderVisible } = useScrollAnimation()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation()

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
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-16 lg:mb-20",
            headerVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">About Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Transforming Ideas Into
            <span className="text-primary"> Digital Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            RGSK Technologies is a forward-thinking digital solutions company committed 
            to helping businesses thrive in the digital age.
          </p>
        </div>

        {/* Founder Section */}
        <div 
          ref={founderRef}
          className={cn(
            "bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 md:p-8 lg:p-12 mb-12 sm:mb-16 shadow-lg",
            founderVisible ? "scroll-visible-scale" : "scroll-hidden-scale"
          )}
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-muted max-w-sm mx-auto md:max-w-none">
                <img
                  src={founderImage}
                  alt="Er. Awanish Kannaujia - Founder & Director"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent/10 rounded-xl sm:rounded-2xl -z-10 hidden sm:block" />
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Er. Awanish Kannaujia
                </h3>
                <p className="text-accent font-medium mt-1 text-sm sm:text-base">Founder & Director</p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                With a vision to revolutionize digital communication and web solutions, 
                Er. Awanish Kannaujia founded RGSK Technologies to bridge the gap between 
                businesses and cutting-edge technology. Under his leadership, the company 
                has grown to become a trusted partner for digital transformation.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="p-3 sm:p-4 bg-muted/50 rounded-lg sm:rounded-xl">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">500+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="p-3 sm:p-4 bg-muted/50 rounded-lg sm:rounded-xl">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">98%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="p-3 sm:p-4 bg-muted/50 rounded-lg sm:rounded-xl">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">5+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-3 sm:p-4 bg-muted/50 rounded-lg sm:rounded-xl">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">24/7</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div 
          ref={valuesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={cn(
                "group p-5 sm:p-6 lg:p-8 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift",
                valuesVisible ? "scroll-visible" : "scroll-hidden"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
