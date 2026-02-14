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
    label: "Nails",
    items: [
      { name: "Express Manicure", duration: "~30min", price: "$38" },
      { name: "Express Manicure (Gel)", duration: "~30min", price: "$48" },
      { name: "Classic Manicure", duration: "~45min", price: "$48" },
      { name: "Classic Manicure (Gel)", duration: "~60min", price: "$68" },
      { name: "Express Pedicure", duration: "~45min", price: "$48" },
      { name: "Express Pedicure (Gel)", duration: "~45min", price: "$58" },
      { name: "Classic Pedicure", duration: "~45min", price: "$58" },
      { name: "Classic Pedicure (Gel)", duration: "~60min", price: "$78" },
    ],
  },
  {
    label: "Eye Lash",
    items: [
      { name: "Classic 1:1", duration: "~75min", price: "$78" },
      { name: "YY Lashes", duration: "~75min", price: "$88" },
      { name: "2D - 3D", duration: "~90min", price: "$88" },
      { name: "4D - 5D", duration: "~100min", price: "$98" },
      { name: "6D - 7D", duration: "~120min", price: "$108" },
      { name: "8D - 9D", duration: "~120min", price: "$108" },
      { name: "Lash Removal", duration: "~10min", price: "$10" },
    ],
  },
  {
    label: "Facial Spa",
    items: [
      { name: "BB Glow", duration: "~90min", price: "$128" },
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
            <p className="text-sm text-muted-foreground">Contact us 21A Haji Lane or via Whatsapp</p>
            <p className="text-sm text-muted-foreground">(+65) 8858 9099</p>
            <a
              href="https://wa.me/6588589099"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gold-dark transition-colors"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 bg-floral-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Kim Brows Hair & Nail" title="Nails Service" />
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
                  <p className="text-xs text-muted-foreground">{item.duration}</p>
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
