import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, Home, User, Briefcase, Phone } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'services', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (id: string, isRoute: boolean) => {
    if (isRoute) {
      navigate(id)
      setIsMobileMenuOpen(false)
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'home', isRoute: false, icon: Home },
    { label: 'About', id: 'about', isRoute: false, icon: User },
    { label: 'Services', id: 'services', isRoute: false, icon: Briefcase },
    { label: 'Contact', id: 'contact', isRoute: false, icon: Phone },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('home', false)}
            className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
          >
            <div className="relative flex-shrink-0">
              <img
                src="/logo.png"
                alt="RGSK Technologies"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-xl object-cover border border-border shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-none text-primary">
                RGSK Technologies
              </span>
              <span className="text-xs text-muted-foreground leading-tight hidden sm:block">
                Digital Solutions Provider
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id && location.pathname === '/'
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id, item.isRoute)}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group flex items-center gap-2',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-accent'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-full bg-primary" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden relative w-10 h-10 flex items-center justify-center hover:bg-accent rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate through different sections of the website
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src="/logo.png"
                    alt="RGSK Technologies"
                    className="h-10 w-10 rounded-lg object-cover border border-border"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-primary">RGSK Technologies</h2>
                    <p className="text-sm text-muted-foreground">Digital Solutions Provider</p>
                  </div>
                </div>

                <nav className="flex-1 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.id && location.pathname === '/'
                    return (
                      <SheetClose asChild key={item.id}>
                        <button
                          onClick={() => handleNavigation(item.id, item.isRoute)}
                          className={cn(
                            'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors',
                            isActive
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'hover:bg-accent text-foreground'
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                          {isActive && <div className="ml-auto w-2 h-2 bg-primary rounded-full" />}
                        </button>
                      </SheetClose>
                    )
                  })}
                </nav>

                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Ready to transform your digital presence?
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
