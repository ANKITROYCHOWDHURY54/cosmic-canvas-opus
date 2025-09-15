import { useState, useEffect, useRef } from "react";
import { Menu, X, Star, Moon, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const rippleRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeout = useRef<number | null>(null);

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
      if (isProgrammaticScroll.current) return; // don't override while smooth-scrolling by click
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

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>, itemName: string) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.className = 'mobile-nav-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const scrollToSection = (href: string) => {
    const elementId = href.replace("#", "");
    const element = document.getElementById(elementId);
    // Update active section immediately to avoid highlight lag
    setActiveSection(elementId);
    // Lock scroll-based updates during programmatic scroll
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimeout.current) {
      window.clearTimeout(programmaticScrollTimeout.current);
    }
    if (element) {
      const navHeight = window.innerWidth >= 640 ? 96 : 80; // sm:h-24 = 96px, h-20 = 80px
      const elementPosition = element.offsetTop - navHeight - 20; // Extra 20px buffer
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    // Release lock after smooth scroll likely completes
    programmaticScrollTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 w-full overflow-hidden ${
      scrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-2xl" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center cosmic-pulse glow-on-hover">
                <Moon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-background constellation-rotate" />
              </div>
              <Star className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-secondary star-sparkle" />
              <Sparkles className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 text-accent floating-animation" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent">
                Celestial Guidance
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Luna Starweaver</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 xl:px-6 py-2 xl:py-3 pb-1 font-medium transition-all duration-500 hover:text-primary rounded-xl group text-sm xl:text-base ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div
                  className={`pointer-events-none absolute bottom-0 left-2 right-2 h-0.5 rounded-full z-10 transition-all duration-300 origin-left ${
                    activeSection === item.href.replace("#", "")
                      ? "opacity-100 scale-x-100 bg-gradient-to-r from-primary via-accent to-secondary"
                      : "opacity-0 scale-x-0 bg-transparent"
                  }`}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection("#contact")}
              className="px-6 xl:px-8 py-3 xl:py-4 bg-gradient-to-r from-primary via-accent to-secondary text-background rounded-full font-semibold hover:scale-110 hover:-translate-y-1 transition-all duration-500 cosmic-glow group relative overflow-hidden text-sm xl:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Star className="w-3 h-3 xl:w-4 xl:h-4" />
                Book Reading
              </span>
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
            ? "max-h-96 opacity-100 pb-4" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="mobile-nav-backdrop mobile-nav-overlay space-y-2 pt-4 relative">
            {/* Cosmic Aurora Background */}
            <div className="mobile-nav-aurora"></div>
            
            {/* Constellation Pattern */}
            <div className="mobile-nav-constellation">
              <div className="mobile-nav-star"></div>
              <div className="mobile-nav-star"></div>
              <div className="mobile-nav-star"></div>
              <div className="mobile-nav-star"></div>
              <div className="mobile-nav-star"></div>
              <div className="mobile-nav-star"></div>
            </div>
            
            {/* Light Rays */}
            <div className="mobile-nav-light-rays">
              <div className="mobile-nav-ray"></div>
              <div className="mobile-nav-ray"></div>
              <div className="mobile-nav-ray"></div>
            </div>
            
            {/* Animated Background Particles */}
            <div className="mobile-nav-particles">
              <div className="mobile-nav-particle"></div>
              <div className="mobile-nav-particle"></div>
              <div className="mobile-nav-particle"></div>
              <div className="mobile-nav-particle"></div>
            </div>
            
            {/* Shimmer Effect */}
            <div className="mobile-nav-shimmer"></div>
            
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={(e) => {
                  createRipple(e, item.name);
                  scrollToSection(item.href);
                }}
                className={`mobile-nav-item-enhanced block w-full text-left px-4 py-3 rounded-lg font-medium fade-in-up text-sm ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary active"
                    : "text-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={(e) => {
                createRipple(e, "Book Reading");
                scrollToSection("#contact");
              }}
              className="mobile-nav-cta-enhanced w-full mt-4 px-6 py-3 text-background rounded-full font-semibold transition-all duration-300 text-sm"
            >
              Book Reading
            </button>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;