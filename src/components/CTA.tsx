import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div 
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center",
            isVisible ? "scroll-visible-scale" : "scroll-hidden-scale"
          )}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
            Ready to Transform Your
            <span className="text-primary"> Digital Presence?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto px-2">
            Let's discuss how we can help your business grow with our innovative digital solutions.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base group"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
