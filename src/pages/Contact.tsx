
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";

const Contact = () => {
  return (
    <Layout>
      <HeroSection 
        title="Contact Us" 
        subtitle="Have questions or feedback? We'd love to hear from you."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=3474&auto=format&fit=crop"
        imageAlt="Someone typing on a laptop keyboard"
      />
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <MapSection />
    </Layout>
  );
};

export default Contact;
