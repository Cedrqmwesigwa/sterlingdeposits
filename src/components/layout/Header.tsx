import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

// Minimalist and elegant SVG logo placeholder (e.g., an abstract shape or initial)
const ElegantLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
    <path d="M50 10 C 27.9086 10 10 27.9086 10 50 C 10 72.0914 27.9086 90 50 90 C 72.0914 90 90 72.0914 90 50 C 90 27.9086 72.0914 10 50 10 Z M 50 18 C 67.6731 18 82 32.3269 82 50 C 82 67.6731 67.6731 82 50 82 C 32.3269 82 18 67.6731 18 50 C 18 32.3269 32.3269 18 50 18 Z M 50 25 C 36.1929 25 25 36.1929 25 50 C 25 63.8071 36.1929 75 50 75 C 63.8071 75 75 63.8071 75 50 C 75 36.1929 63.8071 25 50 25 Z M 50 33 C 59.3888 33 67 40.6112 67 50 C 67 59.3888 59.3888 67 50 67 C 40.6112 67 33 59.3888 33 50 C 33 40.6112 40.6112 33 50 33 Z" />
  </svg>
);


const navItems = [
  { href: '/', label: 'Home' },
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About' }, // Assuming you might add an about section later or link to a page
  { href: '#contact', label: 'Contact' }, // Assuming you might add a contact section later or link to a page
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Elegance Home">
          <ElegantLogo />
          <span className="text-2xl font-bold font-headline text-foreground">Elegance</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#shop">Shop Now</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="border-primary text-primary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-border">
              <div className="flex justify-start p-4">
                <Link href="/" className="flex items-center gap-2" aria-label="Elegance Home">
                  <ElegantLogo />
                  <span className="text-xl font-bold font-headline text-foreground">Elegance</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-6 pt-8 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  <Link href="#shop">Shop Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
