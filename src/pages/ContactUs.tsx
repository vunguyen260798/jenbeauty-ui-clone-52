import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <Layout>
      <section className="py-12 bg-floral-pattern min-h-screen">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Kim Brows Hair & Nail" title="Get In Touch" />

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Our <span className="font-bold text-primary">customer support</span> team is available during business hours (10am-10pm) to assist you with{" "}
            <em>any questions</em>, <em>product inquiries</em>, <em>appointment</em> or <em>service support</em> you may need.
          </p>

          {/* Google Maps Embed */}
          <div className="max-w-3xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7943!2d103.8569!3d1.3006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c4315c0c23%3A0x1a7cba9fcc929a28!2sKim%20Brows%20Hair%20%26%20Nail!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kim Brows Hair & Nail Location"
            />
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-card rounded-xl p-6 text-center shadow-sm">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">21A Haji Lane, #02-00<br />Singapore 189214</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+65 8858 9099</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">hotro@gmail.com</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-1">Hours</h3>
              <p className="text-sm text-muted-foreground">10:00 - 22:00<br />Mon to Sun</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-xl mx-auto bg-card rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-full font-bold text-sm hover:bg-gold-dark transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
