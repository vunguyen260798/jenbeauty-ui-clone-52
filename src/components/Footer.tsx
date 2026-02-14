import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center bg-card/10 mb-4">
              <span className="font-heading italic text-primary text-sm leading-tight text-center">Jen<br/>Beauty</span>
            </div>
            <p className="text-sm leading-relaxed">
              Pamper yourself with fantastic services at Jen Beauty. We offer manicures, pedicures, eyelash extensions, facial spa treatments, and more.
            </p>
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
                <span>21a Haji Lane, #02-00, Kampong Bugis, Singapore 189214</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+65 8858 9099</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>jen.beauty9099@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>10:00 - 22:00, Mon to Sun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 text-center text-xs">
          <p>© 2024 Jen Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
