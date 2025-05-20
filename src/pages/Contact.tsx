
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import { useAccessibility } from "@/components/accessibility/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { SpeakerWave } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const { accessibilityState } = useAccessibility();
  const [announcement, setAnnouncement] = useState<string | null>(null);
  
  // Function to trigger screen reader announcements
  const announce = (message: string) => {
    if (accessibilityState.screenReader) {
      setAnnouncement(message);
      
      // Clear after 5 seconds
      setTimeout(() => {
        setAnnouncement(null);
      }, 5000);
    }
  };
  
  useEffect(() => {
    // When screen reader mode is activated, announce the page content
    if (accessibilityState.screenReader) {
      announce("Contact page loaded. This page contains a contact form, company information, and location map.");
    }
  }, [accessibilityState.screenReader]);
  
  return (
    <Layout>
      {/* Screen reader announcement area (hidden visually) */}
      {accessibilityState.screenReader && (
        <div 
          aria-live="polite" 
          className="sr-only"
        >
          {announcement}
        </div>
      )}

      <HeroSection 
        title="Contact Us" 
        subtitle="Have questions or feedback? We'd love to hear from you."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=3474&auto=format&fit=crop"
        imageAlt="Someone typing on a laptop keyboard"
      />
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Screen reader button to read page content */}
          {accessibilityState.screenReader && (
            <div className="mb-6 flex justify-center">
              <Button 
                onClick={() => announce("This page contains a contact form where you can send us a message, our contact information including phone and email, and a map showing our location.")}
                className="flex items-center gap-2"
              >
                <SpeakerWave size={18} />
                Read page description
              </Button>
            </div>
          )}
          
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
