
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Residential Construction',
    description: 'From dream homes to custom builds, we lay the foundation for your future. Our team handles everything from design to the final touches, ensuring quality at every step.',
    image: 'https://images.unsplash.com/photo-1601303981778-0f61e3d2da64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8UmVzaWRlbnRpYWwlMjBjb25zdHJ1Y3Rpb24lMjB8ZW58MHx8fHwxNzUwMjQ4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'new home',
    features: [
      'New Home Builds',
      'Custom Designs',
      'Foundation & Framing',
      'Full Project Management',
    ],
  },
  {
    title: 'Commercial Renovations',
    description: 'Modernize your business space to be more functional and appealing. We specialize in renovations that enhance your brand and improve customer experience.',
    image: 'https://images.unsplash.com/photo-1675792832792-feac7216999a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxDb21tZXJjaWFsJTIwcmVub3ZhdGlvbiUyMG9mZmljZSUyMHNwYWNlJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBtb2Rlcm4mdz0xMDgwJnE9ODAmZml0PW1heCZpeGxpYj1yYi00LjEuMCZhdXRvPWZvcm1hdCZmbT1qcGc',
    hint: 'office renovation',
    features: [
      'Office & Retail Remodeling',
      'Space Optimization',
      'Exterior Facelifts',
      'Modern & Functional Designs',
    ],
  },
  {
    title: 'Hardware Supply & Consultation',
    description: 'Gain access to top-quality hardware and expert advice. We source and supply the best materials to ensure your project’s success and longevity.',
    image: 'https://images.unsplash.com/photo-1617123623686-2b7b339785da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxIYXJkd2FyZSUyMHN1cHBseSUyMHxlbnwwfHx8fDE3NTAyNTY2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'hardware tools',
    features: [
      'Quality Material Sourcing',
      'Cost-Effective Solutions',
      'Expert Material Advice',
      'Wide Range of Products',
    ],
  },
];

const SectionTitle = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{description}</p>
    </div>
  );

const ServicesPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Expertise</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Delivering high-quality construction and hardware solutions tailored for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`grid grid-cols-1 md:grid-cols-2 items-center`}>
                  <div className={`relative h-64 md:h-full ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                    <Image
                      src={service.image}
                      alt={`${service.title} service image`}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={service.hint}
                    />
                  </div>
                  <div className="p-8">
                    <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                        {service.features.map((feature) =>(
                            <li key={feature} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary"/>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-8">
                Let's discuss how Sterling Contractors can bring your vision to life.
            </p>
            <Button asChild size="lg">
                <Link href="/#contact">Get a Free Quote</Link>
            </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
