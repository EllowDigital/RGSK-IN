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
            className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group min-w-0"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-md group-hover:blur-lg transition-all" />
              <img
                src="/logo.png"
                alt="RGSK Technologies"
                className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full object-cover border-2 border-primary/30 shadow-lg relative z-10 group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight whitespace-nowrap">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RGSK</span>
                <span className="text-foreground"> Technologies</span>
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground whitespace-nowrap hidden xs:block">Digital Solutions</div>
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
