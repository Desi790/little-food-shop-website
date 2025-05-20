
import { useAccessibility } from "@/components/accessibility/AccessibilityPanel";

const MapSection = () => {
  const { accessibilityState } = useAccessibility();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className={`${accessibilityState.highContrast ? 'border-2 border-white' : 'bg-white p-2 shadow-sm'} rounded-lg overflow-hidden`}>
        <div className="aspect-[16/9] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0910714099636!2d-122.41941532392872!3d37.77492901456074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5158e24!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1682384899899!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="The Little Food Shop location"
            aria-label="Google Maps showing The Little Food Shop location at 123 Main St, San Francisco, CA 94105"
          ></iframe>
        </div>
        
        {/* Accessible text description for screen readers */}
        <div className="sr-only">
          Our restaurant is located at 123 Main Street, San Francisco, CA 94105. We are near the Financial District, a short walk from the Embarcadero BART station.
        </div>
        
        {/* Text description (visible in high contrast mode) */}
        {accessibilityState.highContrast && (
          <div className="p-4 border-t-2 border-white">
            <p className="text-white">
              <strong>Our Location:</strong> 123 Main Street, San Francisco, CA 94105
            </p>
            <p className="text-white mt-2">
              We are near the Financial District, a short walk from the Embarcadero BART station.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MapSection;
