import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Sarwan Yadav',
    post: 'CEO',
    company: 'EllowDigital',
    text: 'RGSK Technologies delivered an exceptional website that exceeded our expectations. Their team was professional and responsive throughout.',
    rating: 5,
  },
  {
    name: 'Nitesh Yadav',
    post: 'Founder',
    company: 'Ghatak Sports Academy India',
    text: 'The bulk WhatsApp service has transformed how we communicate with customers. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Amogh Singh Saini',
    company: 'Digital Marketing Agency',
    text: 'Outstanding mobile app development and great post-launch support. RGSK Technologies is our go-to tech partner.',
    rating: 5,
  },
]

export const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-16 lg:mb-20",
            headerVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            What Our Clients
            <span className="text-primary"> Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 hover-lift",
                gridVisible ? "scroll-visible" : "scroll-hidden"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground/10" />

              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                {testimonial.post && (
                  <p className="text-xs sm:text-sm text-accent">{testimonial.post}</p>
                )}
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
