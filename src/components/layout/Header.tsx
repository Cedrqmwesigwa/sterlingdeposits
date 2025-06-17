import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Sterling Contractors Home">
          <Image src="/sterling logo.jpg" alt="Sterling Contractors Logo" width={32} height={32} className="rounded-full object-cover" />
          <span className="text-2xl font-bold font-headline text-foreground">Sterling Contractors</span>
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
          <Button asChild size="lg">
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-border">
              <div className="flex justify-start p-4">
                <Link href="/" className="flex items-center gap-2" aria-label="Sterling Contractors Home">
                  <Image src="/sterling logo.jpg" alt="Sterling Contractors Logo" width={32} height={32} className="rounded-full object-cover" />
                  <span className="text-xl font-bold font-headline text-foreground">Sterling Contractors</span>
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
                <Button asChild className="mt-4" size="lg">
                  <Link href="/#contact">Get Quote</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
