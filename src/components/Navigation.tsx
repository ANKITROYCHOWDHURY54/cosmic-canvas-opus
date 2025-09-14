import { useState, useEffect } from "react";
import { Menu, X, Star, Moon, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Zodiac", href: "#zodiac" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "zodiac", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const elementId = href.replace("#", "");
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center cosmic-pulse">
                <Moon className="w-6 h-6 text-background constellation-rotate" />
              </div>
              <Star className="absolute -top-1 -right-1 w-4 h-4 text-secondary star-sparkle" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Celestial Guidance
              </h1>
              <p className="text-xs text-muted-foreground">Luna Starweaver</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {activeSection === item.href.replace("#", "") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background rounded-full font-semibold hover:scale-105 transition-all duration-300 cosmic-glow"
            >
              Book Reading
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? "max-h-96 opacity-100 pb-6" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="space-y-4 pt-4 border-t border-border/30">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-muted/50 hover:text-primary fade-in-up ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary bg-muted/30"
                    : "text-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              Book Reading
            </button>
          </div>
        </div>
      </div>

      {/* Floating Navigation Dots (Desktop) */}
      <div className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="group relative block"
              title={item.name}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.href.replace("#", "")
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/50 hover:bg-primary/70 hover:scale-110"
              }`} />
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {item.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;