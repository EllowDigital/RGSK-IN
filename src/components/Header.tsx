import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
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
    { label: 'Home', id: 'home', isRoute: false },
    { label: 'About', id: 'about', isRoute: false },
    { label: 'Services', id: 'services', isRoute: false },
    { label: 'Blog', id: '/blog', isRoute: true },
    { label: 'Contact', id: 'contact', isRoute: false },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('home', false)}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="RGSK Technologies"
                className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-13 lg:w-13 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground leading-tight">
                <span className="text-primary">RGSK</span> Technologies
              </span>
              <span className="text-2xs sm:text-xs text-muted-foreground hidden xs:block font-medium">
                Digital Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && location.pathname === '/'
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id, item.isRoute)}
                  className={cn(
                    'relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </button>
              )
            })}
            <Button
              onClick={() => handleNavigation('contact', false)}
              className="ml-3 xl:ml-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 text-sm px-5 xl:px-6 font-semibold"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-80 bg-background border-border">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate through different sections
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full pt-6 sm:pt-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border">
                  <img
                    src="/logo.png"
                    alt="RGSK Technologies"
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl object-cover"
                  />
                  <div>
                    <h2 className="font-bold text-foreground text-sm sm:text-base">RGSK Technologies</h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">Digital Solutions</p>
                  </div>
                </div>

                <nav className="flex-1 space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id && location.pathname === '/'
                    return (
                      <SheetClose asChild key={item.id}>
                        <button
                          onClick={() => handleNavigation(item.id, item.isRoute)}
                          className={cn(
                            'w-full flex items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-left transition-all duration-200 text-sm sm:text-base',
                            isActive
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          )}
                        >
                          {item.label}
                        </button>
                      </SheetClose>
                    )
                  })}
                </nav>

                <div className="pt-4 sm:pt-6 border-t border-border">
                  <SheetClose asChild>
                    <Button
                      onClick={() => handleNavigation('contact', false)}
                      className="w-full bg-primary text-primary-foreground text-sm sm:text-base py-2.5 sm:py-3"
                    >
                      Get Started
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
