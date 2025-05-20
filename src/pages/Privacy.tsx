
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";

const Privacy = () => {
  return (
    <Layout>
      <HeroSection 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your personal information"
        image="https://images.unsplash.com/photo-1576444356160-6c23a3921197?q=80&w=3270&auto=format&fit=crop"
        imageAlt="Document with privacy policy information"
        ctaText={undefined}
        ctaLink={undefined}
      />
      
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Privacy Policy" 
            subtitle="Last updated: May 15, 2025"
          />
          
          <div className="prose max-w-none">
            <p>
              At The Little Food Shop, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or place an order with us.
            </p>
            
            <h3>Information We Collect</h3>
            <p>
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Register on our website</li>
              <li>Place an order</li>
              <li>Sign up for our newsletter</li>
              <li>Participate in surveys or promotions</li>
              <li>Contact us with inquiries</li>
            </ul>
            <p>
              The personal information we may collect includes names, email addresses, phone numbers, billing addresses, 
              delivery addresses, and payment details.
            </p>
            
            <h3>How We Use Your Information</h3>
            <p>We may use the information we collect from you to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website, products, and services</li>
              <li>Administer promotions, surveys, or contests</li>
              <li>Protect against fraudulent transactions</li>
            </ul>
            
            <h3>Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities. 
              These technologies help us analyze website traffic, customize your experience, and deliver targeted 
              advertisements.
            </p>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may limit your ability 
              to use certain features of our website.
            </p>
            
            <h3>Third-Party Disclosure</h3>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who assist with our business operations (e.g., payment processors, delivery services)</li>
              <li>Law enforcement agencies when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
            <p>
              We do not sell or rent your personal information to third parties for their marketing purposes without 
              your explicit consent.
            </p>
            
            <h3>Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot 
              guarantee the security of your information.
            </p>
            
            <h3>GDPR Compliance</h3>
            <p>
              For users in the European Union, we comply with GDPR requirements regarding the collection, use, and retention 
              of your personal data. You have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing of your data</li>
              <li>Request transfer of your data</li>
              <li>Withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details provided below.
            </p>
            
            <h3>Children's Privacy</h3>
            <p>
              Our website is not intended for children under 16. We do not knowingly collect personal information from 
              children under 16. If you believe we have collected information from a child under 16, please contact us 
              immediately.
            </p>
            
            <h3>Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. The updated version will be indicated by an updated 
              "Last Updated" date. We encourage you to review this Privacy Policy regularly.
            </p>
            
            <h3>Contact Us</h3>
            <p>
              If you have questions or concerns about our Privacy Policy or data practices, please contact us at:
            </p>
            <p>
              Email: privacy@littlefoodshop.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Main Street, Foodville, CA 94123
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
