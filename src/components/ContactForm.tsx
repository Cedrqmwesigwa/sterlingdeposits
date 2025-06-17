
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

// Schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus('success');
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        form.reset();
      } else {
        setStatus('error');
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setStatus('error');
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (status === 'success') {
    return (
        <div className="text-center p-8 bg-card rounded-lg shadow-xl flex flex-col items-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
            <p className="text-muted-foreground">We've received your inquiry and will be in touch soon.</p>
            <Button onClick={() => setStatus('idle')} className="mt-6">Send Another Message</Button>
        </div>
    )
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 bg-card rounded-lg shadow-xl">
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                    <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., Residential Construction Inquiry" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Message / Project Details</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        <Button 
            type="submit" 
            className="w-full text-lg" 
            disabled={status === 'loading'}
        >
            {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>
        {status === 'error' && (
            <div className="text-red-500 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4"/>
                <p>Something went wrong. Please check your details and try again.</p>
            </div>
        )}
        </form>
    </Form>
  );
}
