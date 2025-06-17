
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import ServiceShowcase from '@/components/sections/ServiceShowcase';
import ShopSection from '@/components/sections/ShopSection';
import Testimonials from '@/components/sections/Testimonials';
import ContractorInfo from '@/components/sections/ContractorInfo';
import PaymentSecurity from '@/components/sections/PaymentSecurity';
import ContactSection from '@/components/sections/ContactSection';
import GoogleLoginButton from '@/components/GoogleLoginButton'; // Import the new component

export default function Home() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center min-h-[calc(50vh-5rem)] text-center py-12 md:py-16 px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sterling Contractors</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-muted-foreground">
          Your trusted partner for quality hardware supplies and reliable contracting services. Building your vision in Kampala, Uganda.
        </p>
        <Link href="#contact">
          <Button size="lg" className="px-8 py-3 text-lg">Get a Free Quote</Button>
        </Link>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Image 1 */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image src="/placeholder.svg" alt="Project Showcase 1" layout="fill" objectFit="cover" />
          </div>
          {/* Placeholder Image 2 */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image src="/placeholder.svg" alt="Project Showcase 2" layout="fill" objectFit="cover" />
          </div>
          {/* Placeholder Image 3 */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image src="/placeholder.svg" alt="Project Showcase 3" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
      <ServiceShowcase />
      <ShopSection />
      <ContractorInfo />
      <Testimonials />
      <PaymentSecurity />
      <ContactSection />
      <GoogleLoginButton />
    </MainLayout>
  );
}
