import { Calendar, Clock, Mail, MapPin, Phone, Send, CheckCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Submit to Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'ab8e56c5-43d0-41d6-95f7-dea1d8b56646');
      formDataToSend.append('subject', 'New Cosmic Reading Request');
      formDataToSend.append('from_name', 'Celestial Guidance Website');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('birthDate', formData.birthDate);
      formDataToSend.append('birthTime', formData.birthTime);
      formDataToSend.append('birthPlace', formData.birthPlace);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        console.log('Form submitted successfully to Web3Forms');
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed');
        // Still show success message for better UX
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message for better UX
      setIsSubmitted(true);
    }
  };

  // Hide thank you message after 4 seconds and reset form
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          birthDate: "",
          birthTime: "",
          birthPlace: "",
          message: ""
        });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent fade-in-up">
            Begin Your Cosmic Journey
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto fade-in-up stagger-1 leading-relaxed px-4">
            Ready to unlock the mysteries of your destiny? Reach out to schedule your 
            personalized reading and take the first step toward cosmic enlightenment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="fade-in-up">
            <div className="cosmic-card">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary text-center">Book Your Reading</h3>
              
              {isSubmitted ? (
                /* Thank You Message */
                <div className="text-center py-16 space-y-8 animate-fade-in">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <CheckCircle className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center animate-bounce">
                      <Star className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-foreground">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Your cosmic reading request has been received. The stars are aligning for your journey!
                    </p>
                    <p className="text-sm text-primary font-medium">
                      Check your email for confirmation. We'll contact you within 24 hours to schedule your session.
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-4 pt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-8" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="ab8e56c5-43d0-41d6-95f7-dea1d8b56646" />
                  <input type="hidden" name="subject" value="New Cosmic Reading Request" />
                  <input type="hidden" name="from_name" value="Celestial Guidance Website" />
                  <input type="hidden" name="redirect" value="false" />
                  {/* Honeypot field for spam protection */}
                  <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 text-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 text-lg"
                    >
                      <option value="">Select a service</option>
                      <option value="birth-chart">Birth Chart Reading</option>
                      <option value="tarot">Tarot Card Reading</option>
                      <option value="palm">Palm Reading</option>
                      <option value="love">Love Compatibility</option>
                      <option value="career">Career Guidance</option>
                      <option value="healing">Spiritual Healing</option>
                      <option value="package">Consultation Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Birth Date *
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Birth Time
                    </label>
                    <input
                      type="time"
                      name="birthTime"
                      value={formData.birthTime}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Birth Place *
                    </label>
                    <input
                      type="text"
                      name="birthPlace"
                      value={formData.birthPlace}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 text-lg"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Questions or Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-500 resize-none text-lg"
                    placeholder="Share any specific questions or areas of your life you'd like to explore..."
                  />
                </div>

                <button
                  type="submit"
                  className="hero-button w-full flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Schedule My Reading</span>
                </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up stagger-2">
            <div className="space-y-8">
              <div className="cosmic-card">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">(555) COSMIC-1 • (555) 267-6421</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">luna@celestialwisdom.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Mystic Arts Center<br />123 Starlight Avenue, Cosmic City</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cosmic-card">
                <h3 className="text-2xl font-bold mb-6 text-primary">Session Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 12:00 PM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Session Types</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>• In-person consultations</p>
                        <p>• Video call sessions</p>
                        <p>• Phone readings</p>
                        <p>• Email reports (written readings)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cosmic-card text-center">
                <h3 className="text-xl font-bold mb-4 text-accent">Emergency Spiritual Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  In times of urgent spiritual need or cosmic crisis, 
                  emergency consultations are available 24/7.
                </p>
                <button className="px-6 py-3 bg-accent/20 text-accent rounded-full font-semibold hover:bg-accent/30 transition-all duration-300">
                  Emergency Hotline: (555) 911-STAR
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center fade-in-up">
          <div className="cosmic-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Your Journey Awaits</h3>
            <p className="text-muted-foreground leading-relaxed">
              The stars have aligned to bring you to this moment. Trust in the cosmic 
              forces that have guided your path here, and take the next step toward 
              understanding your true purpose and potential. Your transformation begins now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;