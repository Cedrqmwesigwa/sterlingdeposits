
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Lazy-loaded sections
const ServiceShowcase = dynamic(() => import('@/components/sections/ServiceShowcase'));
const ShopSection = dynamic(() => import('@/components/sections/ShopSection'));
const ContractorInfo = dynamic(() => import('@/components/sections/ContractorInfo'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const PaymentSecurity = dynamic(() => import('@/components/sections/PaymentSecurity'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const GoogleLoginButton = dynamic(() => import('@/components/GoogleLoginButton'));

// Helper component for section titles
const SectionTitle = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{description}</p>
  </div>
);

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary">
            Sterling Contractors
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Your trusted partner for quality hardware supplies and reliable contracting services in Kampala, Uganda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Recent Work"
            description="We take pride in our work. Here are a few of our recently completed projects."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Residential Build in Bukasa", src: "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZXNpZGVudGlhbCUyMHxlbnwwfHx8fDE3NTAxODU5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: 'modern building', alt: 'Modern residential building' },
              { id: 2, title: "Project Title 2", src: "https://placehold.co/600x400.png", hint: 'interior design', alt: 'Interior design project' },
              { id: 3, title: "Project Title 3", src: "https://placehold.co/600x400.png", hint: 'construction site', alt: 'Construction site in progress' }
            ].map((item) => (
              <Card key={item.id}>
                <div className="relative h-60 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint={item.hint}
                    priority={item.id === 1} // Only prioritize the first image or specific important ones
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>Kampala, Uganda</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamically imported sections */}
      <ServiceShowcase />
      <ShopSection />
      <ContractorInfo />
      <Testimonials />
      <PaymentSecurity />
      <ContactSection />
      
      {/* Google Login */}
      <div className="text-center py-8 border-t border-border/40">
        <p className="text-sm text-muted-foreground mb-3">Admin Login</p>
        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>
    </MainLayout>
  );
}
