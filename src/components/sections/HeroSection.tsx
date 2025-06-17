import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from '@/components/ScrollAnimate';

export default function HeroSection() {
  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      {/* Optional: Subtle background pattern or image */}
      <div className="absolute inset-0 opacity-5">
         <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Abstract elegant background"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="luxury abstract pattern"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimate>
            <h1 className="text-5xl font-extrabold font-headline tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Experience <span className="text-primary">Unrivaled Elegance</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate delay="delay-200">
            <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
              Discover curated collections that define sophistication and style.
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay="delay-400">
            <div className="mt-12 flex justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg">
                <Link href="#shop">Explore The Collection</Link>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
