
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface FeaturedItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  link: string;
}

interface FeaturedCarouselProps {
  items: FeaturedItem[];
  title?: string;
}

const FeaturedCarousel = ({ items, title }: FeaturedCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [items.length]);
  
  return (
    <div className="py-8 relative">
      {title && (
        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-6">{title}</h2>
      )}
      
      <div className="max-w-5xl mx-auto px-4">
        <Carousel 
          className="w-full" 
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white text-sm font-medium px-2 py-1 rounded-md">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <Link to={item.link} className="inline-flex items-center text-primary hover:text-primary/80">
                      View Details <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
        
        <div className="flex justify-center gap-1.5 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-primary w-4" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
