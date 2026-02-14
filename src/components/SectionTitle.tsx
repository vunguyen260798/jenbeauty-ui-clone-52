import { Link } from "react-router-dom";

const FlowerDivider = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="flower">
    <circle cx="20" cy="20" r="4" fill="hsl(30, 50%, 48%)" opacity="0.6" />
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <ellipse
        key={angle}
        cx="20"
        cy="20"
        rx="3"
        ry="8"
        fill="hsl(350, 40%, 75%)"
        opacity="0.5"
        transform={`rotate(${angle} 20 20) translate(0 -8)`}
      />
    ))}
  </svg>
);

export const SectionDivider = () => (
  <div className="section-divider">
    <FlowerDivider />
  </div>
);

export const SectionTitle = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="text-center mb-8">
    <p className="font-heading italic text-primary text-lg md:text-xl">{subtitle}</p>
    <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-1">{title}</h2>
    <SectionDivider />
  </div>
);

export default SectionTitle;
