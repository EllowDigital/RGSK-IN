import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, Sparkles } from 'lucide-react'

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
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="pt-6 px-6 relative z-10">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-sm md:text-base text-muted-foreground mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-primary/10 pt-4 mt-4">
                  <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                  {testimonial.post && (
                    <p className="text-xs md:text-sm text-primary font-medium">{testimonial.post}</p>
                  )}
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
