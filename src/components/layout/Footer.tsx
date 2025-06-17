import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Image src="/sterling logo.jpg" alt="Sterling Contractors Logo" width={24} height={24} className="rounded-full" />
          <span className="text-xl font-bold font-headline text-foreground">Sterling Contractors</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          Quality construction and hardware solutions. Kampala, Uganda.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Sterling Contractors. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
