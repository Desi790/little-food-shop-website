
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  overlayOpacity?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  image, 
  imageAlt = "Hero image",
  ctaText = "Order Now", 
  ctaLink = "/order",
  overlayOpacity = "bg-black/60" 
}: HeroSectionProps) => {
  return (
    <div 
      className="relative bg-cover bg-center h-[500px] overflow-hidden" 
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={imageAlt}
    >
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl animate-fade-in drop-shadow-lg" 
           style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.9)" }}>{title}</h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in drop-shadow-md"
           style={{ textShadow: "1px 1px 5px rgba(0,0,0,0.9)" }}>{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg animate-fade-in">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
