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
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title fade-in-up">Celestial Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-1">
            Discover how cosmic guidance has transformed the lives of our clients. 
            Their journeys of self-discovery and spiritual awakening speak to the 
            power of celestial wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`cosmic-card group hover:cosmic-pulse fade-in-up stagger-${(index % 4) + 1}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border/30 pt-6">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-accent mt-1">{testimonial.location}</p>
              </div>
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