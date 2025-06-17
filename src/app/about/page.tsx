
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Users, Target } from 'lucide-react';

const SectionTitle = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{description}</p>
    </div>
);

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">About Sterling Contractors</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Building trust through quality craftsmanship and transparent partnerships in the heart of Uganda.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://placehold.co/800x600.png" 
                alt="Sterling Contractors team working"
                layout="fill"
                objectFit="cover"
                data-ai-hint="team working"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in Kampala, Sterling Contractors was born from a desire to bring reliability and excellence to the local hardware and construction industry. We saw a need for a contractor that not only delivers high-quality work but also operates with transparency and integrity, especially when handling client deposits.
              </p>
              <p className="text-muted-foreground">
                Our primary goal is to build a sustainable business that grows by building trust. We secure capital through deposits by ensuring every project is a testament to our commitment to quality and client satisfaction. We are proud to be a local business, with our roots in Kawempe and our operations reaching clients in Nakasero and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
            <SectionTitle title="Our Core Principles" description="These principles guide every project we undertake."/>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card>
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                            <Building className="h-8 w-8 text-primary"/>
                        </div>
                        <CardTitle className="mt-4">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To deliver superior construction and hardware solutions by building lasting relationships with our clients based on trust, transparency, and exceptional quality.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                            <Users className="h-8 w-8 text-primary"/>
                        </div>
                        <CardTitle className="mt-4">Our Team</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We are a dedicated team of professionals with deep roots in Kampala, committed to uplifting our community through reliable and beautiful construction work.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                            <Target className="h-8 w-8 text-primary"/>
                        </div>
                        <CardTitle className="mt-4">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To become Uganda's most trusted contractor, known for our unwavering commitment to client satisfaction, financial integrity, and project excellence.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20">
        <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
            <p className="text-muted-foreground mb-8">
                Let's build the future of Kampala together.
            </p>
            <Button asChild size="lg">
                <Link href="/#contact">Get a Free Quote</Link>
            </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
