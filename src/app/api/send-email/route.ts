
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

// You will need to add your RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// Your business email where you'll receive the contact form submissions
const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'mctyptys@gmail.com'; 
// The email address that will be used to send the email, associated with your Resend domain
const fromEmail = 'onboarding@resend.dev'; // Replace with your verified Resend domain email

const sendEmailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(4, 'Subject must be at least 4 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = sendEmailSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input.', details: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `New Inquiry from ${name}: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (e) {
    console.error('An unexpected error occurred:', e);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
