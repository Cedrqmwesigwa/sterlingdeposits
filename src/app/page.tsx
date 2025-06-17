
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ServiceShowcase = dynamic(() => import('@/components/sections/ServiceShowcase'));
const ShopSection = dynamic(() => import('@/components/sections/ShopSection'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const ContractorInfo = dynamic(() => import('@/components/sections/ContractorInfo'));
const PaymentSecurity = dynamic(() => import('@/components/sections/PaymentSecurity'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const GoogleLoginButton = dynamic(() => import('@/components/GoogleLoginButton'));

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
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Modern residential house construction project" 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint="house exterior"
              priority
            />
          </div>
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Commercial building site under construction" 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint="building site"
              priority
            />
          </div>
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Renovated kitchen interior" 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint="interior renovation"
              priority
            />
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
