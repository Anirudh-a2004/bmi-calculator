"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function BMICalculator() {
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = Number(height) / 100;
      const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
      setBmi(Number.parseFloat(bmiValue.toFixed(2)));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">BMI Calculator</h1>

      <div className="max-w-md mx-auto">
        <Card>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Enter height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : "")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : "")}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={calculateBMI} disabled={height === "" || weight === ""} className="w-full">
              Calculate BMI
            </Button>
          </CardFooter>
        </Card>

        {bmi && (
          <Card className="mt-6">
            <CardHeader></CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold">BMI: {bmi}</div>
                <div className="text-lg mt-2">Category: {category}</div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
