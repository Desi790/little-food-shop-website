
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

// Team member data
const teamMembers = [
  {
    name: "Chef John",
    title: "Head Chef",
    bio: "With over 15 years of experience in fine dining, Chef John brings his passion for quality ingredients and traditional cooking techniques to The Little Food Shop.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2980&auto=format&fit=crop"
  },
  {
    name: "Maria Rodriguez",
    title: "Operations Manager",
    bio: "Maria ensures that everything runs smoothly, from ingredient sourcing to meal distribution. Her attention to detail guarantees consistent quality in every order.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    title: "Nutritionist",
    bio: "David helps create balanced meals that don't just taste good but are good for you. He specializes in developing options for various dietary needs and preferences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3087&auto=format&fit=crop"
  },
  {
    name: "Sarah Johnson",
    title: "Pastry Chef",
    bio: "Sarah's delicate pastries and desserts add the perfect sweet finish to our meal offerings. Her creations combine classic techniques with innovative flavors.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop"
  }
];

// Timeline events
const timelineEvents = [
  {
    date: "January 2025",
    title: "Founding of The Little Food Shop",
    description: "After years of planning, we opened our doors with a mission to provide restaurant-quality meals for busy families and professionals."
  },
  {
    date: "March 2025",
    title: "Launch of Online Ordering",
    description: "We expanded our services to include an online ordering system, making it even more convenient for customers to enjoy our meals."
  },
  {
    date: "May 2025",
    title: "Introduction of Dietary Options",
    description: "We broadened our menu to include more vegetarian, vegan, and gluten-free options to accommodate diverse dietary needs."
  },
  {
    date: "August 2025",
    title: "Community Partnerships",
    description: "We began collaborating with local farmers and suppliers to source the freshest, most sustainable ingredients possible."
  },
  {
    date: "October 2025",
    title: "Launch of Subscription Service",
    description: "Our new subscription service allows customers to receive regular meal deliveries tailored to their preferences."
  }
];

const About = () => {
  return (
    <Layout>
      <HeroSection 
        title="Our Story" 
        subtitle="Founded in 2025, The Little Food Shop brings the comfort of home cooking to your table."
        image="https://images.unsplash.com/photo-1556910103-8b31760bd410?q=80&w=2940&auto=format&fit=crop"
      />
      
      {/* Our Mission */}
      <section className="section-padding bg-warm-light">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            title="Our Mission" 
            center
          />
          <div className="text-center">
            <p className="text-lg mb-4">
              At The Little Food Shop, we believe everyone deserves to enjoy delicious, 
              homemade meals regardless of their cooking skills or busy schedules.
            </p>
            <p className="text-lg mb-4">
              Our mission is to create convenient food options that never compromise 
              on quality, taste, or nutrition. We're passionate about using fresh, 
              locally-sourced ingredients and traditional cooking methods to deliver meals 
              that taste like they were made in your own kitchen.
            </p>
            <p className="text-lg">
              We're committed to sustainability, community involvement, and innovation in 
              everything we do, from our eco-friendly packaging to our seasonal menu updates.
            </p>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The talented people behind our delicious food"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Key milestones in The Little Food Shop's story"
            center
          />
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 relative`}
              >
                <div className="md:w-1/2 p-4">
                  <div className={`bg-white p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-primary font-medium mb-3">{event.date}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Food Preparation Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Our Food Preparation Process" 
            subtitle="From fresh ingredients to your table"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="text-center">
              <div className="bg-warm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ingredient Selection</h3>
              <p className="text-gray-600">
                We source the freshest ingredients from local suppliers, prioritizing organic and sustainable options whenever possible.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-warm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Preparation</h3>
              <p className="text-gray-600">
                Our skilled chefs prepare each meal with care, using traditional techniques and innovative methods to maximize flavor.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-warm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Careful Packaging</h3>
              <p className="text-gray-600">
                We package meals in eco-friendly containers that maintain freshness and can be easily reheated without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
