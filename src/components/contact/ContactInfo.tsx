
import SectionHeading from "@/components/ui/section-heading";
import FeedbackForm from "@/components/ui/feedback-form";

const ContactInfo = () => {
  return (
    <div>
      <SectionHeading 
        title="Contact Information" 
        subtitle="Find us online, by phone, or in person"
      />
      
      <div className="space-y-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">Monday - Friday</span>
              <span>8:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Saturday</span>
              <span>9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Sunday</span>
              <span>10:00 AM - 4:00 PM</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Reach Us</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-primary">(555) 123-4567</p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-primary">hello@littlefoodshop.com</p>
            </div>
            <div>
              <p className="font-medium">Address</p>
              <p>123 Main Street, Foodville, CA 94123</p>
            </div>
          </div>
        </div>
      </div>
      
      <FeedbackForm />
    </div>
  );
};

export default ContactInfo;
