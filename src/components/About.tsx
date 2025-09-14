import { Award, BookOpen, Eye, Heart, Moon, Star } from "lucide-react";

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
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="fade-in-up">
            <h2 className="section-title text-left mb-8">About Celestial Master</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome, dear seeker. I am Luna Starweaver, your guide through the mystical 
                realms of cosmic wisdom. For over two decades, I have dedicated my life to 
                understanding the celestial forces that shape our destinies and illuminate our paths.
              </p>
              <p>
                My journey began in childhood when I first gazed upon the night sky and felt 
                the profound connection between the stars above and the soul within. This 
                calling led me to study under renowned masters across the globe, from the 
                ancient temples of India to the sacred sites of Egypt.
              </p>
              <p>
                Today, I blend traditional astrological wisdom with modern intuitive practices, 
                offering you a bridge between the ancient mysteries and contemporary understanding. 
                Each reading is a sacred conversation between your soul, the cosmos, and the 
                divine wisdom that flows through all things.
              </p>
            </div>
            <div className="mt-8">
              <button className="hero-button mr-4">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-secondary/50 rounded-full font-semibold text-secondary hover:bg-secondary/10 transition-all duration-300">
                Read My Story
              </button>
            </div>
          </div>
          
          <div className="fade-in-up stagger-2 relative">
            <div className="cosmic-card text-center">
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center cosmic-pulse">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Moon className="w-16 h-16 text-background constellation-rotate" />
                    </div>
                  </div>
                </div>
                <Star className="absolute top-4 right-8 w-6 h-6 text-secondary floating-animation" />
                <Star className="absolute bottom-8 left-4 w-4 h-4 text-accent floating-animation" style={{ animationDelay: '2s' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Luna Starweaver</h3>
              <p className="text-muted-foreground mb-6">Master Astrologer & Spiritual Guide</p>
              <div className="flex justify-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">25+</div>
                  <div className="text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10K+</div>
                  <div className="text-muted-foreground">Readings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`cosmic-card text-center group hover:cosmic-pulse fade-in-up stagger-${index + 1}`}
            >
              <div className="text-primary mb-6 group-hover:text-secondary transition-colors duration-300 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
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