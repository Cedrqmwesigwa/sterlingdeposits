
"use client"; // Mark as a client component

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfServicePage = () => {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-primary">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-muted-foreground">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Sterling Contractors website (the "Service") operated by Sterling Contractors ("us", "we", or "our").
            </p>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Conditions of Use</h2>
              <p>
                We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Privacy Policy</h2>
              <p>
                Before you continue using our website we advise you to read our <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a> regarding our user data collection. It will help you better understand our practices.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Deposits and Payments</h2>
              <p>
                Details regarding project deposits, payment schedules, and refund policies will be outlined in your specific project contract. Please review your contract thoroughly.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Communications</h2>
              <p>
                The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Applicable Law</h2>
              <p>
                By visiting this website, you agree that the laws of Uganda, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Sterling Contractors and you, or its business partners and associates.
              </p>
            </section>
             <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this site.
              </p>
            </section>
            <p className="mt-8 text-sm">
              These terms are placeholders and should be reviewed and updated by a legal professional to ensure they are comprehensive and compliant with all applicable laws and regulations.
            </p>
            {lastUpdated !== null ? (
              <p className="text-sm">Last updated: {lastUpdated}</p>
            ) : (
              <p className="text-sm">Loading date...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TermsOfServicePage;
