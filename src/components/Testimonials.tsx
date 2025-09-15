import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Entrepreneur",
      rating: 5,
      text: "The birth chart reading was incredibly accurate and insightful. It helped me understand myself on a deeper level and gave me clarity about my life's direction. Absolutely transformative!",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      role: "Artist",
      rating: 5,
      text: "I was skeptical at first, but the tarot reading blew me away. Every card resonated with my current situation, and the guidance I received has been invaluable for my creative journey.",
      location: "Los Angeles, CA"
    },
    {
      name: "Emma Rodriguez",
      role: "Teacher",
      rating: 5,
      text: "The love compatibility reading helped my partner and I understand our relationship dynamics better. We've grown closer and communicate more effectively thanks to the cosmic insights.",
      location: "Austin, TX"
    },
    {
      name: "David Thompson",
      role: "Executive",
      rating: 5,
      text: "The career guidance session was a game-changer. I discovered my true calling and made a career shift that has brought me fulfillment and success. Thank you for the celestial wisdom!",
      location: "Chicago, IL"
    },
    {
      name: "Lisa Park",
      role: "Wellness Coach",
      rating: 5,
      text: "The spiritual healing session was profound. I felt a shift in my energy immediately, and the chakra alignment has helped me maintain better emotional balance and spiritual wellness.",
      location: "Seattle, WA"
    },
    {
      name: "James Wilson",
      role: "Student",
      rating: 5,
      text: "As someone new to astrology, the palm reading was an amazing introduction to the mystical arts. The accuracy of the life line readings was remarkable and opened my mind to cosmic possibilities.",
      location: "Boston, MA"
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent fade-in-up">
            Celestial Testimonials
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto fade-in-up stagger-1 leading-relaxed px-4">
            Discover how cosmic guidance has transformed the lives of our clients. 
            Their journeys of self-discovery and spiritual awakening speak to the 
            power of celestial wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`cosmic-card group fade-in-up stagger-${(index % 4) + 1} glow-on-hover achievement-card-hover group-hover:animate-card-rotate transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl transform origin-center`}
              style={{ position: 'relative', display: 'block', visibility: 'visible', opacity: 1, zIndex: 10 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-3xl" />

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

              <div className="relative z-20 flex items-center justify-between mb-8">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-secondary fill-current group-hover:scale-110 transition-all duration-700 ease-out group-hover:animate-icon-float" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-primary/30 group-hover:text-primary/60 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:animate-icon-rotate" />
              </div>
              
              <p className="relative z-20 text-muted-foreground mb-8 leading-relaxed italic text-lg group-hover:text-foreground transition-all duration-700 ease-out transform group-hover:-translate-y-1 group-hover:animate-text-float">
                "{testimonial.text}"
              </p>
              
              <div className="relative z-20 border-t border-border/30 pt-6">
                <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-all duration-700 ease-out mb-2 group-hover:scale-105 group-hover:animate-text-wiggle">
                  {testimonial.name}
                </h4>
                <p className="text-muted-foreground font-medium group-hover:text-foreground transition-all duration-700 ease-out">{testimonial.role}</p>
                <p className="text-sm text-accent mt-2 font-medium group-hover:text-primary transition-all duration-700 ease-out">{testimonial.location}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-700 ease-out rounded-full" />

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-up">
          <div className="cosmic-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="cosmic-pulse">
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="cosmic-pulse" style={{ animationDelay: '1s' }}>
                <h3 className="text-4xl font-bold text-secondary mb-2">4.9/5</h3>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div className="cosmic-pulse" style={{ animationDelay: '2s' }}>
                <h3 className="text-4xl font-bold text-accent mb-2">95%</h3>
                <p className="text-muted-foreground">Return Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center fade-in-up">
          <h3 className="text-3xl font-bold mb-6 text-foreground">Ready to Begin Your Journey?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of souls who have discovered their cosmic purpose and found 
            clarity through the ancient wisdom of the stars.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hero-button mr-4"
          >
            Book Your Reading
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border-2 border-primary/50 rounded-full font-semibold text-foreground hover:bg-primary/10 transition-all duration-300"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;