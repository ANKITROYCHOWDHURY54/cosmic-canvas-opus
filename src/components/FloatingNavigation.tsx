import { useState, useEffect } from "react";

const FloatingNavigation = () => {
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
  };

  return (
    <div 
      className="hidden lg:block"
      style={{
        position: 'fixed',
        right: '1rem',
        top: '50vh',
        transform: 'translateY(-50%)',
        zIndex: 99999,
        visibility: 'visible',
        opacity: 1,
        display: 'block',
        pointerEvents: 'auto'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="group relative block"
            title={item.name}
            style={{ 
              display: 'block', 
              visibility: 'visible', 
              opacity: 1,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <div 
              className={`nav-dot ${
                activeSection === item.href.replace("#", "")
                  ? "bg-primary active"
                  : "bg-muted-foreground/60 hover:bg-primary/80"
              }`} 
              style={{ 
                display: 'block', 
                visibility: 'visible', 
                opacity: 1,
                width: '0.75rem',
                height: '0.75rem',
                borderRadius: '50%',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative'
              }} 
            />
            <div 
              className="nav-tooltip"
              style={{
                position: 'absolute',
                right: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'hsl(var(--background) / 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid hsl(var(--border) / 0.5)',
                borderRadius: '0.5rem',
                padding: '0.375rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: '500',
                color: 'hsl(var(--foreground))',
                whiteSpace: 'nowrap',
                opacity: 0,
                pointerEvents: 'none',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 20px hsl(var(--background) / 0.3)'
              }}
            >
              {item.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavigation;




