import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

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
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 px-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
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
