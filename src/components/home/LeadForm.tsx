import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    toast({
      title: "Request Submitted!",
      description: "Our expert will contact you within 24 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 hero-gradient">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Get Expert Consultation
                  </h2>
                  <p className="text-muted-foreground">
                    Fill the form and our expert will call you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                    <Input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                    <Input
                      type="text"
                      name="city"
                      placeholder="City / Pincode"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Phone className="h-5 w-5" />
                    Get Callback
                  </Button>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  By submitting, you agree to our Terms & Privacy Policy
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your request has been submitted successfully. Our expert will contact you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", mobile: "", city: "" });
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
