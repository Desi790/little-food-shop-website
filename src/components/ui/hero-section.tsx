
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
  overlayOpacity = "bg-black/40",
  hideBottomText = false
}: HeroSectionProps) => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-primary/10">
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      )}
      <div className={`absolute inset-0 ${image ? overlayOpacity : ''} flex flex-col items-center justify-center text-center ${image ? 'text-white' : 'text-gray-800'} px-4`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
          {title.includes("<br />") ? (
            <>
              {title.split("<br />")[0]}<br />{title.split("<br />")[1]}
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl animate-fade-in">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link to={ctaLink}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg animate-fade-in px-6 py-6 shadow-lg">
              {ctaText}
            </Button>
          </Link>
        )}
        
        {!hideBottomText && (
          <p className="absolute bottom-6 text-xl font-semibold tracking-wide animate-fade-in">
            The Little Food Shop
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
