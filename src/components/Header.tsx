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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-lg shadow-lg border-b border-border/50" 
          : "bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <button 
            onClick={() => handleNavigation('home', false)}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-lg group-hover:blur-xl transition-all animate-pulse" />
              <img 
                src="/logo.png" 
                alt="RGSK Technologies Pvt. Ltd." 
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-3 border-primary/40 shadow-xl relative z-10 group-hover:scale-110 group-hover:border-primary/60 transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl md:text-3xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">RGSK</span>
                <span className="text-foreground"> Technologies</span>
              </div>
              <div className="text-xs text-muted-foreground font-medium">Digital Solutions Pvt. Ltd.</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.isRoute)}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-all font-semibold text-sm lg:text-base group overflow-hidden rounded-lg"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg" />
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.isRoute)}
                className="block w-full text-left px-4 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-semibold rounded-lg mx-2"
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
