
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
  hideBottomText?: boolean;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  image, 
  imageAlt = "Hero image",
  ctaText = "Order Now", 
  ctaLink = "/order",
  overlayOpacity = "bg-black/60",
  hideBottomText = false
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
      
      {!hideBottomText && (
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair animate-fade-in" 
             style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.9)" }}>
            The Little Food Shop
          </h2>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
