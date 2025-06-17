import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <Card className="bg-card p-6 h-full flex flex-col shadow-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <CardContent className="p-0 flex-grow">
        <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
      </CardContent>
      <div className="flex items-center mt-auto">
        <Avatar className="h-12 w-12 mr-4">
          {testimonial.avatarSrc && <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.avatarHint || "person"} />}
          <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.projectType}</p>
        </div>
      </div>
    </Card>
  );
}
