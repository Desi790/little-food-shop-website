
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import FeedbackForm from "@/components/ui/feedback-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      subject: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
            {/* Contact Form */}
            <div>
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Fill out the form below and we'll respond as soon as possible"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="order">Order Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="catering">Catering Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information & Feedback Form */}
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
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white p-2 rounded-lg shadow-sm overflow-hidden">
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
              aria-label="Google Maps showing The Little Food Shop location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
