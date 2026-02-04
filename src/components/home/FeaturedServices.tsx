import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, Briefcase, Calculator, Shield, Award } from "lucide-react";
import serviceCompanyImg from "@/assets/images/service-company-registration.jpg";
import serviceGstImg from "@/assets/images/service-gst-registration.jpg";
import serviceTrademarkImg from "@/assets/images/service-trademark.jpg";
import serviceAccountingImg from "@/assets/images/service-accounting.jpg";
import serviceDscImg from "@/assets/images/service-dsc.jpg";
import serviceFssaiImg from "@/assets/images/service-fssai.jpg";

const featuredServices = [
  {
    title: "Company Registration",
    description: "Register your Private Limited, LLP, OPC or Partnership firm with expert guidance",
    image: serviceCompanyImg,
    icon: Building2,
    slug: "company-registration",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "GST Registration",
    description: "Complete GST registration with documentation support and compliance setup",
    image: serviceGstImg,
    icon: FileText,
    slug: "gst-registration",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Trademark Registration",
    description: "Protect your brand identity with trademark registration and search services",
    image: serviceTrademarkImg,
    icon: Shield,
    slug: "trademark",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Professional accounting, reconciliation and financial reporting services",
    image: serviceAccountingImg,
    icon: Calculator,
    slug: "accounting-bookkeeping",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Digital Signature (DSC)",
    description: "Get Class 3 DSC for MCA filings, GST returns and e-tendering",
    image: serviceDscImg,
    icon: Award,
    slug: "dsc",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "FSSAI Food License",
    description: "Basic, State or Central FSSAI license based on your business requirements",
    image: serviceFssaiImg,
    icon: Briefcase,
    slug: "fssai",
    color: "from-rose-500 to-rose-600",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Our Popular Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert assistance for all your legal, tax and compliance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in hover:-translate-y-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base mb-5 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-base group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Gradient Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-2xl hover:-translate-y-1 text-lg"
          >
            View All Services
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
