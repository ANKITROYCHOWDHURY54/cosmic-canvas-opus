import { Star, Moon, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cosmic-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="starfield" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 floating-animation">
        <Star className="w-8 h-8 text-secondary star-sparkle" />
      </div>
      <div className="absolute top-40 right-32 floating-animation" style={{ animationDelay: '2s' }}>
        <Moon className="w-10 h-10 text-primary star-sparkle" />
      </div>
      <div className="absolute bottom-32 left-16 floating-animation" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-6 h-6 text-accent star-sparkle" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="section-title block">Celestial</span>
            <span className="section-title block">Guidance</span>
          </h1>
        </div>
        
        <div className="fade-in-up stagger-2">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the mysteries of the cosmos and discover your destiny through ancient wisdom 
            and celestial insights. Let the stars guide your path to enlightenment.
          </p>
        </div>

        <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="hero-button cosmic-pulse">
            Book Your Reading
          </button>
          <button className="px-8 py-4 border-2 border-primary/50 rounded-full font-semibold text-foreground hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm">
            Explore Services
          </button>
        </div>

        <div className="fade-in-up stagger-4 mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="cosmic-glow rounded-2xl p-6 bg-card/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-secondary mb-2">25+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="cosmic-glow rounded-2xl p-6 bg-card/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-primary mb-2">10K+</h3>
            <p className="text-muted-foreground">Readings Given</p>
          </div>
          <div className="cosmic-glow rounded-2xl p-6 bg-card/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-accent mb-2">98%</h3>
            <p className="text-muted-foreground">Accuracy Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;