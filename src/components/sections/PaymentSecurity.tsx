import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import ScrollAnimate from '@/components/ScrollAnimate';

export default function PaymentSecurity() {
  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "Verified Transactions",
      description: "All transactions are verified and monitored for your protection.",
      hint: "security shield"
    },
    {
      icon: Lock,
      title: "SSL Encryption",
      description: "Your data is protected with industry-standard SSL encryption.",
      hint: "secure lock"
    },
    {
      icon: CreditCard,
      title: "Secure Gateways",
      description: "We partner with leading payment gateways for secure processing.",
      hint: "payment card"
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
                  <feature.icon className="h-12 w-12 text-primary" aria-hidden="true" data-ai-hint={feature.hint}/>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-headline">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
         <ScrollAnimate delay="delay-300">
          <p className="text-center text-muted-foreground mt-12 text-sm">
            We partner with industry-leading payment gateways to ensure your deposits are handled securely and efficiently. Look for familiar logos during the payment process.
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
}
