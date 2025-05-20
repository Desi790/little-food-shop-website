
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
    <section className="relative h-screen w-full overflow-hidden text-white text-center">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover block"
          />
        ) : (
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop"
            alt="Delicious food background"
            className="w-full h-full object-cover block"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#3b3224]/70 z-20"></div>
      </div>
      
      <div className="relative z-30 p-16 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
          {title.includes("<br />") ? (
            <>
              {title.split("<br />")[0]}<br />{title.split("<br />")[1]}
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto animate-fade-in">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link to={ctaLink}>
            <Button size="lg" className="bg-[#ef4444] hover:bg-[#dc2626] text-white text-lg animate-fade-in px-6 py-6 shadow-lg transition-colors">
              {ctaText}
            </Button>
          </Link>
        )}
        
        {!hideBottomText && (
          <p className="mt-8 text-xl font-semibold tracking-wide animate-fade-in brand">
            The Little Food Shop
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
