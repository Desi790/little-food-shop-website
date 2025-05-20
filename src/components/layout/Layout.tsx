
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityPanel, { AccessibilityProvider } from '@/components/accessibility/AccessibilityPanel';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AccessibilityProvider>
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <AccessibilityPanel />
      </div>
    </AccessibilityProvider>
  );
};

export default Layout;
