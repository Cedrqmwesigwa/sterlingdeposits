'use server';
/**
 * @fileOverview A Genkit flow to handle sending a contact form submission as an email.
 *
 * - sendContactEmail - A function that simulates sending the contact email.
 * - ContactFormInput - The input type for the sendContactEmail function.
 * - ContactFormOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const ContactFormInputSchema = z.object({
  name: z.string().describe('The full name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  phone: z.string().optional().describe('The phone number of the person (optional).'),
  message: z.string().min(10).describe('The message content from the contact form.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  success: z.boolean().describe('Whether the email was sent successfully.'),
  message: z.string().describe('A message indicating the outcome.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function sendContactEmail(input: ContactFormInput): Promise<ContactFormOutput> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input: ContactFormInput): Promise<ContactFormOutput> => {
    console.log('Attempting to send contact email with data:', input);

    // In a real application, you would integrate with an email service here.
    // For example, using Nodemailer, SendGrid, Mailgun, or AWS SES.
    // const emailSent = await emailService.send({
    //   to: 'your-support-email@example.com',
    //   from: input.email, // Or a verified sender email
    //   subject: `New Contact Form Submission from ${input.name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${input.name}</p>
    //     <p><strong>Email:</strong> ${input.email}</p>
    //     ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ''}
    //     <p><strong>Message:</strong></p>
    //     <p>${input.message}</p>
    //   `,
    // });

    // Simulate email sending success/failure
    const simulateSuccess = Math.random() > 0.1; // 90% chance of success for simulation

    if (simulateSuccess) {
      console.log('Email sending simulated successfully.');
      return {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you shortly.',
      };
    } else {
      console.error('Email sending simulation failed.');
      return {
        success: false,
        message: 'There was an issue sending your message. Please try again later.',
      };
    }
  }
);
