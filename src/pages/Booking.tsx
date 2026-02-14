import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <Layout>
      <section className="py-20 bg-background bg-floral-pattern min-h-screen flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-4">
          <p className="font-heading italic text-primary text-xl mb-2">Jen Beauty</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Book an Appointment</h1>
          <p className="text-muted-foreground mb-8">
            Contact us via WhatsApp or call to make your appointment. We're open daily from 10:00 AM to 10:00 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6588589099"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-sm hover:bg-gold-dark transition-colors"
            >
              WHATSAPP US
            </a>
            <a
              href="tel:+6588589099"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              CALL +65 8858 9099
            </a>
          </div>
          <Link to="/" className="inline-block mt-8 text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
