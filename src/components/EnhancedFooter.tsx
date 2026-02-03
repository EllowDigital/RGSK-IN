import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp, Globe } from 'lucide-react'
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
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div 
        ref={ref}
        className="container py-12 sm:py-14 lg:py-16 relative z-10"
      >
        <div 
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8",
            isVisible ? "scroll-visible" : "scroll-hidden"
          )}
        >
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <img
                  src="/logo.png"
                  alt="RGSK Technologies"
                  className="h-7 w-7 sm:h-9 sm:w-9 rounded-lg object-cover"
                />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold block">RGSK Technologies</span>
                <span className="text-xs text-primary-foreground/60">Digital Solutions</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/70 hover:text-accent transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              Our Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/70 hover:text-accent transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              Contact Info
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm">
                  <a href="tel:7054466111" className="hover:text-accent transition-colors block">
                    7054466111
                  </a>
                  <a href="tel:9670077733" className="hover:text-accent transition-colors block">
                    9670077733
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a
                  href="mailto:rgsktechnologies@gmail.com"
                  className="text-primary-foreground/70 text-xs sm:text-sm hover:text-accent transition-colors break-all"
                >
                  rgsktechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
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
      <div className="border-t border-white/10 relative z-10">
        <div className="container py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-primary-foreground/60 text-xs sm:text-sm text-center sm:text-left">
            © 2025 RGSK Technologies. All Rights Reserved. Made with ❤️ by{' '}
            <a
              href="https://ellowdigital.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              EllowDigital
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 bg-accent rounded-xl flex items-center justify-center hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
          </button>
        </div>
      </div>
    </footer>
  )
}
