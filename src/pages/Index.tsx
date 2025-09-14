import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ZodiacSigns from "@/components/ZodiacSigns";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ZodiacSigns />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
