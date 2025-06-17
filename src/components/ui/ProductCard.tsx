import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col bg-card border-border/50 overflow-hidden h-full group transform transition-all duration-300 ease-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <div className="aspect-square w-full relative overflow-hidden">
          <Image
            src={product.imageSrc}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-out group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-grow flex flex-col">
        <CardTitle className="text-xl font-headline text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
        <p className="text-primary font-semibold text-lg mb-3">{product.price}</p>
        <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{product.shortDescription}</p>
      </CardContent>
      <CardFooter className="p-5 border-t border-border/30">
        <Button 
          variant="outline" 
          className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
          asChild
        >
          <Link href={`/shop/${product.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
