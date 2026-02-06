import { Star, Quote, MessageSquare } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import { useContentLoading } from '@/hooks/useContentLoading'
import { TestimonialSkeleton } from '@/components/ui/skeletons'

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
  const { isReady } = useContentLoading({ minDelay: 300 })

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-16 lg:mb-20",
            headerVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          </div>
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
          {!isReady ? (
            <>
              {Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))}
            </>
          ) : (
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "group relative bg-card rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-6 lg:p-8 hover:border-primary/40 transition-all duration-300 hover-lift animate-content-reveal",
                  gridVisible ? "scroll-visible" : "scroll-hidden"
                )}
                style={{ transitionDelay: `${index * 100}ms`, animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4 sm:pt-5">
                  <p className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  {testimonial.post && (
                    <p className="text-xs sm:text-sm text-accent font-medium">{testimonial.post}</p>
                  )}
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
