import { Award, BookOpen, Calendar, Eye, Heart, Moon, Star } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Master Astrologer",
      description: "25+ years of dedicated study and practice in the ancient arts"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Published Author",
      description: "Written 3 bestselling books on astrology and spiritual guidance"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Intuitive Reader",
      description: "Natural psychic abilities enhanced through decades of meditation"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healing Practitioner",
      description: "Certified in Reiki, chakra balancing, and energy healing"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-6 sm:mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About Arpit Sharma
            </h2>
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              <p className="text-xl sm:text-2xl font-light">
                Astrologer <span className="text-primary font-semibold">Arpit Sharma</span> is a highly respected Astrologist & Numerologist 
                with more than 8 years of experience.
              </p>
              <p className="text-base sm:text-lg">
                Having guided over 10,000 people in their careers and marriages, he has built a strong
                reputation and a loyal client base.
              </p>
              <p className="text-base sm:text-lg">
                To expand this reach and create a professional digital presence, a modern website can
                serve as a powerful platform.
              </p>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-button"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                Schedule Consultation
                </span>
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('testimonials');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 border-2 border-secondary/60 rounded-full font-semibold text-lg text-secondary hover:bg-secondary/10 hover:border-secondary hover:scale-110 hover:-translate-y-1 transition-all duration-500 glass-card"
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                Read My Story
                </span>
              </button>
            </div>
          </div>
          
          <div className="fade-in-up stagger-2 relative">
            <div className="cosmic-card text-center">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center cosmic-pulse">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Moon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-background constellation-rotate" />
                    </div>
                  </div>
                </div>
                <Star className="absolute top-4 right-6 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 text-secondary floating-animation" />
                <Star className="absolute bottom-6 sm:bottom-8 left-3 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 text-accent floating-animation" style={{ animationDelay: '2s' }} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Arpit Sharma</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">Astrologist & Numerologist</p>
              <div className="flex justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-secondary">8+</div>
                  <div className="text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-accent">10K+</div>
                  <div className="text-muted-foreground">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`cosmic-card text-center group fade-in-up stagger-${index + 1} relative overflow-hidden achievement-card-hover group-hover:animate-card-rotate`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Moving floating particles on hover */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 group-hover:animate-float-1" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 group-hover:animate-float-2" />
              <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-3 transition-all duration-600" />
              <div className="absolute top-1/3 right-2 w-1 h-1 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-4 transition-all duration-800" />
              
              {/* Moving geometric shapes */}
              <div className="absolute top-6 left-6 w-3 h-3 border border-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-rotate-slow transition-all duration-500" />
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-slow transition-all duration-700" />
              
              {/* Rotating decorative elements */}
              <div className="absolute top-2 right-2 w-4 h-4 border-2 border-secondary/30 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-all duration-500" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border border-accent/40 opacity-0 group-hover:opacity-100 group-hover:animate-reverse-spin transition-all duration-600" />
              <div className="absolute top-1/2 left-1 w-2 h-2 bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-rotate-fast transition-all duration-400" />
              
              {/* Moving light rays */}
              <div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-primary/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-light-ray-1 transition-all duration-500" />
              <div className="absolute bottom-0 right-1/3 w-px h-6 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-light-ray-2 transition-all duration-600" />
              
              {/* Icon container with enhanced animation */}
              <div className="relative z-20 text-primary mb-6 group-hover:text-secondary transition-all duration-500 flex justify-center">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:animate-icon-float group-hover:animate-icon-rotate">
                {achievement.icon}
                </div>
              </div>
              
              {/* Title with enhanced hover effect */}
              <h3 className="relative z-20 text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-105 group-hover:animate-text-wiggle">
                {achievement.title}
              </h3>
              
              {/* Description with slide-up animation */}
              <p className="relative z-20 text-muted-foreground leading-relaxed group-hover:text-foreground transition-all duration-500 transform group-hover:-translate-y-1 group-hover:animate-text-float">
                {achievement.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-500 rounded-full" />
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 fade-in-up">
          <div className="cosmic-card text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground">My Sacred Promise to You</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Every reading is conducted with the highest respect for your journey and the 
              cosmic forces that guide us all. I promise to provide honest, compassionate, 
              and transformative insights that honor both your questions and the wisdom of the stars.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Compassionate Guidance</h4>
                  <p className="text-sm text-muted-foreground">Every session is approached with love and understanding</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Honest Insights</h4>
                  <p className="text-sm text-muted-foreground">Truth delivered with gentleness and wisdom</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Transformative Experience</h4>
                  <p className="text-sm text-muted-foreground">Leave with clarity, purpose, and cosmic connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;