import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/types';
import Link from 'next/link';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;
  return (
    <Card className="flex flex-col bg-card overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
      <CardHeader className="p-0 relative">
        <div className="aspect-[4/3] w-full relative">
          <Image
            src={service.imageSrc}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={service.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          {IconComponent && <IconComponent className="h-7 w-7 mr-3 text-primary flex-shrink-0" />}
          <CardTitle className="text-xl lg:text-2xl font-headline text-foreground">{service.title}</CardTitle>
        </div>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300" asChild>
          <Link href="#contact">Learn More & Deposit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
