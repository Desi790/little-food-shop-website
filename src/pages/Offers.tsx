
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Discount, Percent } from "lucide-react";

// Mock offer data
const specialOffers = [
  {
    id: "1",
    title: "Family Bundle",
    description: "4 main courses, 2 sides, and a dessert",
    discount: "$10 off",
    expiryDate: "June 30, 2025",
    code: "FAMILY10",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=3270&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Weekday Special",
    description: "20% off all orders placed Monday through Thursday",
    discount: "20% off",
    expiryDate: "Ongoing",
    code: "WEEKDAY20",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "First Order Discount",
    description: "10% off your first order with us",
    discount: "10% off",
    expiryDate: "No expiry",
    code: "WELCOME10",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=3387&auto=format&fit=crop"
  }
];

// Mock loyalty tiers
const loyaltyTiers = [
  {
    name: "Bronze",
    pointsRequired: 0,
    benefits: ["5% off every 5th order", "Birthday special treat"]
  },
  {
    name: "Silver",
    pointsRequired: 500,
    benefits: ["10% off every 5th order", "Birthday special treat", "Free delivery on orders over $30"]
  },
  {
    name: "Gold",
    pointsRequired: 1000,
    benefits: ["15% off every 5th order", "Birthday special treat", "Free delivery on all orders", "Early access to seasonal menus"]
  }
];

const Offers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our exclusive offers!");
      setEmail("");
    }
  };

  return (
    <Layout>
      <HeroSection 
        title="Special Offers" 
        subtitle="Exclusive deals, promotions, and savings on your favorite meals"
        image="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=3270&auto=format&fit=crop"
      />
      
      {/* Current Promotions */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Current Promotions" 
            subtitle="Take advantage of these limited-time offers"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {specialOffers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded-md flex items-center">
                      <Percent className="h-3 w-3 mr-1" /> {offer.discount}
                    </span>
                  </div>
                  <CardDescription>{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-3 rounded-md text-center">
                    <p className="text-sm text-gray-600 mb-1">Use code:</p>
                    <p className="font-semibold">{offer.code}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-gray-600">Expires: {offer.expiryDate}</p>
                  <Link to="/menu">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">Order Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Loyalty Program */}
      <section className="section-padding bg-warm-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Loyalty Program" 
            subtitle="Earn points with every order and unlock exclusive benefits"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {loyaltyTiers.map((tier, index) => (
              <Card key={tier.name} className={`${index === 2 ? 'border-primary' : ''}`}>
                <CardHeader className={`${index === 2 ? 'bg-primary text-white' : ''}`}>
                  <CardTitle className="flex items-center justify-between">
                    {tier.name} 
                    {index === 2 && <Discount className="h-5 w-5" />}
                  </CardTitle>
                  <CardDescription className={`${index === 2 ? 'text-white/80' : ''}`}>
                    {tier.pointsRequired} points required
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bundle Deals */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Bundle Deals" 
            subtitle="Save more when you order our specially curated meal bundles"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=3022&auto=format&fit=crop" 
                  alt="Family Bundle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Family Bundle</h3>
                <p className="text-gray-600 mb-4">
                  Feed the whole family with our special bundle! Includes 4 main courses of your choice,
                  2 sides, and a dessert to share.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$59.99</span>
                  <Link to="/menu">
                    <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=3387&auto=format&fit=crop" 
                  alt="Date Night Bundle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Date Night Bundle</h3>
                <p className="text-gray-600 mb-4">
                  The perfect meal for a romantic evening. Includes 2 gourmet main courses,
                  a bottle of non-alcoholic sparkling cider, and a dessert to share.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$34.99</span>
                  <Link to="/menu">
                    <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Email Signup */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading 
            title="Get Exclusive Offers" 
            subtitle="Sign up for our newsletter to receive special deals and promotions"
            center
          />
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-6">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
          
          <p className="text-gray-600 mt-4 text-sm">
            We'll never share your email with anyone else. You can unsubscribe at any time.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Offers;
