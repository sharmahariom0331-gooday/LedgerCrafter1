import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import legalServicesImg from "@/assets/images/legal-services.jpg";
import taxServicesImg from "@/assets/images/tax-services.jpg";
import complianceServicesImg from "@/assets/images/compliance-services.jpg";

const categories = [
  {
    title: "Legal Services",
    description: "Company registration, trademark, contracts and legal documentation for your business.",
    image: legalServicesImg,
    link: "/services?category=legal",
  },
  {
    title: "Tax Services",
    description: "GST registration, filing, corporate tax planning and compliance support.",
    image: taxServicesImg,
    link: "/services?category=tax",
  },
  {
    title: "Compliance",
    description: "Accounting, bookkeeping, audits and regulatory compliance for smooth operations.",
    image: complianceServicesImg,
    link: "/services?category=compliance",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your legal, tax and compliance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.link}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
