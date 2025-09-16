import zodiacImage from "@/assets/zodiac-wheel.jpg";
import img1 from "@/assets/Image1.png";
import img2 from "@/assets/Image2.png";
import img3 from "@/assets/Image3.png";
import img4 from "@/assets/Image4.png";
import img5 from "@/assets/Image5.png";
import img6 from "@/assets/Image6.png";
import img7 from "@/assets/Image7.png";
import img8 from "@/assets/Image8.png";
import img9 from "@/assets/Image9.png";
import img10 from "@/assets/Image10.png";
import img11 from "@/assets/Image11.png";
import img12 from "@/assets/Image12.png";

const ZodiacSigns = () => {
  const zodiacSigns = [
    { name: "Aries", dates: "Mar 21 - Apr 19", element: "Fire", symbol: "♈" },
    { name: "Taurus", dates: "Apr 20 - May 20", element: "Earth", symbol: "♉" },
    { name: "Gemini", dates: "May 21 - Jun 20", element: "Air", symbol: "♊" },
    { name: "Cancer", dates: "Jun 21 - Jul 22", element: "Water", symbol: "♋" },
    { name: "Leo", dates: "Jul 23 - Aug 22", element: "Fire", symbol: "♌" },
    { name: "Virgo", dates: "Aug 23 - Sep 22", element: "Earth", symbol: "♍" },
    { name: "Libra", dates: "Sep 23 - Oct 22", element: "Air", symbol: "♎" },
    { name: "Scorpio", dates: "Oct 23 - Nov 21", element: "Water", symbol: "♏" },
    { name: "Sagittarius", dates: "Nov 22 - Dec 21", element: "Fire", symbol: "♐" },
    { name: "Capricorn", dates: "Dec 22 - Jan 19", element: "Earth", symbol: "♑" },
    { name: "Aquarius", dates: "Jan 20 - Feb 18", element: "Air", symbol: "♒" },
    { name: "Pisces", dates: "Feb 19 - Mar 20", element: "Water", symbol: "♓" }
  ];

  const getElementColor = (element: string) => {
    switch (element) {
      case "Fire": return "text-red-400";
      case "Earth": return "text-green-400";  
      case "Air": return "text-blue-400";
      case "Water": return "text-purple-400";
      default: return "text-foreground";
    }
  };

  return (
    <section id="zodiac" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent fade-in-up font-kings">
            Zodiac Wisdom
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto fade-in-up stagger-1 leading-relaxed px-4">
            Explore the twelve celestial archetypes that influence our personalities, 
            relationships, and life paths through the cosmic wheel of the zodiac.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className="fade-in-up">
            <div className="relative">
              <img 
                src={zodiacImage} 
                alt="Zodiac Wheel" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl cosmic-glow constellation-rotate"
                style={{ animationDuration: '60s' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-3xl" />
            </div>
          </div>
          
          <div className="fade-in-up stagger-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary">
              Discover Your Cosmic Identity
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Each zodiac sign carries unique energies, traits, and celestial influences 
              that shape who you are and how you interact with the universe. Understanding 
              your sign is the first step toward cosmic self-awareness.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-button w-full sm:w-auto"
            >
              Get Your Personal Reading
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {zodiacSigns.map((sign, index) => (
            <div 
              key={sign.name}
              className={`cosmic-card text-center group cursor-pointer fade-in-up stagger-${(index % 4) + 1} hover:scale-110 glow-on-hover relative overflow-hidden`}
            >
              {/* Flowing gradient border - only visible on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  className="absolute inset-0 rounded-3xl p-1"
                  style={{
                    background: 'linear-gradient(90deg, #a855f7, #ec4899, #eab308, #a855f7)',
                    backgroundSize: '300% 100%',
                    animation: 'gradient-flow 2s linear infinite',
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(236, 72, 153, 0.3), 0 0 60px rgba(234, 179, 8, 0.2)'
                  }}
                >
                  <div className="w-full h-full bg-background rounded-3xl"></div>
                </div>
                {/* Additional glow layer for more visibility */}
                <div 
                  className="absolute inset-0 rounded-3xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, #a855f7, #ec4899, #eab308, #a855f7)',
                    backgroundSize: '300% 100%',
                    animation: 'gradient-flow 2s linear infinite reverse',
                    filter: 'blur(2px)',
                    zIndex: -1
                  }}
                >
                  <div className="w-full h-full bg-background rounded-3xl"></div>
                </div>
              </div>

              {/* Floating balls/particles around the border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Ball 1 - Follows gradient flow */}
                <div 
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    top: '2px',
                    left: '50%',
                    animation: 'gradient-ball-1 2s linear infinite',
                    boxShadow: '0 0 10px currentColor, 0 0 20px currentColor'
                  }}
                />
                {/* Ball 2 - Follows gradient flow */}
                <div 
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    top: '50%',
                    right: '2px',
                    animation: 'gradient-ball-2 2s linear infinite',
                    boxShadow: '0 0 8px currentColor, 0 0 16px currentColor'
                  }}
                />
                {/* Ball 3 - Follows gradient flow */}
                <div 
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    bottom: '2px',
                    left: '50%',
                    animation: 'gradient-ball-3 2s linear infinite',
                    boxShadow: '0 0 12px currentColor, 0 0 24px currentColor'
                  }}
                />
                {/* Ball 4 - Follows gradient flow */}
                <div 
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    top: '50%',
                    left: '2px',
                    animation: 'gradient-ball-4 2s linear infinite',
                    boxShadow: '0 0 6px currentColor, 0 0 12px currentColor'
                  }}
                />
              </div>
              
              {/* Card content */}
              <div className="relative z-10">
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                {(() => {
                  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
                  const src = images[index % images.length];
                  return (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-md">
                      <img src={src} alt={`${sign.name} image`} className="w-full h-full object-cover object-center select-none pointer-events-none scale-125" />
                    </div>
                  );
                })()}
              </div>
              <h4 className="font-bold text-sm sm:text-base lg:text-xl mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-500">
                {sign.name}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{sign.dates}</p>
              <span className={`text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border-2 font-medium ${getElementColor(sign.element)} border-current group-hover:scale-105 transition-transform duration-300`}>
                {sign.element}
              </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-up">
          <div className="cosmic-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              Your Daily Cosmic Forecast
            </h3>
            <p className="text-muted-foreground mb-6">
              Receive personalized daily horoscopes and cosmic insights 
              tailored to your unique astrological profile. Stay aligned 
              with the celestial energies that guide your path.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-secondary/20 text-secondary rounded-full font-semibold hover:bg-secondary/30 transition-all duration-300"
            >
              Subscribe to Daily Readings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZodiacSigns;