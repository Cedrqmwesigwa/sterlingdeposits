import { ProductCard } from '@/components/ui/ProductCard';
import type { Product } from '@/types';
import ScrollAnimate from '@/components/ScrollAnimate';

const products: Product[] = [
  {
    id: 'elegant-watch-01',
    name: 'Timeless Chronograph',
    shortDescription: 'A masterpiece of precision and style, crafted for the discerning individual.',
    price: '$1,250.00',
    imageSrc: 'https://placehold.co/600x600.png',
    imageHint: 'luxury watch gold',
    category: 'Watches',
  },
  {
    id: 'silk-scarf-01',
    name: 'Azure Silk Scarf',
    shortDescription: 'Hand-finished pure silk, an embodiment of grace and sophistication.',
    price: '$275.00',
    imageSrc: 'https://placehold.co/600x600.png',
    imageHint: 'silk scarf blue',
    category: 'Accessories',
  },
  {
    id: 'leather-briefcase-01',
    name: 'Artisan Leather Briefcase',
    shortDescription: 'Italian leather, handcrafted for durability and timeless appeal.',
    price: '$890.00',
    imageSrc: 'https://placehold.co/600x600.png',
    imageHint: 'leather briefcase brown',
    category: 'Bags',
  },
   {
    id: 'gold-necklace-01',
    name: 'Seraphina Gold Necklace',
    shortDescription: 'Exquisite 18k gold pendant, a radiant touch of luxury.',
    price: '$1,500.00',
    imageSrc: 'https://placehold.co/600x600.png',
    imageHint: 'gold necklace jewelry',
    category: 'Jewelry',
  },
  {
    id: 'cashmere-throw-01',
    name: 'Luxe Cashmere Throw',
    shortDescription: 'Indulge in ultimate comfort with this sumptuously soft cashmere throw.',
    price: '$450.00',
    imageSrc: 'https://placehold.co/600x600.png',
    imageHint: 'cashmere throw blanket',
    category: 'Home',
  },
  {
    id: 'designer-sunglasses-01',
    name: 'Aura Designer Sunglasses',
    shortDescription: 'Iconic design meets modern flair, offering unparalleled UV protection.',
    price: '$320.00',
    imageSrc: 'https://placehold.co/600x600.png',
    imageHint: 'designer sunglasses fashion',
    category: 'Accessories',
  },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <h2 className="text-4xl font-bold font-headline text-center text-foreground sm:text-5xl mb-6">
            Curated <span className="text-primary">Collection</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            Explore our handpicked selection of items that embody quality, craftsmanship, and timeless elegance.
          </p>
        </ScrollAnimate>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
