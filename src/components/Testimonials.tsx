import { Star, Quote } from 'lucide-react'

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
    <section className="section-padding bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            What Our Clients
            <span className="text-primary"> Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted-foreground/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                {testimonial.post && (
                  <p className="text-sm text-accent">{testimonial.post}</p>
                )}
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
