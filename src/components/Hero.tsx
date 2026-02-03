import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, Smartphone, Zap } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const highlights = [
    { icon: Globe, text: 'Web Development' },
    { icon: Smartphone, text: 'Mobile Apps' },
    { icon: Zap, text: 'Digital Marketing' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div ref={ref} className="container relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={cn(
              "inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-6 sm:mb-8",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary">Trusted by 500+ Businesses</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={cn(
              "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl font-bold tracking-tight mb-4 sm:mb-6",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-foreground">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Digital Vision</span>
          </h1>

          {/* Subheading */}
          <p 
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 px-2",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            RGSK Technologies delivers innovative web, mobile, and marketing solutions 
            that drive growth and create lasting impact for your business.
          </p>

          {/* Service Highlights */}
          <div 
            className={cn(
              "flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '300ms' }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className={cn(
              "flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full xs:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="w-full xs:w-auto border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div 
            className={cn(
              "grid grid-cols-3 gap-4 sm:gap-8 lg:gap-16 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-border",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="text-center group">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary group-hover:scale-105 transition-transform">500+</p>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1 font-medium">Happy Clients</p>
            </div>
            <div className="text-center group">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary group-hover:scale-105 transition-transform">500+</p>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1 font-medium">Projects Done</p>
            </div>
            <div className="text-center group">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary group-hover:scale-105 transition-transform">5+</p>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1 font-medium">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
