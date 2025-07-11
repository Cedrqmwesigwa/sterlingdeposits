
import { ProductCard } from '@/components/ui/ProductCard';
import type { Product } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';
import { Layers, LayoutGrid, Power, Droplets, DoorOpen } from 'lucide-react';

const products: Product[] = [
  {
    id: 'cement-bag',
    name: 'Cement (50kg Bag)',
    price: '32,000',
    unit: 'per bag',
    imageSrc: '/tororo cem 2.jpg',
    imageHint: 'cement bags',
    icon: Layers,
  },
  {
    id: 'iron-sheets-gauge30',
    name: 'Iron Sheets (Gauge 30g)',
    price: '42,000',
    unit: 'per piece',
    imageSrc: '/ironsheets red.jpg',
    imageHint: 'roofing sheets',
    icon: LayoutGrid,
  },
  {
    id: 'solar-pump-1500w',
    name: 'Solar Pump (1500W)',
    price: '1,890,000',
    unit: 'per unit',
    imageSrc: '/solar-pump.jpg',
    imageHint: 'solar water pump',
    icon: Power,
  },
  {
    id: 'pvc-gutters',
    name: 'PVC Rain Gutters',
    price: '25,000',
    unit: 'per meter',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'rain gutters',
    icon: Droplets,
  },
  {
    id: 'aluminium-door-std',
    name: 'Aluminium Door (Standard)',
    price: '350,000',
    unit: 'per door',
    imageSrc: '/aluminium-door.jpg',
    imageHint: 'aluminium door',
    icon: DoorOpen,
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
