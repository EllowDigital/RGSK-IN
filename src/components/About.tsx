import { Target, Lightbulb, Users, Rocket, Shield, Heart } from 'lucide-react'
import founderImage from '@/assets/founder.png'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import { useImageLoading } from '@/hooks/useContentLoading'
import { ImageSkeleton } from '@/components/ui/skeletons'

export const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: founderRef, isVisible: founderVisible } = useScrollAnimation()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation()
  const { isLoaded: imageLoaded } = useImageLoading(founderImage)

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description:
        'Empowering businesses with innovative digital solutions that drive real results.',
      color: 'bg-primary',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description:
        'Leading with cutting-edge technology and creative thinking to solve complex challenges.',
      color: 'bg-accent',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description:
        'Your success is our priority. We build lasting partnerships, not just projects.',
      color: 'bg-primary',
    },
  ]

  const badges = [
    { icon: Rocket, label: 'Fast Delivery' },
    { icon: Shield, label: '100% Secure' },
    { icon: Heart, label: 'Client Love' },
  ]

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

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
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Transforming Ideas Into
            <span className="text-primary"> Digital Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            RGSK Technologies is a forward-thinking digital solutions company committed to helping
            businesses thrive in the digital age.
          </p>
        </div>

        {/* Founder Section */}
        <div
          ref={founderRef}
          className={cn(
            'bg-card rounded-2xl sm:rounded-3xl border border-border p-4 sm:p-6 md:p-8 lg:p-12 mb-12 sm:mb-16 shadow-xl relative overflow-hidden',
            founderVisible ? 'scroll-visible-scale' : 'scroll-hidden-scale'
          )}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-muted max-w-sm mx-auto md:max-w-none shadow-lg relative">
                {!imageLoaded && (
                  <ImageSkeleton aspectRatio="4/5" className="absolute inset-0 w-full h-full" />
                )}
                <img
                  src={founderImage}
                  alt="Er. Awanish Kannaujia - Founder & Director"
                  className={cn(
                    'w-full h-full object-cover transition-opacity duration-500',
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 bg-accent/20 rounded-xl sm:rounded-2xl -z-10 hidden sm:block" />
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-xl sm:rounded-2xl -z-10 hidden sm:block" />
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Er. Awanish Kannaujia
                </h3>
                <p className="text-accent font-semibold mt-1 text-sm sm:text-base">
                  Founder & Director
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                With a vision to revolutionize digital communication and web solutions, Er. Awanish
                Kannaujia founded RGSK Technologies to bridge the gap between businesses and
                cutting-edge technology. Under his leadership, the company has grown to become a
                trusted partner for digital transformation.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-primary">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg sm:rounded-xl border border-primary/20">
                  <p className="text-xl sm:text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg sm:rounded-xl border border-accent/20">
                  <p className="text-xl sm:text-2xl font-bold text-accent">98%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg sm:rounded-xl border border-primary/20">
                  <p className="text-xl sm:text-2xl font-bold text-primary">5+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg sm:rounded-xl border border-accent/20">
                  <p className="text-xl sm:text-2xl font-bold text-accent">24/7</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={cn(
                'group p-5 sm:p-6 lg:p-8 bg-card rounded-2xl sm:rounded-3xl border border-border hover:border-primary/40 transition-all duration-300 hover-lift',
                valuesVisible ? 'scroll-visible' : 'scroll-hidden'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
