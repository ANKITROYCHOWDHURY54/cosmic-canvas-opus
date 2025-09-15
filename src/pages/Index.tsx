import Navigation from "@/components/Navigation";
import FloatingNavigation from "@/components/FloatingNavigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ZodiacSigns from "@/components/ZodiacSigns";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <FloatingNavigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="zodiac">
        <ZodiacSigns />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
