import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.03),transparent_50%)]" />

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">Leading Digital Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in delay-100">
            <span className="text-foreground">Build Your</span>
            <br />
            <span className="text-primary">Digital Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
            We craft exceptional digital experiences that help businesses 
            grow, engage customers, and achieve measurable results.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in delay-300">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-400">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-8 py-6 text-base font-medium group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="w-full sm:w-auto border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-base"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-12 border-t border-border animate-fade-in delay-500">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">5+</p>
              <p className="text-sm text-muted-foreground mt-1">Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
