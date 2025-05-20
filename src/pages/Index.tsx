
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import FoodCard from "@/components/ui/food-card";
import FeaturedCarousel, { FeaturedItem } from "@/components/ui/featured-carousel";
import VideoEmbed from "@/components/ui/video-embed";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Link } from "react-router-dom";

// Mock data for featured meals
const featuredMeals = [
  {
    id: "1",
    name: "Homestyle Lasagna",
    description: "Layers of pasta, rich meat sauce, and three cheeses, baked to perfection.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2835&auto=format&fit=crop",
    category: "Mains",
    dietary: ["Contains Dairy", "Contains Gluten"]
  },
  {
    id: "2",
    name: "Mediterranean Salad",
    description: "Fresh greens with feta cheese, olives, cucumbers, and our house dressing.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=3384&auto=format&fit=crop",
    category: "Salads",
    dietary: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "3",
    name: "Classic Tiramisu",
    description: "Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2787&auto=format&fit=crop",
    category: "Desserts",
    dietary: ["Vegetarian", "Contains Dairy"]
  }
];

// Featured dishes for carousel
const featuredDishes: FeaturedItem[] = [
  {
    id: "featured1",
    name: "Seasonal Vegetable Bowl",
    description: "A vibrant blend of locally sourced vegetables with our signature dressing.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop",
    link: "/menu"
  },
  {
    id: "featured2",
    name: "Artisan Sourdough Bread",
    description: "Freshly baked sourdough with a crispy crust and soft, tangy interior.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=2787&auto=format&fit=crop",
    link: "/menu"
  },
  {
    id: "featured3",
    name: "Wild-caught Salmon Plate",
    description: "Perfectly cooked salmon with seasonal sides and lemon herb sauce.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2940&auto=format&fit=crop",
    link: "/menu"
  },
  {
    id: "featured4",
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a molten center, served with vanilla bean ice cream.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2874&auto=format&fit=crop",
    link: "/menu"
  }
];

// Mock testimonials
const testimonials = [
  {
    id: "1",
    name: "Sarah L.",
    content: "The Little Food Shop has become my go-to for weeknight dinners. Their lasagna tastes homemade and saves me so much time!",
    rating: 5
  },
  {
    id: "2",
    name: "Michael T.",
    content: "As someone with dietary restrictions, I appreciate the clear labeling. The Mediterranean Salad is absolutely delicious!",
    rating: 5
  },
  {
    id: "3",
    name: "Jessica R.",
    content: "Their desserts are to die for! The Tiramisu tastes just like the one I had in Italy last summer.",
    rating: 4
  }
];

const Index = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // Add smooth scrolling for all internal links
  useEffect(() => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <Layout>
      <HeroSection 
        title="Delicious, Ready-Made Meals Delivered To Your Door"
        subtitle="Enjoy restaurant-quality, homestyle meals without the hassle. Order online for pickup or delivery."
        image="/lovable-uploads/f3d3f89f-5bf6-40cf-ac21-e41ff2bc1b53.png"
        imageAlt="Assorted gourmet dishes with plates of food and The Little Food Shop title overlay"
        overlayOpacity="bg-black/50"
      />
      
      {/* Featured dishes carousel */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <FeaturedCarousel 
            items={featuredDishes}
            title="This Week's Featured Dishes"
          />
          <div className="text-center mt-6">
            <Link to="/menu">
              <Button size="lg" className="bg-primary hover:bg-primary/90">View All Dishes</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Welcome section */}
      <section className="section-padding bg-warm-light" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Welcome to The Little Food Shop" 
              />
              <p className="text-lg mb-6">
                Established in 2025, we're passionate about creating delicious, ready-made meals that taste just like home cooking. 
                Our skilled chefs use only the finest ingredients to prepare meals that are convenient without compromising on quality or flavor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button variant="outline" size="lg">Our Story</Button>
                </Link>
                <Link to="/menu">
                  <Button className="bg-primary hover:bg-primary/90" size="lg">Browse Our Menu</Button>
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <VideoEmbed
                videoId="dQw4w9WgXcQ"
                title="How We Make Our Signature Dishes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured meals section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Popular Meals" 
            subtitle="Our most popular dishes, loved by customers"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredMeals.map((meal) => (
              <FoodCard 
                key={meal.id} 
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                image={meal.image}
                category={meal.category}
                dietary={meal.dietary}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button size="lg" variant="outline">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special offer banner */}
      <section className="bg-secondary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Weekly Special: Family Bundle</h2>
              <p className="text-gray-800">
                Feed the whole family with our special bundle! 4 main courses, 2 sides, and a dessert for just $59.99.
              </p>
            </div>
            <div>
              <Link to="/offers">
                <Button className="bg-primary hover:bg-primary/90" size="lg">View Special Offers</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="What Our Customers Say" 
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-left">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="section-padding bg-warm-light">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading 
            title="Stay Updated" 
            subtitle="Subscribe to our newsletter for special offers and new menu items"
            center
          />
          <NewsletterForm />
        </div>
      </section>

      {/* CTA section */}
      <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to enjoy a homemade meal without the work?</h2>
          <Link to="/order">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Order Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

// Newsletter component
const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button 
          type="submit" 
          className="bg-primary hover:bg-primary/90 whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
};

export default Index;
