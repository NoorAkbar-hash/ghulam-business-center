import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BusinessCenterHero from '../components/business-center/BusinessCenterHero';
import WorkspaceTypes from '../components/business-center/WorkspaceTypes';
import OfficeGallery from '../components/business-center/OfficeGallery';
import WhyChooseBusinessCenter from '../components/business-center/WhyChooseBusinessCenter';
import BusinessCenterTestimonials from '../components/business-center/BusinessCenterTestimonials';
import OfficeLocation from '../components/business-center/OfficeLocation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ConsultationForm from '../components/ConsultationForm';
import SEO from '../components/ui/SEO';

export default function BusinessCenter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Premium Business Center Doha | Flexible Workspaces" 
        description="Explore premium office spaces, virtual offices, and conference rooms at Ghulam Business Center in Doha. The most prestigious corporate address for your business."
      />
      <LoadingOverlay />
      <Navbar />
      <BusinessCenterHero />
      <WorkspaceTypes />
      <WhyChooseBusinessCenter />
      <OfficeGallery />
      <BusinessCenterTestimonials />
      <OfficeLocation />
      <ConsultationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
