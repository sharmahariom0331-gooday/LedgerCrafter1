import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      {/* Hero with Background Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-rose-900 to-slate-800" />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-contact" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-contact)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mx-auto mb-8 animate-fade-in shadow-lg">
            <MessageSquare className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight" style={{ animationDelay: "0.1s" }}>
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-rose-100/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Need help with legal, tax or compliance? Fill the form and our team will contact you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-background via-background to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form - Larger */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in border border-gray-200">
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Send us a Message</h2>
                  <p className="text-gray-600 mb-10 text-lg">We'll respond within 24 hours</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-3">Full Name *</label>
                        <Input
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-14 rounded-xl border-2 border-gray-200 focus:border-red-500 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-3">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-14 rounded-xl border-2 border-gray-200 focus:border-red-500 font-medium"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-3">Phone Number *</label>
                        <Input
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="h-14 rounded-xl border-2 border-gray-200 focus:border-red-500 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-3">Subject *</label>
                        <Input
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="h-14 rounded-xl border-2 border-gray-200 focus:border-red-500 font-medium"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3">Your Message *</label>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="rounded-xl border-2 border-gray-200 focus:border-red-500 font-medium"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-8 animate-fade-in shadow-lg">
                    <CheckCircle className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>Thank You!</h3>
                  <p className="text-lg text-gray-600 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="animate-fade-in border-2 text-lg"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-10 shadow-lg border border-red-100">
                <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Office Address</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>LedgerCrafter</strong><br />
                        1st Floor, 34, New Anaj Mandi,<br />
                        Mal Godam Road, Rohtak – 124001,<br />
                        Haryana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Phone</h3>
                      <a href="tel:+918952008952" className="text-lg text-red-600 hover:text-red-700 font-bold transition-colors">
                        +91 8952-00-8952
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Email</h3>
                      <a href="mailto:ledgercrafter@gmail.com" className="text-lg text-red-600 hover:text-red-700 font-bold transition-colors">
                        ledgercrafter@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday – Friday: 10 AM – 6 PM<br />
                        Saturday: 11 AM – 4 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="p-8 border-b-2 border-gray-100 bg-gradient-to-r from-red-50 to-rose-50">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  Find Us on Map
                </h3>
              </div>
              <div className="h-[450px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.8676583247473!2d76.60461661505837!3d28.89384938232881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d84f89c6ae5c7%3A0x4f8f8f8f8f8f8f8f!2sNew%20Anaj%20Mandi%2C%20Rohtak%2C%20Haryana%20124001!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LedgerCrafter Office Location"
                  className="hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
