import Link from 'next/link';

const ElegantLogoMini = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
    <path d="M50 10 C 27.9086 10 10 27.9086 10 50 C 10 72.0914 27.9086 90 50 90 C 72.0914 90 90 72.0914 90 50 C 90 27.9086 72.0914 10 50 10 Z M 50 18 C 67.6731 18 82 32.3269 82 50 C 82 67.6731 67.6731 82 50 82 C 32.3269 82 18 67.6731 18 50 C 18 32.3269 32.3269 18 50 18 Z M 50 25 C 36.1929 25 25 36.1929 25 50 C 25 63.8071 36.1929 75 50 75 C 63.8071 75 75 63.8071 75 50 C 75 36.1929 63.8071 25 50 25 Z M 50 33 C 59.3888 33 67 40.6112 67 50 C 67 59.3888 59.3888 67 50 67 C 40.6112 67 33 59.3888 33 50 C 33 40.6112 40.6112 33 50 33 Z" />
  </svg>
);


export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <ElegantLogoMini />
          <span className="text-xl font-bold font-headline text-foreground">Elegance</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          Discover timeless pieces and curated collections.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Elegance. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
