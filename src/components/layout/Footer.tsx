import Link from 'next/link';
import { Building2, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Sterling Deposits Home">
              <Building2 className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold font-headline text-foreground">Sterling Deposits</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Secure your contracting projects with reliable services and transparent deposit handling.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>deposits@sterlingcontractors.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sterling Deposits. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
