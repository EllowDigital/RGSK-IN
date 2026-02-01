import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export const EnhancedFooter = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const address = 'C-Block, Shivaji Market, Indira Nagar, Lucknow - 226016'
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/rgsktech/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/rgsktech', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/rgsktech/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/awanish-kannaujia-946502141', label: 'LinkedIn' },
  ]

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ]

  const services = [
    'Web Development',
    'Mobile Apps',
    'Digital Marketing',
    'UI/UX Design',
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="RGSK Technologies"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">RGSK Technologies</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-accent" />
                <div className="text-primary-foreground/70 text-sm">
                  <a href="tel:7054466111" className="hover:text-accent transition-colors block">
                    7054466111
                  </a>
                  <a href="tel:9670077733" className="hover:text-accent transition-colors block">
                    9670077733
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-accent" />
                <a
                  href="mailto:rgsktechnologies@gmail.com"
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors break-all"
                >
                  rgsktechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  {address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © 2025 RGSK Technologies. All Rights Reserved. Made with ❤️ by{' '}
            <a
              href="https://ellowdigital.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              EllowDigital
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  )
}
