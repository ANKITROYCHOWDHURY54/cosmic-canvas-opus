import { Gem, Eye, Hand, Heart, Star, Zap } from "lucide-react";
import servicesImage from "@/assets/crystal-ball-services.jpg";

const Services = () => {
  const services = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Birth Chart Reading",
      description: "Discover your cosmic blueprint through detailed natal chart analysis. Understand your personality, strengths, and life purpose.",
      price: "₹11,175",
      duration: "90 minutes"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Tarot Card Reading",
      description: "Gain insight into your past, present, and future through the ancient wisdom of tarot cards.",
      price: "₹5,960",
      duration: "60 minutes"
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Palm Reading",
      description: "Uncover the secrets written in your hands. Learn about your life path, love lines, and destiny.",
      price: "₹4,470",
      duration: "45 minutes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Love Compatibility",
      description: "Explore romantic compatibility through astrological synastry and relationship dynamics.",
      price: "₹8,940",
      duration: "75 minutes"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Career Guidance",
      description: "Find your ideal career path using astrological insights and planetary influences.",
      price: "₹7,450",
      duration: "60 minutes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Spiritual Healing",
      description: "Cleanse negative energy and align your chakras for spiritual wellness and growth.",
      price: "₹6,705",
      duration: "90 minutes"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="starfield" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/20 via-accent/10 to-secondary/20 opacity-20 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent fade-in-up font-kings">
            Sacred Services
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto fade-in-up stagger-1 leading-relaxed px-4">
            Choose from our comprehensive range of mystical services, each designed to illuminate 
            different aspects of your spiritual journey and cosmic connection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`cosmic-card fade-in-up group cursor-pointer stagger-${(index % 4) + 1} glow-on-hover achievement-card-hover group-hover:animate-card-rotate transition-all duration-700 ease-out hover:scale-110 hover:shadow-2xl transform origin-center`}
              style={{ position: 'relative', display: 'block', visibility: 'visible', opacity: 1, zIndex: 10 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out rounded-3xl" />

              {/* Moving floating particles on hover */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700 ease-out group-hover:animate-float-1" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-800 ease-out group-hover:animate-float-2" />
              <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-3 transition-all duration-750 ease-out" />
              <div className="absolute top-1/3 right-2 w-1 h-1 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-4 transition-all duration-900 ease-out" />

              {/* Moving geometric shapes */}
              <div className="absolute top-6 left-6 w-3 h-3 border border-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-rotate-slow transition-all duration-700 ease-out" />
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-slow transition-all duration-800 ease-out" />

              {/* Rotating decorative elements */}
              <div className="absolute top-2 right-2 w-4 h-4 border-2 border-secondary/30 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-all duration-700 ease-out" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border border-accent/40 opacity-0 group-hover:opacity-100 group-hover:animate-reverse-spin transition-all duration-800 ease-out" />
              <div className="absolute top-1/2 left-1 w-2 h-2 bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-rotate-fast transition-all duration-600 ease-out" />

              {/* Moving light rays */}
              <div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-primary/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-light-ray-1 transition-all duration-700 ease-out" />
              <div className="absolute bottom-0 right-1/3 w-px h-6 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-light-ray-2 transition-all duration-800 ease-out" />

              <div className="relative z-20 text-primary mb-8 group-hover:text-secondary transition-all duration-700 ease-out flex justify-center">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-700 ease-out group-hover:scale-125 group-hover:rotate-3 group-hover:animate-icon-float group-hover:animate-icon-rotate transform origin-center">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="relative z-20 text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-all duration-700 ease-out text-center group-hover:scale-105 group-hover:animate-text-wiggle">
                {service.title}
              </h3>
              
              <p className="relative z-20 text-muted-foreground mb-8 leading-relaxed text-center group-hover:text-foreground transition-all duration-700 ease-out transform group-hover:-translate-y-1 group-hover:animate-text-float">
                {service.description}
              </p>
              
              <div className="relative z-20 flex flex-col items-center space-y-6 pt-6 border-t border-border/30">
                <div className="text-center">
                  <span className="text-4xl font-bold text-secondary group-hover:text-primary transition-all duration-700 ease-out">{service.price}</span>
                  <span className="text-muted-foreground ml-2 text-lg group-hover:text-foreground transition-all duration-700 ease-out">/ {service.duration}</span>
                </div>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full font-semibold hover:from-primary/30 hover:to-accent/30 hover:scale-110 transition-all duration-700 ease-out group-hover:shadow-lg group-hover:animate-icon-float transform origin-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Now
                    <span className="group-hover:translate-x-1 transition-transform duration-500 ease-out">→</span>
                  </span>
                </button>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-700 ease-out rounded-full" />

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="cosmic-card max-w-4xl mx-auto text-center fade-in-up">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src={servicesImage} 
                  alt="Crystal Ball Services" 
                  className="w-full h-64 object-cover rounded-2xl cosmic-glow"
                />
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  Mystical Consultation Packages
                </h3>
                <p className="text-muted-foreground mb-6">
                  Combine multiple services for a comprehensive spiritual journey. 
                  Our package deals offer deep insights across all aspects of your life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                    Full Life Reading - ₹20,860
                  </span>
                  <span className="px-4 py-2 bg-secondary/20 rounded-full text-secondary font-medium">
                    Relationship Insight - ₹13,410
                  </span>
                  <span className="px-4 py-2 bg-accent/20 rounded-full text-accent font-medium">
                    Career & Purpose - ₹16,390
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;