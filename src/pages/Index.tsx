import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroBanner1 from "@/assets/hero-banner-1.png";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import nail2 from "@/assets/nail-2.png";
import nail3 from "@/assets/nail-3.jpg";
import nail4 from "@/assets/nail-4.webp";
import nail5 from "@/assets/nail-5.webp";
import nail6 from "@/assets/nail-6.jpg";

import eye1 from "@/assets/eye-1.jpg";
import eye2 from "@/assets/eye-2.jpg";
import eye3 from "@/assets/eye-3.webp";
import eye4 from "@/assets/eye-4.jpg";
import eye5 from "@/assets/eye-5.jpg";
import eye6 from "@/assets/eye-6.jpg";

import kid1 from "@/assets/kid-1.jpg";
import kid2 from "@/assets/kid-2.jpg";
import kid3 from "@/assets/kid-3.jpg";
import kid4 from "@/assets/kid-4.jpg";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

import salonInterior from "@/assets/salon-interior.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/kim.beauty.nail.hair/";

const heroSlides = [
  { image: heroBanner1, subtitle: "Premium nails, eyelash, and beauty care in Union City" },
  { image: heroBanner2, subtitle: "Relaxing salon experience with expert technicians" },
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

const galleryTabs = ["nails", "eye lash", "nails for kids"] as const;
type GalleryTab = (typeof galleryTabs)[number];

const galleryPreviewByTab: Record<GalleryTab, string[]> = {
  nails: [nail2, nail3, nail4, nail5, nail6],
  "eye lash": [eye1, eye2, eye3, eye4, eye5, eye6],
  "nails for kids": [kid1, kid2, kid3, kid4],
};

const pricingGroups = [
  {
    title: "Hair & Beauty",
    items: [
      { name: "Hair Cut (Women)", price: "$45 & up" },
      { name: "Hair Cut (Men & Kids)", price: "$20 & up" },
      { name: "Perms", price: "$85 & up" },
      { name: "Hair Set", price: "$30 & up" },
      { name: "Tints", price: "$85 & up" },
      { name: "Touch Up", price: "$65 & up" },
      { name: "Highlight", price: "$85 & up" },
      { name: "Frosting", price: "$50 & up" },
      { name: "Facial Wax", price: "$45 & up" },
      { name: "Eyebrow Wax", price: "$15 & up" },
      { name: "Facial", price: "$55 & up" },
      { name: "Eyelash Extensions", price: "$120 & up" },
      { name: "Microblading", price: "$350" },
    ],
  },
  {
    title: "Nails",
    items: [
      { name: "Acrylic Full Set", price: "$55 & up" },
      { name: "Acrylic Refill", price: "$45 & up" },
      { name: "Pink & White Full Set", price: "$65 & up" },
      { name: "Pink & White Refill", price: "$50 & up" },
      { name: "Pink & White Gel Full Set", price: "$65 & up" },
      { name: "Pink & White Gel Refill", price: "$45 & up" },
      { name: "Crystal Gel Full Set", price: "$55 & up" },
      { name: "Crystal Gel Refill", price: "$40 & up" },
      { name: "Dip Powder", price: "$40 & up" },
      { name: "Dip Powder Refill", price: "$30 & up" },
      { name: "Manicure (Basic)", price: "$25" },
      { name: "Pedicure", price: "$35" },
      { name: "Color Change", price: "$10 & up" },
      { name: "French Manicure (Color)", price: "$10" },
      { name: "Nails Repair", price: "$5 & up" },
      { name: "Nails Take Off", price: "$10 & up" },
      { name: "Nails Design", price: "$5 & up" },
      { name: "Nails Cut Down", price: "$5 & up" },
    ],
  },
];

const products = [
  {
    image: product1,
    name: "Cuticle Oil",
    description: "Hydrates dry cuticles and keeps nails looking healthy between appointments.",
  },
  {
    image: product2,
    name: "Gel Polish Collection",
    description: "Long-lasting shine with salon-quality colors curated for every season.",
  },
  {
    image: product3,
    name: "Lash Care Serum",
    description: "Gentle daily serum to support stronger, fuller-looking lashes.",
  },
  {
    image: product4,
    name: "Kids Nail Set",
    description: "Kid-friendly polish and accessories designed for safe, fun mini manicures.",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [topPicksApi, setTopPicksApi] = useState<CarouselApi>();
  const [activeGalleryTab, setActiveGalleryTab] = useState<GalleryTab>("nails");

  const getDurationLabel = (serviceName: string) => {
    if (serviceName === "Microblading") {
      return "3 tiếng";
    }

    if (serviceName === "Facial" || serviceName === "Eyelash Extensions") {
      return "1 giờ 30 phút";
    }

    return "1 giờ";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!topPicksApi) {
      return;
    }

    const autoplay = setInterval(() => {
      topPicksApi.scrollNext();
    }, 2500);

    return () => clearInterval(autoplay);
  }, [topPicksApi]);

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
              alt="KIM BEAUTY NAIL & HAIR"
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
              KIM BEAUTY NAIL & HAIR
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Welcome to KIM BEAUTY NAIL & HAIR" title="Explore Top Picks" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Pamper yourself with fantastic services at KIM BEAUTY NAIL & HAIR. We offer manicures, pedicures, eyelash extensions, facial spa treatments, hair removal, and expert eyebrow/lip embroidery.
          </p>
          <div className="max-w-[940px] mx-auto">
            <Carousel
              setApi={setTopPicksApi}
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
            >
              <CarouselContent>
                {topPicks.map((item, i) => (
                  <CarouselItem key={i} className="!basis-[220px]">
                    <div className="text-center group animate-fade-in w-[220px]" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="relative overflow-hidden rounded-2xl mb-3 w-[220px] h-[220px] mask-card">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-[110px] bg-background/80 border-border" />
              <CarouselNext className="right-2 top-[110px] bg-background/80 border-border" />
            </Carousel>
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

      {/* Our Gallery Section */}
      <section id="our-gallery" className="py-16 bg-floral-pattern scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="KIM BEAUTY NAIL & HAIR" title="Our Gallery" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            A quick look at some of our recent nail and beauty transformations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {galleryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveGalleryTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-colors ${
                  activeGalleryTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {galleryPreviewByTab[activeGalleryTab].map((image, index) => (
              <Link
                key={`${activeGalleryTab}-${index}`}
                to="/gallery/nails"
                className="block overflow-hidden rounded-2xl aspect-square group"
              >
                <img
                  src={image}
                  alt="KIM BEAUTY NAIL & HAIR gallery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery/nails"
              className="inline-block border-2 border-primary text-primary px-8 py-3 font-bold tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded"
            >
              View full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Our Pricing Section */}
      <section id="our-pricing" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="KIM BEAUTY NAIL & HAIR" title="Our Pricing" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Transparent salon pricing. Final quote may vary by hair length, design complexity, and product selection.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pricingGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">{group.title}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-4 border-b border-border/70 pb-2 last:border-none last:pb-0">
                      <div>
                        <p className="text-sm text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{getDurationLabel(item.name)}</p>
                      </div>
                      <p className="font-heading text-sm text-primary whitespace-nowrap">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="our-products" className="py-16 bg-floral-pattern scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="KIM BEAUTY NAIL & HAIR" title="Our Products" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Discover salon-selected products to maintain beautiful nails, lashes, and skin at home.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <div key={product.name} className="rounded-2xl border border-border overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base font-bold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 min-h-12">{product.description}</p>
                  <div className="mt-4">
                    <Link
                      to="/booking"
                      className="inline-block border border-primary text-primary px-4 py-2 rounded-full text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Ask in salon
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-16 bg-floral-pattern scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl bg-card border border-border p-8 md:p-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Appointment</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4">Book your next visit</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose your service and preferred schedule in our live booking page.
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Need support? Call us at +1 (669) 837-3923.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/booking"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-sm hover:bg-gold-dark transition-colors"
              >
                MAKE AN APPOINTMENT
              </Link>
              <a
                href="tel:+16698373923"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle subtitle="KIM BEAUTY NAIL & HAIR" title="Why Choose Us" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src={salonInterior} alt="KIM BEAUTY NAIL & HAIR Salon" className="w-full h-80 object-cover" />
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

          <div className="mt-10 mx-auto max-w-md bg-card rounded-xl p-5 shadow-sm flex items-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <img
                src="/QR%20Code_Instagram_Kim/design.png"
                alt="Instagram QR"
                className="w-20 h-20 object-contain bg-white p-2 rounded"
              />
            </a>
            <div>
              <p className="font-heading text-foreground font-bold">Follow us on Instagram</p>
              <p className="text-sm text-muted-foreground">Scan to explore our latest nail and hair transformations.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
