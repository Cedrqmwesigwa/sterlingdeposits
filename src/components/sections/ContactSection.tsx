import { ContactForm } from '@/components/ContactForm';
import ScrollAnimate from '@/components/ScrollAnimate';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            Get in Touch or Make a Deposit
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            Have questions or ready to start your project? Contact us today. We're here to help you with your contracting needs and deposit inquiries.
          </p>
        </ScrollAnimate>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ScrollAnimate delay="delay-150">
              <ContactForm />
            </ScrollAnimate>
          </div>
          <div className="lg:col-span-2">
            <ScrollAnimate delay="delay-300">
              <div className="p-8 bg-card rounded-lg shadow-xl h-full">
                <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">Direct Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Phone</h4>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">(555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <a href="mailto:deposits@sterlingcontractors.com" className="text-muted-foreground hover:text-primary transition-colors">deposits@sterlingcontractors.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Office Address</h4>
                      <p className="text-muted-foreground">123 Main Street, Anytown, USA 12345</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="font-medium text-foreground mb-2">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday - Sunday: By Appointment</p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
}
