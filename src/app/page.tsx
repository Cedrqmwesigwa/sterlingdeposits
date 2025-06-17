import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import ShopSection from '@/components/sections/ShopSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ShopSection />
    </MainLayout>
  );
}
