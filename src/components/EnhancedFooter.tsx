import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Sparkles,
} from 'lucide-react'

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

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(158,64,52,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(52,158,158,0.08),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-2xl font-bold">
                <span className="text-primary">RGSK</span> Technologies
              </h3>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-background/70 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-background/70 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/70 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-background/70 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  Mobile Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/70 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  UI/UX Design
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="text-background/70 text-sm">
                  <div className="hover:text-primary transition-colors cursor-pointer">
                    7054466111
                  </div>
                  <div className="hover:text-primary transition-colors cursor-pointer">
                    9670077733
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <span className="text-background/70 text-sm hover:text-accent transition-colors cursor-pointer break-all">
                  rgsktechnologies@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-background/70 text-sm">
                  C-Block, Shivaji Market, Indira Nagar, Lucknow - 226016
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2025 <span className="text-primary font-semibold">RGSK Technologies</span> | All
            Rights Reserved | Made with ❤️ by{' '}
            <a
              href="https://ellowdigital.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline transition-colors"
            >
              EllowDigital
            </a>
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
