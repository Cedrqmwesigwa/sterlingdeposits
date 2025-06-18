
import { ContactForm } from '@/components/ContactForm';
import ScrollAnimate from '@/components/ScrollAnimate';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const latitude = 0.310014;
  const longitude = 32.579385;
  const zoomLevel = 15;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoomLevel}&output=embed`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            Get in Touch or Make a Deposit
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            Have questions or ready to start your project in Kampala? Contact us today. We're here to help with your contracting needs and deposit inquiries.
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
              <div className="p-8 bg-background/50 rounded-lg shadow-xl h-full border border-border/30">
                <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">Direct Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Phone</h4>
                      <a href="tel:+256777123456" className="text-muted-foreground hover:text-primary transition-colors">+256 777 123456 (Kampala)</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <a href="mailto:mctyptys@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mctyptys@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">WhatsApp</h4>
                      <a 
                        href="https://wa.me/256777123456" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +256 777 123456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Office Address</h4>
                      <p className="text-muted-foreground">Nakasero, Entebbe Rd, Uganda</p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="font-medium text-foreground mb-2">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>

        <ScrollAnimate delay="delay-450">
          <div className="mt-16 rounded-lg overflow-hidden shadow-xl border border-border/30">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border:0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
