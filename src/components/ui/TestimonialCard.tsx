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
    <Card className="bg-background/50 p-6 h-full flex flex-col shadow-lg border border-border/30 transform transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-primary fill-primary" />
        ))}
      </div>
      <CardContent className="p-0 flex-grow">
        <p className="text-muted-foreground italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
      </CardContent>
      <div className="flex items-center mt-auto pt-4 border-t border-border/20">
        <Avatar className="h-12 w-12 mr-4">
          {testimonial.avatarSrc && <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.avatarHint || "person"} />}
          <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.projectType}</p>
        </div>
      </div>
    </Card>
  );
}
