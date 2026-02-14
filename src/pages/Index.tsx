import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import nail2 from "@/assets/nail-2.jpg";
import nail3 from "@/assets/nail-3.jpg";
import nail4 from "@/assets/nail-4.jpg";
import nail5 from "@/assets/nail-5.jpg";
import nail6 from "@/assets/nail-6.jpg";
import salonInterior from "@/assets/salon-interior.jpg";

const heroSlides = [
  { image: heroBanner1, subtitle: "Bugis Nails, Bugis Eyelash, Bugis Spa" },
  { image: heroBanner2, subtitle: "Cheap Nails and Lash In Haji Ln, near Bugis Junction" },
  { image: heroBanner3, subtitle: "Manicure, pedicure, nail spa, eyelash extensions" },
];

const topPicks = [
  { image: nail2, name: "Classic Manicure", price: "$48" },
  { image: nail3, name: "Classic Manicure (Gel)", price: "$68" },
  { image: nail4, name: "Classic Pedicure", price: "$58" },
  { image: nail5, name: "Express Manicure (Gel)", price: "$48" },
  { image: nail6, name: "Classic Pedicure (Gel)", price: "$78" },
];

const stats = [
  { number: "3250", label: "CLIENTS" },
  { number: "2506", label: "Manicures & Pedicures" },
  { number: "1205", label: "EYELASH" },
  { number: "5041", label: "TREATMENTS" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Jen Beauty"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="font-heading italic text-primary-foreground/90 text-xl md:text-2xl mb-2">
              Welcome To
            </p>
            <h1 className="font-heading italic text-primary-foreground text-4xl md:text-6xl font-bold mb-4">
              Jen Beauty
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Link
              to="/booking"
              className="inline-block border-2 border-primary-foreground/60 text-primary-foreground px-8 py-3 font-bold tracking-wider text-sm hover:bg-primary-foreground/10 transition-colors rounded"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentSlide ? "bg-primary-foreground" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 bg-floral-pattern bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Welcome to Jen Beauty" title="Explore Top Picks" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Pamper yourself with fantastic services at Jen Beauty. We offer manicures, pedicures, eyelash extensions, facial spa treatments, hair removal, and expert eyebrow/lip embroidery.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topPicks.map((item, i) => (
              <div key={i} className="text-center group animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Link
                    to="/booking"
                    className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                      Book Now
                    </span>
                  </Link>
                </div>
                <h3 className="font-heading text-sm md:text-base text-foreground">{item.name}</h3>
                <p className="font-heading italic text-primary text-sm">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/service/nails"
              className="inline-block border-2 border-primary text-primary px-8 py-3 font-bold tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Jen Beauty" title="Why Choose Us" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src={salonInterior} alt="Jen Beauty Salon" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Special Treatments</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  We'll shape, buff and polish your nails to perfection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  Get lush, fuller lashes instantly with professional eyelash extensions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  Smooth, hair-free skin through gentle waxing and sugaring techniques
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  Premium products to deliver exceptional services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✦</span>
                  No extra fees during holidays. Standard pricing year-round.
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-secondary">
                <p className="font-heading text-3xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-sm hover:bg-gold-dark transition-colors"
            >
              30% Discount New Customer
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
