
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import ScrollAnimate from '@/components/ScrollAnimate';
import Image from 'next/image'; // Added import for Next.js Image component

export default function PaymentSecurity() {
  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "Verified Transactions",
      description: "All transactions are verified and monitored for your protection.",
    },
    {
      icon: Lock,
      title: "SSL Encryption",
      description: "Your data is protected with industry-standard SSL encryption.",
    },
    {
      icon: CreditCard,
      title: "Secure Gateways",
      description: "We partner with leading payment gateways for secure processing.",
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimate>
          <h2 className="text-3xl font-bold font-headline text-center text-foreground sm:text-4xl mb-4">
            Your Deposits, Secured
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 lg:mb-16 text-lg">
            We prioritize the security of your financial information. Our platform uses advanced security measures to ensure your deposits are safe.
          </p>
        </ScrollAnimate>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {securityFeatures.map((feature, index) => (
            <ScrollAnimate key={feature.title} delay={`delay-${index * 150}`}>
              <div className="p-6 rounded-lg ">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-headline">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
         <ScrollAnimate delay="delay-300">
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              We partner with industry-leading payment gateways to ensure your deposits are handled securely and efficiently. Look for familiar logos during the payment process.
            </p>
            <div className="flex justify-center items-center gap-6 mt-6">
              <Image 
                src="https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8YmFuayUyMGljb258ZW58MHx8fHwxNzUwMjQ2NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Visa Logo" 
                width={100} 
                height={60} 
                data-ai-hint="visa logo" 
                className="object-contain"
              />
              <Image 
                src="https://images.unsplash.com/photo-1603777953662-5310c93eeb1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8Y2FzaHxlbnwwfHx8fDE3NTAyNDY0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Mastercard Logo" 
                width={100} 
                height={60} 
                data-ai-hint="mastercard logo" 
                className="object-contain"
              />
              <Image 
                src="https://images.unsplash.com/photo-1639133694967-640f255f10fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtYXN0ZXJjYXJkfGVufDB8fHx8MTc1MDI0NjUwMXww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Mobile Money Logo" 
                width={100} 
                height={60} 
                data-ai-hint="mobile money" 
                className="object-contain"
              />
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
