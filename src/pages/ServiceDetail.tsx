import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, CheckCircle, FileText, Clock, Shield, Star, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Import service images
import serviceCompanyImg from "@/assets/images/service-company-registration.jpg";
import serviceGstImg from "@/assets/images/service-gst-registration.jpg";
import serviceTrademarkImg from "@/assets/images/service-trademark.jpg";
import serviceAccountingImg from "@/assets/images/service-accounting.jpg";
import serviceDscImg from "@/assets/images/service-dsc.jpg";
import serviceFssaiImg from "@/assets/images/service-fssai.jpg";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  documents: string[];
  process: string[];
  faqs: { q: string; a: string }[];
  image?: string;
  benefits?: string[];
}> = {
  "company-registration": {
    title: "Company Registration",
    subtitle: "Register your business with complete legal compliance",
    description: "Register your Pvt Ltd, LLP, OPC or Partnership firm with expert support. We handle name approval, DSC, DIN and complete incorporation process.",
    image: serviceCompanyImg,
    overview: "Company registration is the legal process of incorporating your business as a separate legal entity. Whether you're starting a Private Limited Company, LLP, OPC or Partnership, we guide you through the entire process with expert documentation and filing support.",
    benefits: ["Separate legal identity for your business", "Limited liability protection", "Easy access to funding and credit", "Tax benefits and deductions", "Professional credibility"],
    documents: ["PAN Card of all directors/partners", "Aadhaar Card", "Passport size photographs", "Address proof (utility bill)", "Registered office address proof", "NOC from property owner"],
    process: ["Name reservation and approval", "DSC and DIN application", "Drafting MOA and AOA", "Filing incorporation documents", "Certificate of incorporation"],
    faqs: [
      { q: "How long does company registration take?", a: "Typically 7-10 working days after document submission." },
      { q: "What is the minimum capital required?", a: "There's no minimum capital requirement for Pvt Ltd companies." },
      { q: "How many directors are required?", a: "Minimum 2 directors for Pvt Ltd, 1 for OPC, 2 partners for LLP." },
    ],
  },
  "gst-registration": {
    title: "GST Registration",
    subtitle: "Get your GST number quickly and hassle-free",
    description: "Get your GST number quickly with expert documentation and filing support. We ensure accurate application and timely approval.",
    image: serviceGstImg,
    overview: "GST registration is mandatory for businesses with turnover above the threshold limit. We help you with document preparation, application filing and obtaining your GSTIN within the shortest possible time.",
    benefits: ["Legal compliance and authorization", "Claim Input Tax Credit (ITC)", "Business credibility and trust", "Reduce tax liability legally", "E-commerce platform eligibility"],
    documents: ["PAN Card of business/proprietor", "Aadhaar Card", "Business address proof", "Bank statement/cancelled cheque", "Photographs", "Constitution document"],
    process: ["Document verification", "Application preparation", "Filing on GST portal", "ARN generation", "GSTIN allotment"],
    faqs: [
      { q: "What is the turnover limit for GST?", a: "₹40 lakhs for goods, ₹20 lakhs for services (₹10 lakhs for special category states)." },
      { q: "How long does GST registration take?", a: "3-7 working days after successful application." },
      { q: "Can I register voluntarily?", a: "Yes, you can register even below threshold limits." },
    ],
  },
  "trademark": {
    title: "Trademark Registration",
    subtitle: "Protect your brand identity legally",
    description: "Protect your brand identity with trademark registration and monitoring. We handle search, filing and follow-up with the registry.",
    image: serviceTrademarkImg,
    overview: "Trademark registration protects your brand name, logo or slogan from unauthorized use. We conduct thorough search, prepare application and handle the complete registration process.",
    benefits: ["Exclusive brand ownership and rights", "Legal protection nationwide", "Brand value and reputation", "Prevent counterfeit products", "Franchise opportunity"],
    documents: ["Logo/brand name details", "Applicant identity proof", "Business proof", "Description of goods/services", "Power of Attorney"],
    process: ["Trademark search", "Application drafting", "Filing with registry", "Examination and objection handling", "Registration certificate"],
    faqs: [
      { q: "How long is trademark valid?", a: "10 years, renewable indefinitely." },
      { q: "Can I trademark my business name?", a: "Yes, if it's distinctive and not similar to existing marks." },
      { q: "What is trademark opposition?", a: "Third party objection during publication period." },
    ],
  },
  "dsc": {
    title: "Digital Signature Certificate",
    subtitle: "Class 3 DSC for all official filings",
    description: "Get DSC Class 3 quickly with a fully online process and expert support. We help you with documentation, application filing and smooth issuance.",
    image: serviceDscImg,
    overview: "Digital Signature Certificate (DSC) is the electronic equivalent of physical signature. Class 3 DSC is required for GST filings, MCA filings, e-tendering and other official processes.",
    benefits: ["Legal equivalent of handwritten signature", "Required for GST and MCA filings", "E-tender participation", "Secure document signing", "Instant online verification"],
    documents: ["PAN Card", "Aadhaar Card", "Passport size photograph", "Video verification"],
    process: ["Application form filling", "Document upload", "Video verification", "DSC generation", "Download and setup"],
    faqs: [
      { q: "How long is DSC valid?", a: "1-2 years depending on the plan chosen." },
      { q: "What is Class 3 DSC?", a: "Highest security DSC for legal and financial transactions." },
      { q: "Can I use DSC for GST?", a: "Yes, DSC is mandatory for companies and LLPs for GST filing." },
    ],
  },
  "fssai": {
    title: "FSSAI License",
    subtitle: "Food license for your food business",
    description: "Get the right FSSAI license—Basic, State or Central—based on your turnover and business type. Fast filing and secure approval support.",
    image: serviceFssaiImg,
    overview: "FSSAI license is mandatory for all food businesses in India. We help you identify the right license type, prepare documents and file application for quick approval.",
    benefits: ["Legal food business operation", "Consumer safety compliance", "Export market access", "Insurance eligibility", "Retail and e-commerce ready"],
    documents: ["Identity proof", "Business proof", "Address proof", "Food safety plan", "NOC from local authority", "List of food products"],
    process: ["Eligibility assessment", "Document preparation", "Application filing", "Inspection (if required)", "License issuance"],
    faqs: [
      { q: "Which license do I need?", a: "Basic for <₹12L turnover, State for ₹12L-20Cr, Central for >₹20Cr." },
      { q: "How long does it take?", a: "7-60 days depending on license type." },
      { q: "Is FSSAI mandatory for home kitchens?", a: "Yes, at least Basic registration is required." },
    ],
  },
  "gift-deed": {
    title: "Gift Deed",
    subtitle: "Legal transfer of property as gift",
    description: "Register your gift deed with correct clauses, documentation and legal compliance. We guide you through drafting, stamp duty and registration.",
    overview: "Gift deed is a legal document for voluntary transfer of property without consideration. We handle drafting, stamp duty calculation and registration process.",
    documents: ["Property documents", "Identity proof of donor and donee", "Relationship proof", "Property valuation", "Photographs"],
    process: ["Deed drafting", "Stamp duty payment", "Document execution", "Registration at sub-registrar", "Registered deed delivery"],
    faqs: [
      { q: "Is stamp duty required?", a: "Yes, varies by state and relationship." },
      { q: "Can gift deed be revoked?", a: "Only under specific conditions mentioned in the deed." },
      { q: "Is gift taxable?", a: "Gift from relatives is exempt; others may be taxable." },
    ],
  },
  "gst-filing": {
    title: "GST Filing",
    subtitle: "Accurate and timely GST return filing",
    description: "File your GST returns accurately and on time with expert assistance. We handle GSTR preparation, reconciliation and filing.",
    overview: "GST filing involves submitting periodic returns to the government. We ensure accurate preparation, proper reconciliation and timely filing to avoid penalties.",
    documents: ["Sales invoices", "Purchase invoices", "Credit/debit notes", "Bank statements", "Previous returns"],
    process: ["Data collection", "Invoice reconciliation", "Return preparation", "Review and verification", "Filing and acknowledgment"],
    faqs: [
      { q: "What returns need to be filed?", a: "GSTR-1 (sales), GSTR-3B (summary), annual return." },
      { q: "What's the penalty for late filing?", a: "₹50/day (₹20 for NIL return) up to maximum limit." },
      { q: "Can I revise GST returns?", a: "No revision allowed; corrections in subsequent returns." },
    ],
  },
  "gst-notice-handling": {
    title: "GST Notice Handling",
    subtitle: "Expert response to GST notices",
    description: "Received a GST notice? We analyze the notice, identify required documents and prepare a compliant reply within timelines.",
    overview: "GST notices can be for various reasons—mismatch, non-compliance or scrutiny. We analyze the notice, prepare proper response with supporting documents and file within deadlines.",
    documents: ["GST notice copy", "Related invoices", "Previous returns", "Bank statements", "Any correspondence"],
    process: ["Notice analysis", "Issue identification", "Response drafting", "Document compilation", "Filing and follow-up"],
    faqs: [
      { q: "What types of notices are common?", a: "Mismatch notices, show cause, demand notices, scrutiny." },
      { q: "What's the response timeline?", a: "Usually 15-30 days from notice date." },
      { q: "Can notices be challenged?", a: "Yes, through proper reply and appeal if needed." },
    ],
  },
  "gst-reconciliation": {
    title: "GST Reconciliation",
    subtitle: "Protect your ITC claims",
    description: "Keep your GST records clean with invoice-level reconciliation. We match GSTR-1, GSTR-3B, GSTR-2B with your books.",
    overview: "GST reconciliation ensures your books match with GST portal data. We perform detailed matching to identify discrepancies and protect your ITC claims.",
    documents: ["Sales register", "Purchase register", "GSTR-1, 3B, 2B data", "Credit/debit notes", "Payment records"],
    process: ["Data extraction", "Invoice matching", "Discrepancy identification", "Vendor communication", "Correction and filing"],
    faqs: [
      { q: "Why is reconciliation important?", a: "To claim correct ITC and avoid notices." },
      { q: "How often should I reconcile?", a: "Monthly for best results." },
      { q: "What if discrepancy is found?", a: "We help communicate with vendors and correct in returns." },
    ],
  },
  "gst-cancellation-revocation": {
    title: "GST Cancellation & Revocation",
    subtitle: "Cancel or revive your GSTIN",
    description: "Need to cancel GST registration or revive a cancelled GSTIN? We assist with eligibility, filing and documentation.",
    overview: "GST cancellation may be voluntary or by department. Revocation is possible within specified time. We handle both processes with proper compliance.",
    documents: ["GST certificate", "Identity proof", "Reason for cancellation/revocation", "Pending return details", "Any show cause notice"],
    process: ["Eligibility check", "Pending compliance", "Application filing", "Query response", "Cancellation/revocation order"],
    faqs: [
      { q: "When can I cancel GST?", a: "When turnover falls below threshold or business closure." },
      { q: "What's revocation deadline?", a: "30 days from cancellation order (extendable)." },
      { q: "Are pending returns required?", a: "Yes, all pending returns must be filed." },
    ],
  },
  "accounting-bookkeeping": {
    title: "Accounting & Book-keeping",
    subtitle: "Keep your books accurate and audit-ready",
    description: "Get accurate bookkeeping and monthly accounting support. We maintain records, organize invoices and keep accounts audit-ready.",
    image: serviceAccountingImg,
    overview: "Proper bookkeeping is essential for business success. We provide comprehensive accounting services including transaction recording, reconciliation and financial reporting.",
    benefits: ["Accurate financial records", "Tax compliance readiness", "Business insights and reports", "Audit trail maintenance", "Financial decision support"],
    documents: ["Bank statements", "Sales invoices", "Purchase bills", "Expense receipts", "Loan documents", "Previous records"],
    process: ["Data collection", "Transaction recording", "Bank reconciliation", "Monthly reports", "Year-end closing"],
    faqs: [
      { q: "What software do you use?", a: "Tally, QuickBooks, Zoho Books based on client preference." },
      { q: "How often will I get reports?", a: "Monthly P&L, Balance Sheet and cash flow." },
      { q: "Do you handle payroll?", a: "Yes, payroll processing is included in packages." },
    ],
  },
  "accounts-reconciliation": {
    title: "Accounts Reconciliation",
    subtitle: "Ensure accuracy in your financial records",
    description: "We reconcile your bank, sales, purchase and ledger accounts to ensure accuracy. Identify errors and mismatches before they become problems.",
    overview: "Account reconciliation ensures your internal records match with external statements. We perform detailed matching for banks, vendors, customers and inter-company accounts.",
    documents: ["Bank statements", "Ledger extracts", "Party statements", "Payment records", "Credit notes"],
    process: ["Statement collection", "Transaction matching", "Discrepancy identification", "Communication with parties", "Adjustment entries"],
    faqs: [
      { q: "What accounts need reconciliation?", a: "Bank, debtors, creditors, inter-company, loans." },
      { q: "How often should I reconcile?", a: "Monthly for bank, quarterly for party accounts." },
      { q: "What if major discrepancy found?", a: "We investigate cause and suggest corrective action." },
    ],
  },
  "company-name-search": {
    title: "Company Name Search",
    subtitle: "Check availability before registration",
    description: "Check name availability and avoid rejection. We help you shortlist compliant names and prepare for registration smoothly.",
    overview: "Company name search is the first step in registration. We search MCA database, check trademark conflicts and suggest compliant names for approval.",
    documents: ["Proposed name options", "Business activity details", "Promoter details"],
    process: ["Name brainstorming", "MCA search", "Trademark check", "Compliance review", "Final recommendation"],
    faqs: [
      { q: "How many names can I propose?", a: "Up to 6 names in order of preference." },
      { q: "What makes a name compliant?", a: "Unique, not misleading, follows MCA guidelines." },
      { q: "Can I reserve a name?", a: "Yes, name can be reserved for 20 days." },
    ],
  },
  "corporate-tax": {
    title: "Corporate Tax",
    subtitle: "Tax planning and compliance for companies",
    description: "Plan and manage corporate tax compliance with expert guidance. We help you reduce risk and handle filings properly.",
    overview: "Corporate tax involves complex calculations, exemptions and compliances. We provide strategic planning, accurate computation and timely filing to minimize tax liability legally.",
    documents: ["Financial statements", "Previous returns", "TDS certificates", "Investment proofs", "Audit reports"],
    process: ["Tax planning", "Computation preparation", "Exemption optimization", "Return filing", "Assessment support"],
    faqs: [
      { q: "What's the corporate tax rate?", a: "22% for domestic companies (25% for new manufacturing)." },
      { q: "When is corporate tax due?", a: "Advance tax quarterly; return by October 31." },
      { q: "Can you handle tax audits?", a: "Yes, complete audit and assessment support." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const service = servicesData[slug || ""] || {
    title: "Service Not Found",
    subtitle: "Please check the URL",
    description: "",
    overview: "",
    documents: [],
    process: [],
    faqs: [],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our expert will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", mobile: "", city: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-800 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-detail" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-detail)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-2xl text-blue-200 font-semibold mb-6">
                {service.subtitle}
              </p>
              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-2xl px-8 py-6 text-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <a href="#lead-form">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Started
                </a>
              </Button>
            </div>

            {/* Service Image */}
            {service.image && (
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-3xl blur-3xl" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {service.benefits && (
        <section className="py-20 bg-gradient-to-br from-background via-background to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose This Service?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Key benefits that will help your business grow and succeed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-foreground text-center">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Lead Form */}
            <div id="lead-form" className="bg-card rounded-2xl p-8 card-shadow">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get Expert Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <Phone className="h-5 w-5" />
                  Get Callback
                </Button>
              </form>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="overview" className="bg-card rounded-xl px-6 border-0 card-shadow">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    Overview
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {service.overview}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documents" className="bg-card rounded-xl px-6 border-0 card-shadow">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    Documents Required
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-2">
                    {service.documents.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="process" className="bg-card rounded-xl px-6 border-0 card-shadow">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    Process
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ol className="space-y-2">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faqs" className="bg-card rounded-xl px-6 border-0 card-shadow">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  FAQs
                </AccordionTrigger>
                <AccordionContent className="pb-5 space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i}>
                      <p className="font-medium text-foreground mb-1">{faq.q}</p>
                      <p className="text-muted-foreground text-sm">{faq.a}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-2xl p-6 card-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Our experts are available to answer your questions and guide you through the process.
              </p>
              <Button variant="hero" className="w-full mb-3" asChild>
                <Link to="/contact">
                  <Phone className="h-4 w-4" />
                  Talk to an Expert
                </Link>
              </Button>
              <Button variant="whatsapp" className="w-full" asChild>
                <a href="https://wa.me/918952008952" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
