import zodiacImage from "@/assets/zodiac-wheel.jpg";

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
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title fade-in-up">Zodiac Wisdom</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-1">
            Explore the twelve celestial archetypes that influence our personalities, 
            relationships, and life paths through the cosmic wheel of the zodiac.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="fade-in-up">
            <div className="relative">
              <img 
                src={zodiacImage} 
                alt="Zodiac Wheel" 
                className="w-full h-96 object-cover rounded-3xl cosmic-glow constellation-rotate"
                style={{ animationDuration: '60s' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-3xl" />
            </div>
          </div>
          
          <div className="fade-in-up stagger-2">
            <h3 className="text-4xl font-bold mb-6 text-primary">
              Discover Your Cosmic Identity
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each zodiac sign carries unique energies, traits, and celestial influences 
              that shape who you are and how you interact with the universe. Understanding 
              your sign is the first step toward cosmic self-awareness.
            </p>
            <button className="hero-button">
              Get Your Personal Reading
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {zodiacSigns.map((sign, index) => (
            <div 
              key={sign.name}
              className={`cosmic-card text-center group cursor-pointer fade-in-up stagger-${(index % 4) + 1} hover:scale-105`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {sign.symbol}
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {sign.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">{sign.dates}</p>
              <span className={`text-xs px-3 py-1 rounded-full border ${getElementColor(sign.element)} border-current`}>
                {sign.element}
              </span>
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
            <button className="px-8 py-3 bg-secondary/20 text-secondary rounded-full font-semibold hover:bg-secondary/30 transition-all duration-300">
              Subscribe to Daily Readings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZodiacSigns;