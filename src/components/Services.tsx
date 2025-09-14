import { Gem, Eye, Hand, Heart, Star, Zap } from "lucide-react";
import servicesImage from "@/assets/crystal-ball-services.jpg";

const Services = () => {
  const services = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Birth Chart Reading",
      description: "Discover your cosmic blueprint through detailed natal chart analysis. Understand your personality, strengths, and life purpose.",
      price: "$150",
      duration: "90 minutes"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Tarot Card Reading",
      description: "Gain insight into your past, present, and future through the ancient wisdom of tarot cards.",
      price: "$80",
      duration: "60 minutes"
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Palm Reading",
      description: "Uncover the secrets written in your hands. Learn about your life path, love lines, and destiny.",
      price: "$60",
      duration: "45 minutes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Love Compatibility",
      description: "Explore romantic compatibility through astrological synastry and relationship dynamics.",
      price: "$120",
      duration: "75 minutes"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Career Guidance",
      description: "Find your ideal career path using astrological insights and planetary influences.",
      price: "$100",
      duration: "60 minutes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Spiritual Healing",
      description: "Cleanse negative energy and align your chakras for spiritual wellness and growth.",
      price: "$90",
      duration: "90 minutes"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title fade-in-up">Sacred Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-1">
            Choose from our comprehensive range of mystical services, each designed to illuminate 
            different aspects of your spiritual journey and cosmic connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`cosmic-card fade-in-up hover:cosmic-pulse group cursor-pointer stagger-${(index % 4) + 1}`}
            >
              <div className="text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex justify-between items-center pt-6 border-t border-border/30">
                <div>
                  <span className="text-2xl font-bold text-secondary">{service.price}</span>
                  <span className="text-muted-foreground ml-2">/ {service.duration}</span>
                </div>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary hover:text-secondary transition-colors duration-300 font-medium hover:scale-105 transform"
                >
                  Book Now →
                </button>
              </div>
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
                    Full Life Reading - $280
                  </span>
                  <span className="px-4 py-2 bg-secondary/20 rounded-full text-secondary font-medium">
                    Relationship Insight - $180
                  </span>
                  <span className="px-4 py-2 bg-accent/20 rounded-full text-accent font-medium">
                    Career & Purpose - $220
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