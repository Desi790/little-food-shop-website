
import { useCart, CartItem } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface FoodCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary?: string[];
}

const FoodCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
  dietary = []
}: FoodCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const item: CartItem = {
      id,
      name,
      price,
      image,
      quantity: 1
    };
    addItem(item);
  };

  return (
    <div className="food-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="food-card-image group-hover:scale-105 transition-transform duration-300"
        />
        {dietary && dietary.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {dietary.map((item) => (
              <Badge key={item} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="food-card-content">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="text-primary font-semibold">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{category}</span>
          <Button 
            onClick={handleAddToCart} 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
