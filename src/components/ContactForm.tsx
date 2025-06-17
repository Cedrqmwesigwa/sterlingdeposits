"use client";
import { useState, type FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast({
        title: "Terms Agreement Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    
    // Simulate API call for form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", { name, email, phone, message }); // Replace with actual submission logic
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setAgreedToTerms(false);
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 bg-background border-border placeholder:text-muted-foreground focus:ring-primary"
            placeholder="John Doe"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 bg-background border-border placeholder:text-muted-foreground focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="phone" className="text-foreground/90">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 bg-background border-border placeholder:text-muted-foreground focus:ring-primary"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground/90">Message / Project Details</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="mt-1 bg-background border-border placeholder:text-muted-foreground focus:ring-primary"
          placeholder="Tell us about your project, service interest, or inquiry..."
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox 
            id="terms" 
            checked={agreedToTerms} 
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            aria-labelledby="terms-label"
        />
        <Label htmlFor="terms" id="terms-label" className="text-sm text-muted-foreground cursor-pointer">
          I agree to the <a href="#" className="underline text-primary hover:text-primary/80">terms and conditions</a>.
        </Label>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3" 
        disabled={submitting || !agreedToTerms}
        aria-live="polite"
      >
        {submitting ? 'Sending...' : 'Send Message & Inquire Deposit'}
      </Button>
    </form>
  );
}
