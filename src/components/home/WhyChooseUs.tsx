import { Zap, Wallet, Building, Clock } from "lucide-react";
import whyTrustImg from "@/assets/images/why-trust.jpg";
import businessOwnerImg from "@/assets/images/business-owner.jpg";

const reasons = [
  {
    title: "Seamless and Efficient Processes",
    description: "Streamlined workflows ensure quick turnarounds without compromising on quality.",
    icon: Zap,
  },
  {
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden charges. Get the best value for professional services.",
    icon: Wallet,
  },
  {
    title: "One-Stop Solution",
    description: "All your legal, tax and compliance needs handled under one roof by experts.",
    icon: Building,
  },
  {
    title: "Prompt Assistance (24 hrs)",
    description: "Our team responds within 24 hours, ensuring your queries are resolved quickly.",
    icon: Clock,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose LedgerCrafter?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by businesses across India for reliable and efficient services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Image */}
          <div className="hidden lg:block">
            <img
              src={whyTrustImg}
              alt="Business partnership and trust"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Center Cards */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {reasons.slice(0, 2).map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card rounded-2xl p-6 card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <reason.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <img
              src={businessOwnerImg}
              alt="Happy business owner"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.slice(2).map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-6 card-shadow animate-fade-in flex items-start gap-4"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
