
import { ServiceCard } from '@/components/ui/ServiceCard';
import type { Service } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';
import { Briefcase, Wrench, DraftingCompass, HardHat, Truck, Hammer } from 'lucide-react';

const services: Service[] = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    description: 'Building your dream home from foundation to finish with quality materials and expert craftsmanship.',
    imageSrc: 'https://images.unsplash.com/photo-1639953803381-e9c3f3a38253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aG91c2UlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzUwMjI1NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'house construction',
    icon: HardHat,
  },
  {
    id: 'commercial-projects',
    title: 'Commercial Projects',
    description: 'Expert solutions for commercial building construction, ensuring functionality and durability for your business.',
    imageSrc: 'https://images.unsplash.com/photo-1580742432710-d3c3703559a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb21tZXJjaWFsJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzUwMjI1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'commercial building',
    icon: Briefcase,
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovations & Remodeling',
    description: 'Transforming existing spaces with innovative designs and high-quality renovations, for homes and businesses.',
    imageSrc: 'https://images.unsplash.com/photo-1682888818620-94875adf5bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxraXRjaGVuJTIwcmVtb2RlbHxlbnwwfHx8fDE3NTAyMjU0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'kitchen remodel',
    icon: Wrench,
  },
  {
    id: 'hardware-supply',
    title: 'Hardware & Material Supply',
    description: 'Providing a wide range of quality construction materials and hardware for all your project needs.',
    imageSrc: 'https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxoYXJkd2FyZSUyMHN0b3JlfGVufDB8fHx8MTc1MDIyNTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'hardware store',
    icon: Hammer,
  },
  {
    id: 'project-consultation',
    title: 'Project Consultation',
    description: 'Expert advice and planning services to ensure your construction project is successful from start to finish.',
    imageSrc: 'https://images.unsplash.com/photo-1721132537184-5494c01ed87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxibHVlcHJpbnQlMjBwbGFuc3xlbnwwfHx8fDE3NTAyMjU0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'blueprint plans',
    icon: DraftingCompass,
  },
  {
    id: 'logistics-delivery',
    title: 'Material Logistics & Delivery',
    description: 'Reliable and timely delivery of construction materials directly to your site in Kampala.',
    imageSrc: 'https://images.unsplash.com/photo-1654365256618-3bd21f0d0335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8dHJ1Y2slMjBkZWxpdmVyeXxlbnwwfHx8fDE3NTAyMjU0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
