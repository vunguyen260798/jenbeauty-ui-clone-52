import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import nail2 from "@/assets/nail-2.png";
import nail3 from "@/assets/nail-3.jpg";
import nail4 from "@/assets/nail-4.webp";
import nail5 from "@/assets/nail-5.webp";
import nail6 from "@/assets/nail-6.jpg";

const services = [
  { image: nail2, name: "Classic Manicure", price: "$48" },
  { image: nail3, name: "Classic Manicure (Gel)", price: "$68" },
  { image: nail4, name: "Classic Pedicure", price: "$58" },
  { image: nail5, name: "Express Manicure (Gel)", price: "$48" },
  { image: nail6, name: "Classic Pedicure (Gel)", price: "$78" },
];

const pricingTabs = [
  {
    label: "Hair & Beauty",
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
    label: "Nails",
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

const faqs = [
  {
    q: "Is there anything I should bring?",
    a: "We provide all amenities and basic cosmetics at the spa. If you would like to fix your makeup after the treatment, please bring your own cosmetics.",
  },
  {
    q: "What is the difference between gel and acrylic nails?",
    a: "Gel nails are cured under a UV or LED lamp, offering a long-lasting and durable finish. Acrylic nails are applied using a liquid and powder mixture, offering more flexibility and customization options.",
  },
  {
    q: "How often should I get a fill-in for my nails?",
    a: "Generally, you should schedule a fill-in every 2-3 weeks to maintain the shape and appearance of your nails.",
  },
];

const ServiceNails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

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
    if (!carouselApi) {
      return;
    }

    const autoplay = setInterval(() => {
      carouselApi.scrollNext();
    }, 2500);

    return () => clearInterval(autoplay);
  }, [carouselApi]);

  return (
    <Layout>
      {/* Help Banner */}
      <section className="py-8 bg-floral-pattern">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">How can we help you?</h2>
            <p className="text-sm text-muted-foreground">Contact us at 34547 Alvarado-Niles Rd, Union City, CA 94587</p>
            <p className="text-sm text-muted-foreground">+1 (669) 837-3923</p>
            <a
              href="tel:+16698373923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gold-dark transition-colors"
            >
              CALL US
            </a>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 bg-floral-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="KIM BEAUTY NAIL & HAIR" title="Nails Service" />
          <p className="text-center text-muted-foreground mb-10">Find Your Perfect Nails Design</p>

          <div className="max-w-[940px] mx-auto">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
            >
              <CarouselContent>
                {services.map((item, i) => (
                  <CarouselItem key={i} className="!basis-[220px]">
                    <div className="text-center group w-[220px]">
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
                      <h3 className="font-heading text-foreground">{item.name}</h3>
                      <p className="font-heading italic text-primary">{item.price}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-[110px] bg-background/80 border-border" />
              <CarouselNext className="right-2 top-[110px] bg-background/80 border-border" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-floral-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Nails Service" title="Pricing" />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {pricingTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pricing table */}
          <div className="max-w-2xl mx-auto">
            {pricingTabs[activeTab].items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-4 px-4 ${
                  i !== pricingTabs[activeTab].items.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div>
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{getDurationLabel(item.name)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-heading text-lg font-bold text-primary">{item.price}</span>
                  <Link
                    to="/booking"
                    className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gold-dark transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 ">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="font-heading text-2xl font-bold text-center text-foreground mb-8">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary ml-2">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceNails;
