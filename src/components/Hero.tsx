import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
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

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const highlights = [
    'Custom Web Development',
    'Mobile Applications',
    'Digital Marketing',
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.03),transparent_50%)]" />

      <div ref={ref} className="container relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={cn(
              "inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 border border-primary/10 rounded-full mb-6 sm:mb-8",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Leading Digital Agency</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={cn(
              "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl font-bold tracking-tight mb-4 sm:mb-6",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-foreground">Build Your</span>
            <br />
            <span className="text-primary">Digital Future</span>
          </h1>

          {/* Subheading */}
          <p 
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            We craft exceptional digital experiences that help businesses 
            grow, engage customers, and achieve measurable results.
          </p>

          {/* Highlights */}
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
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-muted-foreground"
              >
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                <span>{item}</span>
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
              className="w-full xs:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="w-full xs:w-auto border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div 
            className={cn(
              "grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-xs sm:max-w-lg lg:max-w-xl mx-auto mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border",
              isVisible ? "scroll-visible" : "scroll-hidden"
            )}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="text-center">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">500+</p>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1">Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">500+</p>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">5+</p>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1">Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-border rounded-full flex justify-center pt-1.5 sm:pt-2">
          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
