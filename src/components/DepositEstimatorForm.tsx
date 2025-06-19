
"use client";

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calculator, Info } from 'lucide-react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

const projectTypes = [
  { value: "residential_new_build", label: "Residential New Build", baseRate: 500000 },
  { value: "commercial_new_build", label: "Commercial New Build", baseRate: 700000 },
  { value: "major_renovation", label: "Major Renovation (Residential/Commercial)", baseRate: 350000 },
  { value: "minor_repairs_finishing", label: "Minor Repairs & Finishing", baseRate: 150000 },
  { value: "hardware_supply_consultation", label: "Hardware Supply & Consultation", baseRate: 0, fixedFee: 100000 }, // Fixed fee or specific logic
];

const materialQualities = [
  { value: "basic", label: "Basic Quality", multiplier: 0.9 },
  { value: "standard", label: "Standard Quality", multiplier: 1.0 },
  { value: "premium", label: "Premium Quality", multiplier: 1.2 },
];

const DEPOSIT_PERCENTAGE = 0.25; // 25%

const formSchema = z.object({
  projectType: z.string().min(1, "Please select a project type."),
  projectSize: z.coerce.number().min(1, "Project size must be at least 1 sqm.").optional(),
  materialQuality: z.string().min(1, "Please select material quality."),
}).refine(data => {
    const selectedType = projectTypes.find(pt => pt.value === data.projectType);
    // projectSize is required if the selected project type does not have a fixedFee
    return selectedType?.fixedFee ? true : !!data.projectSize;
}, {
    message: "Project size (sqm) is required for this project type.",
    path: ["projectSize"],
});

type FormData = z.infer<typeof formSchema>;

export function DepositEstimatorForm() {
  const [estimatedDeposit, setEstimatedDeposit] = useState<number | null>(null);
  const [calculationDetails, setCalculationDetails] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "",
      projectSize: undefined,
      materialQuality: "standard",
    },
  });

  const onSubmit = (values: FormData) => {
    const selectedProjectType = projectTypes.find(pt => pt.value === values.projectType);
    const selectedMaterialQuality = materialQualities.find(mq => mq.value === values.materialQuality);

    if (!selectedProjectType || !selectedMaterialQuality) {
      // Should not happen due to validation, but good for safety
      setEstimatedDeposit(null);
      setCalculationDetails("Error: Invalid project type or material quality selected.");
      return;
    }

    let totalEstimatedCost = 0;
    let details = "";

    if (selectedProjectType.fixedFee) {
      totalEstimatedCost = selectedProjectType.fixedFee;
      details = `Service Fee for ${selectedProjectType.label}: UGX ${totalEstimatedCost.toLocaleString()}`;
    } else if (values.projectSize) {
      const baseCost = selectedProjectType.baseRate * values.projectSize;
      totalEstimatedCost = baseCost * selectedMaterialQuality.multiplier;
      details = `Base Cost (${selectedProjectType.label} @ UGX ${selectedProjectType.baseRate.toLocaleString()}/sqm for ${values.projectSize} sqm): UGX ${baseCost.toLocaleString()}\nMaterial Quality (${selectedMaterialQuality.label} x${selectedMaterialQuality.multiplier}): UGX ${totalEstimatedCost.toLocaleString()}`;
    } else {
        setEstimatedDeposit(null);
        setCalculationDetails("Error: Project size is required for this calculation.");
        return;
    }
    
    const depositAmount = totalEstimatedCost * DEPOSIT_PERCENTAGE;
    setEstimatedDeposit(depositAmount);
    setCalculationDetails(`${details}\nEstimated Total Project Cost: UGX ${totalEstimatedCost.toLocaleString()}\nDeposit (25%): UGX ${depositAmount.toLocaleString()}`);
  };

  const selectedProjectTypeValue = form.watch("projectType");
  const showProjectSize = projectTypes.find(pt => pt.value === selectedProjectTypeValue)?.fixedFee === undefined;


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {projectTypes.map(pt => (
                    <SelectItem key={pt.value} value={pt.value}>
                      {pt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {showProjectSize && (
            <FormField
            control={form.control}
            name="projectSize"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Estimated Project Size (Square Meters)</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="e.g., 100" {...field} onChange={e => field.onChange(parseFloat(e.target.value) || undefined)} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        )}

        <FormField
          control={form.control}
          name="materialQuality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Material Quality Preference</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material quality" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {materialQualities.map(mq => (
                    <SelectItem key={mq.value} value={mq.value}>
                      {mq.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full text-lg py-3" size="lg">
          <Calculator className="mr-2 h-5 w-5" /> Estimate Deposit
        </Button>
      </form>

      {estimatedDeposit !== null && (
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-xl font-semibold text-center text-primary mb-4">Estimation Result</h3>
          <Card className="bg-muted/50 p-6 shadow-inner">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Estimated Deposit Required:</p>
              <p className="text-3xl font-bold text-primary my-2">
                UGX {estimatedDeposit.toLocaleString()}
              </p>
            </div>
            {calculationDetails && (
              <div className="mt-4 text-xs text-muted-foreground space-y-1 whitespace-pre-wrap text-center">
                <p className="font-medium mb-1">Calculation Breakdown:</p>
                {calculationDetails.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
              </div>
            )}
            <Separator className="my-4" />
            <div className="flex items-start text-sm text-muted-foreground bg-background p-3 rounded-md border border-border/30">
                <Info className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                    This is a preliminary estimate based on average costs and the information you provided. The actual deposit and project cost may vary.
                    Please <a href="/#contact" className="text-primary hover:underline font-medium">contact us</a> for a detailed consultation and an accurate quotation.
                </div>
            </div>
          </Card>
        </div>
      )}
    </Form>
  );
}
