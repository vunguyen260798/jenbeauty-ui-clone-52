import { Link, useLocation } from "react-router-dom";
import { MapPin, Globe, Camera, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "SERVICE", path: "/service/nails" },
  { label: "GALLERY", path: "/gallery/nails" },
  { label: "CONTACT US", path: "/contact-us" },
  { label: "BOOKING", path: "/booking" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className=" py-3 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center bg-card">
              {/* <span className="font-heading italic text-primary text-sm leading-tight text-center">Kim<br/>Brows Hair & Nail</span> */}
              <img src="/Logo_Kim/fulllogo_transparent.png" alt="Kim Brows Hair & Nail Logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Contact info - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-bold text-sm text-foreground">21a Haji Lane, #02-00</p>
                <p className="text-xs text-muted-foreground">Kampong Bugis, Singapore 189214</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <div>
                <p className="font-bold text-sm text-foreground">+65 8858 9099</p>
                <p className="text-xs text-muted-foreground">kimbrowshairnail9099@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />
              <div>
                <p className="font-bold text-sm text-foreground">Kim.Brows.Hair.Nail</p>
                <p className="text-xs text-muted-foreground">10:00-22:00, Mon to Sun</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/booking"
            className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-gold-dark transition-colors"
          >
            MAKE AN APPOINTMENT
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary/90 backdrop-blur-sm">
        <div className="container mx-auto">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 py-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-5 py-2 text-sm font-bold tracking-wider transition-colors ${
                    location.pathname === item.path
                      ? "text-primary-foreground underline underline-offset-4"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile nav */}
          {mobileOpen && (
            <ul className="md:hidden flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-5 py-3 text-sm font-bold tracking-wider text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary/50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/booking"
                  className="block mx-4 my-2 text-center bg-primary-foreground text-primary px-6 py-3 rounded-full font-bold text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  MAKE AN APPOINTMENT
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
