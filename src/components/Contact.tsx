import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// Import Loader2 for the submitting state
import { Phone, Mail, MapPin, Send, Sparkles, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  // Add state to track submission status
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Don't submit if already submitting
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

      // Check if the submission was successful
      if (response.ok) {
        toast.success("Thank you! We'll get back to you soon.")
        setFormData({ name: '', email: '', message: '' })
      } else {
        // Handle server errors (e.g., 404, 500)
        console.error('Form submission error status:', response.status)
        throw new Error('Form submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      // Always set submitting to false after the try/catch block
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          {/* ... existing code ... */}
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to discuss your project or learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* ... existing code ... */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardHeader className="relative z-10">
                {/* This was the line with the error. Added closing tag. */}
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  We're here to help and answer any questions you might have
                </p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors group/item">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                    <p className="text-muted-foreground text-sm">7054466111, 9670077733</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors group/item">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm break-all">
                      rgsktechnologies@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors group/item">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      C-Block, Shivaji Market, near Eram College,
                      <br />
                      Indira Nagar, Lucknow,
                      <br />
                      Uttar Pradesh – 226016
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            {/* ... existing code ... */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent className="relative z-10">
              <form
                action="https://formsubmit.co/rgsktechnologies@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* FormSubmit Configuration */}
                {/* ... existing hidden inputs ... */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New contact from RGSK Technologies website"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_cc" value="ellowdigitalindia@gmail.com" />
                <input type="hidden" name="_bcc" value="sarwanyadav6174@gmail.com" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting RGSK Technologies!&#10;&#10;We have received your message and a member of our team will get back to you within 24 hours.&#10;&#10;If your inquiry is urgent, please reach us directly:&#10;Phone: +91 70544 66111 / +91 96700 77733&#10;Email: rgsktechnologies@gmail.com&#10;Address: C-Block, Shivaji Market, near Eram College, Indira Nagar, Lucknow, Uttar Pradesh – 226016&#10;&#10;Warm regards,&#10;RGSK Technologies Team"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://rgsktechnologies.netlify.app/#contact"
                />
                <input
                  type="hidden"
                  name="_prev"
                  value="https://rgsktechnologies.netlify.app/#home"
                />

                {/* Form Fields */}
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 bg-background/50 border-2 focus:border-primary transition-colors"
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
                    className="h-12 bg-background/50 border-2 focus:border-primary transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-background/50 border-2 focus:border-primary transition-colors resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                  // Disable button when submitting
                  disabled={isSubmitting}
                >
                  {/* Show loader when submitting, otherwise show send icon */}
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

