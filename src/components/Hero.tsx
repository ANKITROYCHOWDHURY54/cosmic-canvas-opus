import { Star, Moon, Sparkles, Zap, Sun, Circle, Play, Shield, Award, Users, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import galaxyVideo from "@/assets/galaxy.mp4";
import heroCosmicBg from "@/assets/hero-cosmic-bg.jpg";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    const handleError = () => {
      setVideoError(true);
    };

    const handleLoadStart = () => {
      console.log('Video loading started');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);

    // Start loading video immediately
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12 w-full">
      {/* Background Video with Optimizations - Primary Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroCosmicBg}
        aria-hidden="true"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <source src={galaxyVideo} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback Background Image - Only shows if video fails */}
      <div 
        className={`absolute inset-0 w-full h-full object-cover bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          videoError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${heroCosmicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />
      
      {/* Video Loading Indicator - Only shows if video is taking too long */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            </div>
            <p className="text-white/90 text-sm font-medium bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">
              Loading cosmic experience...
            </p>
          </div>
        </div>
      )}
      <div className="starfield" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
      
      {/* Floating Geometric Shapes - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-24 h-24 border border-secondary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      <div className="hidden md:block absolute top-1/2 right-1/3 w-16 h-16 border border-accent/20 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
      
      {/* Enhanced Floating Particles - Responsive sizing */}
      <div className="absolute top-20 left-4 sm:left-20 particle-field">
        <Star className="w-6 h-6 sm:w-8 sm:h-8 text-secondary stellar-glow" />
      </div>
      <div className="absolute top-40 right-4 sm:right-32 particle-field stagger-2">
        <Moon className="w-8 h-8 sm:w-10 sm:h-10 text-primary stellar-glow constellation-rotate" />
      </div>
      <div className="absolute bottom-32 left-4 sm:left-16 particle-field stagger-3">
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent stellar-glow" />
      </div>
      <div className="absolute top-60 left-1/4 particle-field stagger-4">
        <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-secondary stellar-glow" />
      </div>
      <div className="absolute bottom-48 right-4 sm:right-20 particle-field stagger-5">
        <Sun className="w-7 h-7 sm:w-9 sm:h-9 text-primary stellar-glow constellation-rotate" style={{ animationDuration: '25s' }} />
      </div>
      <div className="absolute top-80 right-1/3 particle-field stagger-6">
        <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-accent stellar-glow" />
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
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto py-8 sm:py-12">
        {/* Trust Badge */}
        <div className="cosmic-text-reveal mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-background/60 border border-border/60 rounded-full backdrop-blur-md">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium gradient-text-contrast drop-shadow">Trusted by 10,000+ Clients</span>
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
          </div>
        </div>

        <div className="cosmic-text-reveal">
          <h1 className="hero-title kaushan-script-regular tracking-wide mb-8">
            <span className="mb-6">
              Celestial
            </span>
            <span className="cosmic-text-reveal stagger-1">
              Guidance
            </span>
          </h1>
        </div>
        
        <div className="cosmic-text-reveal stagger-2">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl gradient-text-contrast drop-shadow mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed lobster-two-bold px-2">
            Unlock the mysteries of the cosmos and discover your destiny through ancient wisdom 
            and celestial insights. Let the stars guide your path to enlightenment.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 text-foreground drop-shadow">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium">10,000+ Happy Clients</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground drop-shadow">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
              <span className="text-xs sm:text-sm font-medium">25+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground drop-shadow">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium">98% Accuracy Rate</span>
            </div>
          </div>
        </div>

        <div className="cosmic-text-reveal stagger-3 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mb-16 sm:mb-20">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hero-button cosmic-pulse group relative overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Book Your Reading</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          
          <button 
            onClick={() => scrollToSection('services')}
            className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-foreground
            bg-white/15 hover:bg-white/15 focus:bg-white/15 active:bg-white/15
            border-4 border-accent/50 hover:border-primary/70
            backdrop-blur-3xl backdrop-saturate-150 shadow-[0_8px_40px_rgba(255,255,255,0.08)] hover:scale-110 hover:-translate-y-1 transition-all duration-500 relative w-full sm:w-auto overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/30" />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/35 via-white/15 to-white/5" />
            <div className="pointer-events-none absolute -inset-px rounded-full bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explore Services</span>
            </span>
          </button>
          
          {/* Video Play Button */}
          <button className="px-4 sm:px-6 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base lg:text-lg text-foreground
            bg-white/15 hover:bg-white/15 focus:bg-white/15 active:bg-white/15
            border-4 border-accent/50 hover:border-primary/70
            backdrop-blur-3xl backdrop-saturate-150 shadow-[0_8px_40px_rgba(255,255,255,0.08)] hover:scale-110 hover:-translate-y-1 transition-all duration-500 relative w-full sm:w-auto overflow-hidden">
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/30" />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/35 via-white/15 to-white/5" />
            <div className="pointer-events-none absolute -inset-px rounded-full bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Watch Demo</span>
            </span>
          </button>
        </div>

        <div className="cosmic-text-reveal stagger-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
          <div className="cosmic-card group hover:cosmic-pulse glow-on-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 text-glow-strong text-contrast-outline">25+</h3>
            <p className="text-muted-foreground font-medium text-sm sm:text-base lg:text-lg relative z-10">Years Experience</p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500 relative z-10" />
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Award className="w-6 h-6 text-secondary" />
            </div>
          </div>
          
          <div className="cosmic-card group hover:cosmic-pulse glow-on-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 text-glow-strong text-contrast-outline">10K+</h3>
            <p className="text-muted-foreground font-medium text-sm sm:text-base lg:text-lg relative z-10">Readings Given</p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500 relative z-10" />
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
          </div>
          
          <div className="cosmic-card group hover:cosmic-pulse glow-on-hover relative overflow-hidden sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 text-glow-strong text-contrast-outline">98%</h3>
            <p className="text-muted-foreground font-medium text-sm sm:text-base lg:text-lg relative z-10">Accuracy Rate</p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500 relative z-10" />
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;