import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import ContractorInfo from '@/components/sections/ContractorInfo';
import Testimonials from '@/components/sections/Testimonials';
import PaymentSecurity from '@/components/sections/PaymentSecurity';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceShowcase />
      <ContractorInfo />
      <Testimonials />
      <PaymentSecurity />
      <ContactSection />
    </MainLayout>
  );
}
