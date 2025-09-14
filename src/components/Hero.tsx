import { Star, Moon, Sparkles, Zap, Sun, Circle } from "lucide-react";
import heroImage from "@/assets/hero-cosmic-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="starfield" />
      
      {/* Enhanced Floating Particles */}
      <div className="absolute top-20 left-20 particle-field">
        <Star className="w-8 h-8 text-secondary stellar-glow" />
      </div>
      <div className="absolute top-40 right-32 particle-field stagger-2">
        <Moon className="w-10 h-10 text-primary stellar-glow constellation-rotate" />
      </div>
      <div className="absolute bottom-32 left-16 particle-field stagger-3">
        <Sparkles className="w-6 h-6 text-accent stellar-glow" />
      </div>
      <div className="absolute top-60 left-1/4 particle-field stagger-4">
        <Zap className="w-7 h-7 text-secondary stellar-glow" />
      </div>
      <div className="absolute bottom-48 right-20 particle-field stagger-5">
        <Sun className="w-9 h-9 text-primary stellar-glow constellation-rotate" style={{ animationDuration: '25s' }} />
      </div>
      <div className="absolute top-80 right-1/3 particle-field stagger-6">
        <Circle className="w-5 h-5 text-accent stellar-glow" />
      </div>
      
      {/* Orbital Elements */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="orbital-motion">
          <Star className="w-4 h-4 text-secondary" />
        </div>
      </div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="orbital-motion" style={{ animationDelay: '7s', animationDuration: '20s' }}>
          <Sparkles className="w-3 h-3 text-accent" />
        </div>
      </div>

      {/* Enhanced Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="cosmic-text-reveal">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="section-title block mb-4">Celestial</span>
            <span className="section-title block cosmic-text-reveal stagger-1">Guidance</span>
          </h1>
        </div>
        
        <div className="cosmic-text-reveal stagger-2">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Unlock the mysteries of the cosmos and discover your destiny through ancient wisdom 
            and celestial insights. Let the stars guide your path to enlightenment.
          </p>
        </div>

        <div className="cosmic-text-reveal stagger-3 flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hero-button cosmic-pulse group relative overflow-hidden"
          >
            <span className="relative z-10">Book Your Reading</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 border-2 border-primary/50 rounded-full font-semibold text-foreground hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 backdrop-blur-sm relative group"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </button>
        </div>

        <div className="cosmic-text-reveal stagger-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="cosmic-glow rounded-3xl p-8 bg-card/20 backdrop-blur-sm group hover:bg-card/30 transition-all duration-500">
            <div className="stellar-glow mb-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">25+</h3>
            </div>
            <p className="text-muted-foreground font-medium">Years Experience</p>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="cosmic-glow rounded-3xl p-8 bg-card/20 backdrop-blur-sm group hover:bg-card/30 transition-all duration-500">
            <div className="stellar-glow stagger-1 mb-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10K+</h3>
            </div>
            <p className="text-muted-foreground font-medium">Readings Given</p>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="cosmic-glow rounded-3xl p-8 bg-card/20 backdrop-blur-sm group hover:bg-card/30 transition-all duration-500">
            <div className="stellar-glow stagger-2 mb-4">
              <h3 className="text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">98%</h3>
            </div>
            <p className="text-muted-foreground font-medium">Accuracy Rate</p>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="cosmic-text-reveal stagger-5 mt-20">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:animate-none transition-all duration-300 group"
          >
            <div className="w-8 h-14 border-2 border-primary/50 rounded-full flex justify-center group-hover:border-primary transition-colors duration-300">
              <div className="w-1 h-3 bg-primary rounded-full mt-3 group-hover:h-4 transition-all duration-300" />
            </div>
            <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary transition-colors duration-300">Scroll to explore</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;