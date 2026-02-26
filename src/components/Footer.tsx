import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/kim.beauty.nail.hair/";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center bg-white mb-4">
              {/* <span className="font-heading italic text-primary text-sm leading-tight text-center">KIM BEAUTY<br/>NAIL & HAIR</span> */}
              <img src="/Logo_Kim/fulllogo_transparent.png" alt="KIM BEAUTY NAIL & HAIR Logo" className="w-full h-full object-contain" />
            
            </div>
            <p className="text-sm leading-relaxed">
              Pamper yourself with fantastic services at KIM BEAUTY NAIL & HAIR. We offer manicures, pedicures, eyelash extensions, facial spa treatments, and more.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/QR%20Code_Instagram_Kim/design.png"
                alt="Instagram QR"
                className="w-14 h-14 bg-white p-1 rounded"
              />
              <span className="text-xs text-primary-foreground/80">Scan to visit Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/service/nails" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery/nails" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>34547 Alvarado-Niles Rd, Union City, CA 94587</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+1 (669) 837-3923</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Mon - Fri (10 AM - 7 PM), Sat (10 AM - 6 PM), Sun (Closed)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 text-center text-xs">
          <p>© 2026 KIM BROWS HAIR NAIL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
