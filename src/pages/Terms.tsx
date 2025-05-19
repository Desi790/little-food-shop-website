
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";

const Terms = () => {
  return (
    <Layout>
      <HeroSection 
        title="Terms & Conditions" 
        subtitle="Please read these terms carefully before using our services"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=3270&auto=format&fit=crop"
        ctaText={undefined}
        ctaLink={undefined}
      />
      
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Terms & Conditions" 
            subtitle="Last updated: May 15, 2025"
          />
          
          <div className="prose max-w-none">
            <p>
              These Terms and Conditions govern your use of The Little Food Shop website and services. 
              By accessing our website or placing an order, you agree to these terms in full.
            </p>
            
            <h3>Ordering Terms</h3>
            <p>
              When placing an order through our website, you agree to the following:
            </p>
            <ul>
              <li>You must provide accurate personal and payment information.</li>
              <li>Your order is an offer to buy our products, which we may accept or decline at our discretion.</li>
              <li>We will confirm acceptance of your order via email.</li>
              <li>Prices displayed on our website are in USD and include applicable taxes.</li>
              <li>We reserve the right to change our prices at any time without notice.</li>
              <li>Minimum order values may apply for delivery services.</li>
              <li>Delivery times are estimates and not guaranteed.</li>
            </ul>
            
            <h3>Refund and Cancellation Policy</h3>
            <p>
              Customer satisfaction is our priority. Our refund and cancellation policy is as follows:
            </p>
            <ul>
              <li>Orders can be cancelled free of charge up to 2 hours before the scheduled pickup or delivery time.</li>
              <li>For cancellations within 2 hours of the scheduled time, a 50% cancellation fee may apply.</li>
              <li>If you're unsatisfied with the quality of your order, please contact us within 24 hours of receipt for a refund or replacement.</li>
              <li>Refunds will be processed using the original payment method within 5-7 business days.</li>
              <li>We cannot accept returns of food items due to health and safety regulations.</li>
            </ul>
            
            <h3>Liability Disclaimers</h3>
            <p>
              While we strive to provide accurate information and quality products, we cannot guarantee:
            </p>
            <ul>
              <li>The accuracy or completeness of information on our website.</li>
              <li>The availability of all menu items at all times.</li>
              <li>That our website will be available uninterrupted and error-free.</li>
            </ul>
            <p>
              To the maximum extent permitted by law, we disclaim all liability for:
            </p>
            <ul>
              <li>Indirect or consequential losses arising from your use of our website or services.</li>
              <li>Any allergic reactions or adverse effects resulting from consumption of our products.</li>
              <li>Delays or failures in delivery outside our reasonable control.</li>
            </ul>
            <p>
              Nothing in these terms excludes or limits our liability for death or personal injury arising from our 
              negligence, or our fraud or fraudulent misrepresentation.
            </p>
            
            <h3>Intellectual Property Rights</h3>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is our property or 
              that of our licensors and is protected by copyright laws. You may not:
            </p>
            <ul>
              <li>Copy, reproduce, modify, or distribute any content from our website without our prior written consent.</li>
              <li>Use our trademarks or trade names without our prior written approval.</li>
              <li>Remove any copyright or other proprietary notices from materials on our website.</li>
            </ul>
            
            <h3>Terms of Website Use</h3>
            <p>
              When using our website, you agree to:
            </p>
            <ul>
              <li>Use our website in a manner that complies with all applicable laws and regulations.</li>
              <li>Not engage in any activity that could harm, disable, or impair our website's functionality.</li>
              <li>Not attempt to gain unauthorized access to our systems or user accounts.</li>
              <li>Not upload or transmit viruses or other malicious code.</li>
            </ul>
            <p>
              We reserve the right to terminate or restrict your access to our website if you violate these terms.
            </p>
            
            <h3>Amendments to Terms</h3>
            <p>
              We may revise these terms from time to time. The revised terms will apply from the date of publication 
              on our website. We encourage you to check this page regularly to stay informed.
            </p>
            
            <h3>Governing Law</h3>
            <p>
              These terms shall be governed by and construed in accordance with the laws of California, USA. 
              Any disputes arising from these terms or your use of our website shall be subject to the exclusive 
              jurisdiction of the courts of California.
            </p>
            
            <h3>Contact Us</h3>
            <p>
              If you have questions about our Terms & Conditions, please contact us at:
            </p>
            <p>
              Email: legal@littlefoodshop.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Main Street, Foodville, CA 94123
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
