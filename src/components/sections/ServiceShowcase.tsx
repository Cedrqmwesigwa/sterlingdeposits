
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';
import { Briefcase, Wrench, DraftingCompass, HardHat, Truck, Hammer } from 'lucide-react';

const services: Service[] = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    description: 'Building your dream home from foundation to finish with quality materials and expert craftsmanship.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'house construction',
    icon: HardHat,
  },
  {
    id: 'commercial-projects',
    title: 'Commercial Projects',
    description: 'Expert solutions for commercial building construction, ensuring functionality and durability for your business.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'commercial building',
    icon: Briefcase,
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovations & Remodeling',
    description: 'Transforming existing spaces with innovative designs and high-quality renovations, for homes and businesses.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'kitchen remodel',
    icon: Wrench,
  },
  {
    id: 'hardware-supply',
    title: 'Hardware & Material Supply',
    description: 'Providing a wide range of quality construction materials and hardware for all your project needs.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'hardware store',
    icon: Hammer,
  },
  {
    id: 'project-consultation',
    title: 'Project Consultation',
    description: 'Expert advice and planning services to ensure your construction project is successful from start to finish.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'blueprint plans',
    icon: DraftingCompass,
  },
  {
    id: 'logistics-delivery',
    title: 'Material Logistics & Delivery',
    description: 'Reliable and timely delivery of construction materials directly to your site in Kampala.',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'truck delivery',
    icon: Truck,
  },
];

export default function ServiceShowcase() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            Our Premier Services
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            We offer a comprehensive range of contracting and hardware supply services designed to meet your project needs with excellence and reliability.
          </p>
        </ScrollAnimate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimate key={service.id} delay={`delay-${index * 100}`}>
              <ServiceCard service={service} />
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
