import { TestimonialCard } from '@/components/ui/TestimonialCard';
import type { Testimonial } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';

const testimonials: Testimonial[] = [
  {
    id: 'client-1',
    quote: "Sterling Deposits handled our project with utmost professionalism. The deposit process was transparent and easy. Highly recommend!",
    name: 'Sarah L.',
    projectType: 'Home Renovation',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarHint: 'woman smiling'
  },
  {
    id: 'client-2',
    quote: "The quality of work and communication from Sterling was exceptional. We felt secure throughout the entire project duration.",
    name: 'Michael B.',
    projectType: 'New Office Build-out',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarHint: 'man professional'
  },
  {
    id: 'client-3',
    quote: "A truly reliable contractor. They delivered on time and on budget, and the deposit system gave us confidence from day one.",
    name: 'Jessica P.',
    projectType: 'Commercial Remodeling',
    // No avatarSrc, fallback will be used
    avatarHint: 'person happy'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            Hear from satisfied clients who trusted Sterling Deposits with their projects.
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
