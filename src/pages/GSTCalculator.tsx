import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, RefreshCw } from "lucide-react";

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [calculationType, setCalculationType] = useState("exclusive");
  const [result, setResult] = useState<{
    originalAmount: number;
    gstAmount: number;
    totalAmount: number;
    cgst: number;
    sgst: number;
  } | null>(null);

  const calculateGST = () => {
    const amountNum = parseFloat(amount) || 0;
    const rate = parseFloat(gstRate) / 100;

    if (calculationType === "exclusive") {
      // GST Exclusive: Amount + GST
      const gstAmount = amountNum * rate;
      const totalAmount = amountNum + gstAmount;
      setResult({
        originalAmount: amountNum,
        gstAmount: gstAmount,
        totalAmount: totalAmount,
        cgst: gstAmount / 2,
        sgst: gstAmount / 2,
      });
    } else {
      // GST Inclusive: Extract GST from total
      const originalAmount = amountNum / (1 + rate);
      const gstAmount = amountNum - originalAmount;
      setResult({
        originalAmount: originalAmount,
        gstAmount: gstAmount,
        totalAmount: amountNum,
        cgst: gstAmount / 2,
        sgst: gstAmount / 2,
      });
    }
  };

  const resetCalculator = () => {
    setAmount("");
    setGstRate("18");
    setCalculationType("exclusive");
    setResult(null);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            GST Calculator
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Calculate GST quickly and accurately. Add or extract GST from any amount.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Calculate GST</h2>
                  <p className="text-sm text-muted-foreground">Enter amount and select GST rate</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Calculation Type */}
                <div className="space-y-2">
                  <Label>Calculation Type</Label>
                  <Select value={calculationType} onValueChange={setCalculationType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exclusive">Add GST (GST Exclusive)</SelectItem>
                      <SelectItem value="inclusive">Extract GST (GST Inclusive)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <Label>Amount (₹)</Label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>

                {/* GST Rate */}
                <div className="space-y-2">
                  <Label>GST Rate</Label>
                  <Select value={gstRate} onValueChange={setGstRate}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5%</SelectItem>
                      <SelectItem value="12">12%</SelectItem>
                      <SelectItem value="18">18%</SelectItem>
                      <SelectItem value="28">28%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button variant="hero" size="lg" className="flex-1" onClick={calculateGST}>
                    <Calculator className="h-5 w-5" />
                    Calculate
                  </Button>
                  <Button variant="outline" size="lg" onClick={resetCalculator}>
                    <RefreshCw className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Results */}
              {result && (
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 px-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Base Amount</span>
                      <span className="font-semibold text-foreground">{formatCurrency(result.originalAmount)}</span>
                    </div>
                    <div className="flex justify-between py-3 px-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">CGST ({parseFloat(gstRate) / 2}%)</span>
                      <span className="font-semibold text-foreground">{formatCurrency(result.cgst)}</span>
                    </div>
                    <div className="flex justify-between py-3 px-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">SGST ({parseFloat(gstRate) / 2}%)</span>
                      <span className="font-semibold text-foreground">{formatCurrency(result.sgst)}</span>
                    </div>
                    <div className="flex justify-between py-3 px-4 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Total GST ({gstRate}%)</span>
                      <span className="font-semibold text-accent">{formatCurrency(result.gstAmount)}</span>
                    </div>
                    <div className="flex justify-between py-4 px-4 bg-primary/10 rounded-lg">
                      <span className="font-medium text-foreground">Total Amount</span>
                      <span className="font-bold text-xl text-primary">{formatCurrency(result.totalAmount)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="mt-8 bg-card rounded-2xl p-6 card-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-4">About GST Rates</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground">5% GST:</strong> Essential goods like food items, transport services</p>
                <p><strong className="text-foreground">12% GST:</strong> Processed foods, computers, mobiles</p>
                <p><strong className="text-foreground">18% GST:</strong> Most services, electronics, capital goods</p>
                <p><strong className="text-foreground">28% GST:</strong> Luxury items, automobiles, tobacco</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GSTCalculator;
