import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
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
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div
          ref={ref}
          className={cn(
            'max-w-4xl mx-auto text-center bg-card rounded-3xl border border-border p-8 sm:p-12 lg:p-16 shadow-xl',
            isVisible ? 'scroll-visible-scale' : 'scroll-hidden-scale'
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-semibold text-accent">
              Let's Build Something Amazing
            </span>
          </div>

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
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base font-semibold group"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
