import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss how we can help your business grow with our innovative digital solutions
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
