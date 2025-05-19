
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useCart, CartItem } from "@/hooks/use-cart";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + tax + shipping;

  const handleApplyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toLowerCase() === "welcome10") {
      toast.success("Promo code applied! 10% discount added.");
    } else {
      toast.error("Invalid promo code. Please try again.");
    }
  };

  const handleCheckout = () => {
    toast.success("Proceeding to checkout...");
    // In a real application, we would redirect to a checkout page
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading 
          title="Your Cart" 
          subtitle={`${items.length} item${items.length !== 1 ? 's' : ''} in your cart`}
        />
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Product</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="align-middle">
                          <div className="w-20 h-20 rounded-md overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-red-500 flex items-center mt-2"
                            >
                              <Trash2 className="h-3 w-3 mr-1" /> Remove
                            </button>
                          </div>
                        </TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="h-8 w-8 rounded-full"
                              onClick={() => handleDecreaseQuantity(item)}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="h-8 w-8 rounded-full"
                              onClick={() => handleIncreaseQuantity(item)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="text-red-500 border-red-500"
                >
                  Clear Cart
                </Button>
                
                <Link to="/menu">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleApplyPromoCode} className="flex gap-2 mb-6">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" variant="outline">Apply</Button>
                </form>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" /> Checkout
                </Button>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  <p>We accept credit cards, PayPal, and Apple Pay</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="bg-warm-light rounded-full p-6 mb-4">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet</p>
            <Link to="/menu">
              <Button className="bg-primary hover:bg-primary/90">Browse Menu</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
