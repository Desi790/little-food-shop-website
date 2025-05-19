
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import FoodCard from "@/components/ui/food-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
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

  return (
    <Layout>
      <HeroSection 
        title="Delicious, Ready-Made Meals Delivered To Your Door"
        subtitle="Enjoy restaurant-quality, homestyle meals without the hassle. Order online for pickup or delivery."
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop"
      />
      
      {/* Welcome section */}
      <section className="section-padding bg-warm-light">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading 
            title="Welcome to The Little Food Shop" 
            center
          />
          <p className="text-lg mb-6">
            Established in 2025, we're passionate about creating delicious, ready-made meals that taste just like home cooking. 
            Our skilled chefs use only the finest ingredients to prepare meals that are convenient without compromising on quality or flavor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about">
              <Button variant="outline" size="lg">Our Story</Button>
            </Link>
            <Link to="/menu">
              <Button className="bg-primary hover:bg-primary/90" size="lg">Browse Our Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured meals section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Featured Meals" 
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

export default Index;
