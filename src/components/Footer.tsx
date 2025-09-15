import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/30 bg-background/70 backdrop-blur-xl relative overflow-hidden">
      {/* subtle gradient glow top border */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-primary via-accent to-secondary opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm relative">
        {/* Brand */}
        <div>
          <h4 className="text-foreground font-semibold mb-3 text-lg">Celestial Guidance</h4>
          <p className="text-muted-foreground leading-relaxed">
            Guiding your journey with astrology, tarot, and spiritual wisdom.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/arpit.astrologer"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group inline-flex items-center justify-center p-2 rounded-full border border-border/30 bg-white/5 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary transition-colors group-hover:text-accent" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-foreground font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
            <li><a href="#zodiac" className="hover:text-foreground transition-colors">Zodiac</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Pricing</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-foreground font-semibold mb-3">Newsletter</h4>
          <p className="text-muted-foreground mb-3">Get astro updates, offers, and cosmic tips.</p>
          <form className="flex items-stretch gap-2">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-xl bg-input/60 border border-border/60 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/60"
            />
            <button type="submit" className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-background font-semibold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Celestial Guidance. All rights reserved.</span>
          <span>Made with ♥ under the stars.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


