import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';
import FAQ from '../components/sections/FAQ';
import ConsultationForm from '../components/ConsultationForm';
import SystemPortals from '../components/sections/SystemPortals';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import SEO from '../components/ui/SEO';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Leading Business Setup & PRO Services" 
        description="Ghulam Business Center is your premier partner for company formation, PRO services, and premium office solutions in Doha, Qatar. Establish your presence with local experts."
      />
      <LoadingOverlay />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ />
      <ConsultationForm />
      <SystemPortals />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
