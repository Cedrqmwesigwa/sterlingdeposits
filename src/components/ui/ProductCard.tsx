import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const IconComponent = product.icon;
  return (
    <Card className="flex flex-col bg-card border-border/50 overflow-hidden h-full group transform transition-all duration-300 ease-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <div className="aspect-[4/3] w-full relative overflow-hidden">
          <Image
            src={product.imageSrc}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-out group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          {IconComponent && <IconComponent className="h-6 w-6 mr-3 text-primary flex-shrink-0" />}
          <CardTitle className="text-xl font-headline text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </div>
        <p className="text-2xl font-semibold text-primary mb-1">UGX {product.price}</p>
        {product.unit && <p className="text-sm text-muted-foreground mb-4">{product.unit}</p>}
        
      </CardContent>
      <CardFooter className="p-5 border-t border-border/30">
        <Button 
          variant="outline" 
          className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
          asChild
        >
          <Link href="#contact">
            Inquire Now <ShoppingCart className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
