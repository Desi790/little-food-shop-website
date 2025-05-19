
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {dietary && dietary.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {dietary.map((item) => (
              <Badge key={item} variant="secondary" className="text-xs bg-yellow-100 text-gray-800 border border-yellow-200">
                {item}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-xl">{name}</h3>
          <span className="text-primary font-semibold text-lg">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{category}</span>
          <Button 
            onClick={handleAddToCart} 
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
