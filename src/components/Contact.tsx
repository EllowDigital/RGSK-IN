import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    const form = e.target as HTMLFormElement

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        toast.success("Thank you! We'll get back to you soon.")
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Form submission failed.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '7054466111, 9670077733',
      href: 'tel:7054466111',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'rgsktechnologies@gmail.com',
      href: 'mailto:rgsktechnologies@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'C-Block, Shivaji Market, Indira Nagar, Lucknow - 226016',
      href: 'https://www.google.com/maps/search/?api=1&query=C-Block+Shivaji+Market+Indira+Nagar+Lucknow',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-16 lg:mb-20",
            headerVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Let's Work
            <span className="text-primary"> Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Have a project in mind? Get in touch and let's create something amazing.
          </p>
        </div>

        <div 
          ref={contentRef}
          className="grid lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <div 
            className={cn(
              "lg:col-span-2 space-y-4 sm:space-y-6",
              contentVisible ? "scroll-visible-left" : "scroll-hidden-left"
            )}
          >
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">Contact Information</h3>
              <div className="space-y-5 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.icon === MapPin ? '_blank' : undefined}
                    rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.title}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm sm:text-base break-words">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={cn(
              "lg:col-span-3",
              contentVisible ? "scroll-visible-right" : "scroll-hidden-right"
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-5 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">Send a Message</h3>
              <form
                action="https://formsubmit.co/rgsktechnologies@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {/* Hidden fields */}
                <input type="hidden" name="_subject" value="New contact from RGSK Technologies" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_cc" value="ellowdigitalindia@gmail.com" />
                <input type="hidden" name="_bcc" value="sarwanyadav6174@gmail.com" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting RGSK Technologies! We'll get back to you within 24 hours."
                />

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-11 sm:h-12 bg-background border-border focus:border-primary text-sm sm:text-base"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-11 sm:h-12 bg-background border-border focus:border-primary text-sm sm:text-base"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-11 sm:h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
