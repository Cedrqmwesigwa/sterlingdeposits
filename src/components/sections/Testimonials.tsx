
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { Testimonial } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';

const testimonials: Testimonial[] = [
  {
    id: 'client-mukasa',
    quote: "Sterling Contractors transformed our ancestral home with such care and precision. The team was professional, and the hardware they supplied was top-notch. The deposit process was clear and secure.",
    name: 'Mr. Mukasa',
    projectType: 'Residential Renovation - Kampala',
    avatarSrc: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbnxlbnwwfHx8fDE3NTAxODY1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    avatarHint: 'man portrait'
  },
  {
    id: 'client-achiro',
    quote: "Building our new clinic was a huge undertaking, but Sterling Contractors made it manageable. Their project management was excellent, and they delivered on time. We highly recommend their services.",
    name: 'Dr. Aciro',
    projectType: 'Commercial New Build - Health Clinic',
    avatarSrc: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxibGFjayUyMHdvbWFufGVufDB8fHx8MTc1MDE4NjUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    avatarHint: 'woman professional'
  },
  {
    id: 'client-okello',
    quote: "Finding reliable hardware suppliers in Kampala was a challenge until we found Sterling. Their range is great, and their consultation helped us choose the right materials for our apartment complex. ",
    name: 'Okello Properties Ltd.',
    projectType: 'Hardware Supply & Consultation',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarHint: 'construction manager'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            What Our Clients in Kampala Say
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            Hear from satisfied clients who trusted Sterling Contractors with their projects and hardware needs.
          </p>
        </ScrollAnimate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimate key={testimonial.id} delay={`delay-${index * 150}`}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
