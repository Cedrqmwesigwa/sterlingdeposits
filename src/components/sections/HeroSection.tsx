import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from '@/components/ScrollAnimate';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-card overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="https://placehold.co/1920x1080.png" // Abstract background
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="modern architecture"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimate>
            <h1 className="text-4xl font-extrabold font-headline tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Secure Your Project with <span className="text-primary">Sterling Deposits</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate delay="delay-200">
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Reliable contracting services backed by transparent and secure deposit handling. Partner with us for peace of mind from start to finish.
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay="delay-400">
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Make a Deposit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
