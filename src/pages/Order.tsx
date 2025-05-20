
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// For a full implementation, this would include the menu items with order customization options,
// but for this demo we'll just direct to the Menu page.

const Order = () => {
  return (
    <Layout>
      <HeroSection 
        title="Order Online" 
        subtitle="Fresh, homemade meals ready for pickup or delivery"
        image="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=3270&auto=format&fit=crop"
        imageAlt="Food delivery service ready for online ordering"
      />
      
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading 
            title="Ready to Order?" 
            subtitle="Browse our menu and customize your meal"
            center
          />
          
          <p className="mb-8">
            For a complete online ordering experience, please visit our menu page to select your favorite dishes.
            You can customize your order, select pickup or delivery options, and proceed to a secure checkout.
          </p>
          
          <Link to="/menu">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Browse Our Menu</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
