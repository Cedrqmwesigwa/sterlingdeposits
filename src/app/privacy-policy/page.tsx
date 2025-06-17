
"use client"; // Mark as a client component

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicyPage = () => {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-muted-foreground">
            <p>
              Welcome to Sterling Contractors. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Information Collection</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and project details when you voluntarily submit it through our contact forms or when you communicate with us.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Use of Information</h2>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Respond to your inquiries and provide customer service.</li>
                <li>Provide, operate, and maintain our services.</li>
                <li>Process your requests for quotes or information about deposits.</li>
                <li>Improve our website and services.</li>
                <li>Communicate with you about promotions, new services, and other information we think you may find interesting (if you opt-in).</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
              <p>
                We reserve the right to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
              </p>
            </section>
            <p className="mt-8 text-sm">
              This policy is a placeholder and should be reviewed and updated by a legal professional to ensure compliance with all applicable laws and regulations.
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

export default PrivacyPolicyPage;
