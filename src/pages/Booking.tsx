import Layout from "@/components/Layout";
import { useEffect } from "react";

const ACUITY_EMBED_URL = "https://app.acuityscheduling.com/schedule.php?owner=38401435";
const ACUITY_EMBED_SCRIPT = "https://embed.acuityscheduling.com/js/embed.js";
const INSTAGRAM_URL = "https://www.instagram.com/kim.beauty.nail.hair/";

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = ACUITY_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="space-y-10">
            <div className="border border-border bg-background/80 p-4 md:p-6 rounded-xl">
              <iframe
                title="Acuity Scheduling"
                src={ACUITY_EMBED_URL}
                width="100%"
                height="1100"
                frameBorder={0}
              />
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="border border-border bg-background/80 p-8 rounded-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Live booking
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4">
                  Schedule in real time
                </h2>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Pick your service, preferred staff, and the time that works best. The live
                  calendar updates instantly as you browse.
                </p>
                <div className="mt-6 text-sm text-foreground">
                  +1 (669) 837-3923
                  <span className="block text-xs text-muted-foreground mt-2">
                    Mon - Fri (10 AM - 7 PM)
                    <br />
                    Sat (10 AM - 6 PM), Sun (Closed)
                  </span>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="bg-foreground text-primary-foreground p-6 rounded-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    Instagram
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/QR%20Code_Instagram_Kim/design.png"
                        alt="QR Instagram"
                        className="w-20 h-20 object-contain bg-white p-2"
                      />
                    </a>
                    <p className="text-sm text-primary-foreground/70">
                      Scan the QR for our latest nails and lash looks.
                    </p>
                  </div>
                </div>

                <div className="border border-border bg-background/80 p-4 rounded-xl">
                  <img
                    src="/Business_Card/front_fullcolor_1024x599.png"
                    alt="Business card"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
