import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  FileText, 
  Shield, 
  BookOpen, 
  RefreshCw, 
  Search,
  Calculator,
  PenTool,
  Utensils,
  Gift,
  FileCheck,
  AlertCircle,
  BarChart3,
  XCircle,
  Phone,
  ArrowRight
} from "lucide-react";

const services = [
  { 
    name: "Company Registration", 
    slug: "company-registration", 
    icon: Building2,
    desc: "Register your Pvt Ltd, LLP, OPC or Partnership firm with complete compliance support."
  },
  { 
    name: "GST Registration", 
    slug: "gst-registration", 
    icon: FileText,
    desc: "Get your GST number quickly with expert documentation and filing support."
  },
  { 
    name: "Trademark Registration", 
    slug: "trademark", 
    icon: Shield,
    desc: "Protect your brand identity with trademark registration and monitoring."
  },
  { 
    name: "Accounting & Book-keeping", 
    slug: "accounting-bookkeeping", 
    icon: BookOpen,
    desc: "Monthly bookkeeping, financial statements and audit-ready records."
  },
  { 
    name: "Accounts Reconciliation", 
    slug: "accounts-reconciliation", 
    icon: RefreshCw,
    desc: "Bank, sales, purchase and ledger reconciliation for accurate books."
  },
  { 
    name: "Company Name Search", 
    slug: "company-name-search", 
    icon: Search,
    desc: "Check name availability and compliance before registration."
  },
  { 
    name: "Corporate Tax", 
    slug: "corporate-tax", 
    icon: Calculator,
    desc: "Tax planning, compliance and filing for companies."
  },
  { 
    name: "Digital Signature Certificate", 
    slug: "dsc", 
    icon: PenTool,
    desc: "Class 3 DSC for GST, MCA filings, tenders and e-signatures."
  },
  { 
    name: "FSSAI License", 
    slug: "fssai", 
    icon: Utensils,
    desc: "Food license registration – Basic, State or Central FSSAI."
  },
  { 
    name: "Gift Deed", 
    slug: "gift-deed", 
    icon: Gift,
    desc: "Legal gift deed drafting, registration and stamp duty guidance."
  },
  { 
    name: "GST Filing", 
    slug: "gst-filing", 
    icon: FileCheck,
    desc: "Timely and accurate GST return filing with reconciliation checks."
  },
  { 
    name: "GST Notice Handling", 
    slug: "gst-notice-handling", 
    icon: AlertCircle,
    desc: "Expert analysis and response to GST notices within deadlines."
  },
  { 
    name: "GST Reconciliation", 
    slug: "gst-reconciliation", 
    icon: BarChart3,
    desc: "GSTR-1, 3B, 2B reconciliation to protect ITC claims."
  },
  { 
    name: "GST Cancellation & Revocation", 
    slug: "gst-cancellation-revocation", 
    icon: XCircle,
    desc: "Cancel or revive your GST registration with proper compliance."
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-800 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-services" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-services)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore our complete range of online legal, tax and compliance services. Choose the service you need and our team will call you within 24 hours.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in hover:-translate-y-3 border border-gray-100"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  Explore Service
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Gradient bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta-services" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-cta-services)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Contact us and our experts will help you with any legal, tax or compliance query.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/contact">
              <Phone className="h-5 w-5 mr-2" />
              Get Callback
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
