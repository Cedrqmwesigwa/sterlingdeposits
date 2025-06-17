import { ProductCard } from '@/components/ui/ProductCard';
import type { Product } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';
import { ShoppingCart, Layers, LayoutGrid } from 'lucide-react'; // Using LayoutGrid for iron sheets

const products: Product[] = [
  {
    id: 'cement-bag',
    name: 'Cement (50kg Bag)',
    price: '42,000',
    unit: 'per bag',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'cement bag construction',
    icon: Layers,
  },
  {
    id: 'iron-sheets-gauge30',
    name: 'Iron Sheets (Gauge 30g)',
    price: '42,000',
    unit: 'per piece',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'roofing iron sheets',
    icon: LayoutGrid,
  },
  // Add more products here
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            Hardware Essentials
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            Quality materials for your construction projects. Inquire for bulk orders and delivery options.
          </p>
        </ScrollAnimate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollAnimate key={product.id} delay={`delay-${index * 100}`}>
              <ProductCard product={product} />
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
