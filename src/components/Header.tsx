import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string, isRoute: boolean) => {
    if (isRoute) {
      navigate(id);
      setIsMobileMenuOpen(false);
    } else {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home", isRoute: false },
    { label: "About", id: "about", isRoute: false },
    { label: "Services", id: "services", isRoute: false },
    { label: "Portfolio", id: "/portfolio", isRoute: true },
    { label: "Contact", id: "contact", isRoute: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40"
          : "bg-background/10 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          <button
            onClick={() => handleNavigation('home', false)}
            className="flex items-center gap-3 sm:gap-3.5 md:gap-4 group min-w-0 hover:opacity-90 transition-opacity"
          >
            <div className="relative flex-shrink-0">
              <img
                src="/logo.png"
                alt="RGSK Technologies"
                className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-xl object-cover border border-primary/20 shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-none bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent whitespace-nowrap">
                RGSK Technologies
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight mt-0.5 hidden xs:block whitespace-nowrap">
                Digital Solutions Provider
              </span>
            </div>
          </button>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.isRoute)}
                className="relative px-2.5 lg:px-3 xl:px-4 py-2 text-foreground/80 hover:text-primary transition-all font-medium text-xs lg:text-sm xl:text-base group whitespace-nowrap"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 h-9 w-9 sm:h-10 sm:w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </Button>
        </div>

        {/* Mobile & Tablet Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-3 border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.isRoute)}
                className="block w-full text-left px-3 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold rounded-lg"
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {item.isRoute && <span className="text-xs text-primary">→</span>}
                </span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
