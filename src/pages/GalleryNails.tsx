import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import nail2 from "@/assets/nail-2.png";
import nail3 from "@/assets/nail-3.jpg";
import nail4 from "@/assets/nail-4.webp";
import nail5 from "@/assets/nail-5.webp";
import nail6 from "@/assets/nail-6.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import heroBanner1 from "@/assets/hero-banner-1.png";
import heroBanner2 from "@/assets/hero-banner-2.jpg";

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

const categories = ["NAILS", "EYE LASH", "NAILS FOR KIDS"] as const;

const galleryImages: Record<string, { src: string; title: string }[]> = {
  NAILS: [
    { src: nail2, title: "Pastel Blue Nails" },
    { src: nail3, title: "Red Glitter Art" },
    { src: nail4, title: "French Tips" },
    { src: nail5, title: "Rainbow Nails" },
    { src: nail6, title: "Gold Chrome" },
  ],
  "EYE LASH": [
    { src: eye1, title: "Classic Lash" },
    { src: eye2, title: "Volume Lash" },
    { src: eye3, title: "Hybrid Lash" },
    { src: eye4, title: "Mega Volume Lash" },
    { src: eye5, title: "Russian Volume Lash" },
    { src: eye6, title: "Lash Lift" },
  ],
  "NAILS FOR KIDS": [
    { src: kid1, title: "Cute Pink Nails" },
    { src: kid2, title: "Sparkle Blue Nails" },
    { src: kid3, title: "Rainbow Nails" },
    { src: kid4, title: "Animal Print Nails" },
  ],
};

const GalleryNails = () => {
  const [activeCategory, setActiveCategory] = useState("NAILS");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const images = galleryImages[activeCategory] || [];

  return (
    <Layout>
      <section className="py-12 bg-floral-pattern min-h-screen">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="KIM BEAUTY NAIL & HAIR" title="Our Nails Gallery" />

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-bold tracking-wider transition-colors ${
                  cat === activeCategory
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden rounded-xl aspect-square animate-fade-in mask-card"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setLightboxImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
          />
        </div>
      )}
    </Layout>
  );
};

export default GalleryNails;
