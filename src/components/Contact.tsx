import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin } from 'lucide-react'
import { toast } from 'sonner'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Using FormSubmit.co - form will submit directly to their service
    const form = e.target as HTMLFormElement

    try {
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      toast.success("Thank you! We'll get back to you soon.")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to discuss your project or learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">7054466111, 9670077733</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">rgsktechnologies@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
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
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/rgsktechnologies@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* FormSubmit Configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New contact from RGSK Technologies website"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_cc" value="ellowdigitalindia@gmail.com" />
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
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
