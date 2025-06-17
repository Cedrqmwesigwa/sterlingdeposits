import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';
import { Briefcase, Wrench, DraftingCompass } from 'lucide-react';

const services: Service[] = [
  {
    id: 'new-construction',
    title: 'New Construction Projects',
    description: 'From groundbreaking to completion, we manage all aspects of your new construction with precision and expertise.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'construction site',
    icon: Briefcase,
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Transform your existing spaces with our high-quality renovation and remodeling services, tailored to your vision.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'modern kitchen',
    icon: Wrench,
  },
  {
    id: 'consultation',
    title: 'Consultation & Planning',
    description: 'Expert consultation and meticulous planning to ensure your project is set up for success from the very first step.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'blueprints planning',
    icon: DraftingCompass,
  },
];

export default function ServiceShowcase() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            Our Premier Services
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            We offer a comprehensive range of contracting services designed to meet your project needs with excellence and reliability.
          </p>
        </ScrollAnimate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimate key={service.id} delay={`delay-${index * 150}`}>
              <ServiceCard service={service} />
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
