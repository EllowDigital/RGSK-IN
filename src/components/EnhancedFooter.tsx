import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export const EnhancedFooter = () => {
  const { ref, isVisible } = useScrollAnimation()

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
      <div 
        ref={ref}
        className="container py-12 sm:py-14 lg:py-16"
      >
        <div 
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8",
            isVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img
                src="/logo.png"
                alt="RGSK Technologies"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover"
              />
              <span className="text-lg sm:text-xl font-bold">RGSK Technologies</span>
            </div>
            <p className="text-primary-foreground/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 mt-0.5 sm:mt-1 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/70 text-xs sm:text-sm">
                  <a href="tel:7054466111" className="hover:text-accent transition-colors block">
                    7054466111
                  </a>
                  <a href="tel:9670077733" className="hover:text-accent transition-colors block">
                    9670077733
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 mt-0.5 sm:mt-1 text-accent flex-shrink-0" />
                <a
                  href="mailto:rgsktechnologies@gmail.com"
                  className="text-primary-foreground/70 text-xs sm:text-sm hover:text-accent transition-colors break-all"
                >
                  rgsktechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 mt-0.5 sm:mt-1 text-accent flex-shrink-0" />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 text-xs sm:text-sm hover:text-accent transition-colors"
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
        <div className="container py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-primary-foreground/60 text-xs sm:text-sm text-center sm:text-left">
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
            className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  )
}
