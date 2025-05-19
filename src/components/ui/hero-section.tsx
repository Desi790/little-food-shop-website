
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  image, 
  ctaText = "Order Now", 
  ctaLink = "/order" 
}: HeroSectionProps) => {
  return (
    <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl animate-fade-in">{title}</h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in">{subtitle}</p>
        {ctaText && (
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
