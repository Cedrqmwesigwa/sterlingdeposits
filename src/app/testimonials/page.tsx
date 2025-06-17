
import React from 'react';
import Image from 'next/image'; // Added import for Next.js Image component
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const TestimonialsPage = () => {
  // In a real application, you would fetch testimonials from a data source
  const testimonials = [
    {
      quote: "Sterling Contractors delivered exceptional work on our home renovation. Their transparency with the deposit and project progress built immense trust. Highly recommended!",
      author: "Satisfied Client, Kampala",
      imageSrc: "https://placehold.co/400x300.png",
      imageHint: "abstract modern"
    },
    {
      quote: "Working with Sterling Contractors was a smooth experience. The upfront deposit was clearly explained and used efficiently for materials. The quality of the finished project exceeded our expectations.",
      author: "Happy Homeowner",
      imageSrc: "https://placehold.co/400x300.png",
      imageHint: "construction detail"
    },
    {
      quote: "We were initially hesitant about paying a deposit, but Sterling Contractors' clear communication and consistent updates made us feel confident. They proved to be reliable and professional.",
      author: "Client Name Here",
      imageSrc: "https://placehold.co/400x300.png",
      imageHint: "building partnership"
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center text-primary">Client Testimonials</CardTitle>
            <p className="text-center text-muted-foreground mt-2">What our valued clients say about their experience with Sterling Contractors.</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border/30 flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="relative w-full sm:w-1/3 h-48 sm:h-auto sm:aspect-square mb-4 sm:mb-0 overflow-hidden rounded-md shadow-inner">
                    <Image
                      src={testimonial.imageSrc}
                      alt={`Visual representation for testimonial by ${testimonial.author}`}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={testimonial.imageHint}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground italic text-base md:text-lg mb-4">"{testimonial.quote}"</p>
                    <p className="text-foreground font-semibold text-right">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center border-t border-border/50 pt-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Building Trust Through Transparency</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                At Sterling Contractors, we understand that trust is paramount, especially when it comes to project deposits. We are committed to clear communication and demonstrating how your deposit is used to kickstart your project and ensure its success. Our clients' positive experiences reflect our dedication to quality and reliability.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TestimonialsPage;
