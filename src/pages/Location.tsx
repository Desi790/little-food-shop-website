
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Car, Train, Landmark } from "lucide-react";

const Location = () => {
  return (
    <Layout>
      <HeroSection 
        title="Find Us" 
        subtitle="Visit our location to pick up your order or dine in our cozy space"
        image="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?q=80&w=3270&auto=format&fit=crop"
        ctaText={undefined}
        ctaLink={undefined}
        imageAlt="The exterior of The Little Food Shop restaurant"
      />
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Our Location" 
                subtitle="Conveniently located in the heart of downtown"
              />
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <p className="text-gray-600">123 Main Street</p>
                      <p className="text-gray-600">Foodville, CA 94123</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-2">Business Hours</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 mt-6 mb-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-lg font-semibold">Contact</h3>
                      </div>
                      <p className="text-gray-600">Phone: (555) 123-4567</p>
                      <div className="flex items-center mt-1">
                        <Mail className="h-5 w-5 text-primary mr-2" />
                        <p className="text-gray-600">Email: hello@littlefoodshop.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Parking</h3>
                    <p className="text-gray-600">
                      Free parking is available in our dedicated lot behind the building. 
                      Additional street parking can be found along Main Street and Oak Avenue.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Public Transportation</h3>
                    <p className="text-gray-600">
                      We're a 5-minute walk from the Downtown Station on the Blue Line.
                      Bus routes 10, 15, and 22 all stop within a block of our location.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Landmark className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Nearby Landmarks</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Across from Central Park</li>
                      <li>Next to City Library</li>
                      <li>Two blocks from the Art Museum</li>
                      <li>Five-minute walk from Downtown Shopping Center</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-[500px] rounded-lg overflow-hidden shadow-sm mb-6">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Pickup Instructions</h3>
                    <p className="text-gray-600">
                      When you arrive, you can park in our dedicated lot and come inside to the pickup counter. 
                      Our staff will have your order ready and waiting.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Dine-In Options</h3>
                    <p className="text-gray-600">
                      We have limited seating available for those who wish to enjoy their meals on-site. 
                      Reservations are recommended for groups of 4 or more.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
