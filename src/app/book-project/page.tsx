
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { DepositEstimatorForm } from '@/components/DepositEstimatorForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

const BookProjectPage = () => {
  return (
    <MainLayout>
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
                <Calculator className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Book Your Project & Estimate Deposit</h1>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              Ready to start your construction project with Sterling Contractors? Use our simple estimator below to get a preliminary idea of your project deposit.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Deposit Estimator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center mb-6">
                This tool provides a rough estimate. For an accurate quote and to discuss your project in detail, please contact us directly.
              </p>
              <DepositEstimatorForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default BookProjectPage;
