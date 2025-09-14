import { Calendar, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="starfield" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title fade-in-up">Begin Your Cosmic Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up stagger-1">
            Ready to unlock the mysteries of your destiny? Reach out to schedule your 
            personalized reading and take the first step toward cosmic enlightenment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fade-in-up">
            <div className="cosmic-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Book Your Reading</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
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