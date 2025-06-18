
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import ScrollAnimate from '@/components/ScrollAnimate';
import { Card, CardContent } from '@/components/ui/card';

export default function ContractorInfo() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimate>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1707044353662-bbce055f9ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uc3xlbnwwfHx8fDE3NTAxODY2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Licensed Contractor Certificate"
                layout="fill"
                objectFit="cover"
                data-ai-hint="certificate document"
              />
            </div>
          </ScrollAnimate>
          <ScrollAnimate delay="delay-200">
            <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl mb-6">
              Licensed & Insured Professionals You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sterling Contractors is fully licensed (License #SC-12345) and insured, providing you with complete peace of mind for all your project needs. Our commitment to quality, transparency, and client satisfaction sets us apart in the industry.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Fully Licensed</h4>
                  <p className="text-sm text-muted-foreground">Operating with all required state and local licenses (License #SC-12345).</p>
                </div>
              </div>
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Comprehensively Insured</h4>
                  <p className="text-sm text-muted-foreground">Protecting your property and our team with full liability coverage.</p>
                </div>
              </div>
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Commitment to Excellence</h4>
                  <p className="text-sm text-muted-foreground">Dedicated to delivering high-quality workmanship and superior customer service.</p>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
