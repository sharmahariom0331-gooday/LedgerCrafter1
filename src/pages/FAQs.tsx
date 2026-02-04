import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    title: "Company Registration",
    icon: "🏢",
    faqs: [
      { q: "How long does company registration take?", a: "Company registration typically takes 7-10 working days once all documents are submitted. We handle the entire process including name approval, DSC, DIN and incorporation. The timeline may vary based on government processing and document accuracy." },
      { q: "What is the minimum capital required?", a: "There is no minimum paid-up capital requirement for Private Limited companies in India. You can start with any amount. However, we recommend considering your business needs and industry standards when deciding the authorized capital." },
      { q: "How many directors are required?", a: "Minimum 2 directors for Private Limited Company, 1 for One Person Company (OPC), and 2 designated partners for LLP. At least one director must be an Indian resident who has stayed in India for at least 182 days in the previous calendar year." },
      { q: "Can NRIs or foreigners be directors?", a: "Yes, NRIs and foreign nationals can be directors in an Indian company. However, at least one director must be an Indian resident. Foreign directors need to obtain DIN and may need additional documentation like apostilled documents and notarized copies." },
      { q: "What documents are needed for company registration?", a: "Key documents include PAN and Aadhaar of directors, passport-size photographs, address proof (utility bill), NOC from property owner, and rental agreement for registered office. For foreign nationals, passport copies and proof of address are required." },
    ],
  },
  {
    title: "GST Registration & Filing",
    icon: "📋",
    faqs: [
      { q: "What documents are required for GST registration?", a: "Required documents include PAN card, Aadhaar card, address proof of business premises, bank statement/cancelled cheque, and passport-size photographs. For companies, additional documents like incorporation certificate and board resolution are needed." },
      { q: "What is the turnover limit for GST registration?", a: "₹40 lakhs for goods (₹20 lakhs in special category states), ₹20 lakhs for services (₹10 lakhs in special category states). Voluntary registration is allowed below these limits and is recommended for businesses dealing with GST-registered suppliers." },
      { q: "What's the penalty for late GST filing?", a: "Late filing penalty is ₹50 per day for GSTR-3B (₹20 for NIL returns) with a maximum cap based on state or central GST. Interest at 18% p.a. on tax liability is also applicable. Continuous non-filing can lead to registration cancellation." },
      { q: "Can I cancel my GST registration?", a: "Yes, you can apply for cancellation if turnover falls below threshold, business closure, or change in business structure. All pending returns must be filed before cancellation. Suo moto cancelled registrations can be revoked within 30 days." },
      { q: "What is GST reconciliation and why is it important?", a: "GST reconciliation is matching your GSTR-1, GSTR-3B, and GSTR-2B/2A with your books. It's crucial for claiming correct Input Tax Credit (ITC), avoiding notices, and ensuring compliance. Mismatches can lead to ITC denial and penalties." },
      { q: "How often should I file GST returns?", a: "Regular taxpayers file GSTR-3B monthly (or quarterly under QRMP scheme) and GSTR-1 monthly/quarterly. Annual returns (GSTR-9) are filed once a year. Composition dealers file quarterly returns. Filing frequency depends on your registration type and turnover." },
    ],
  },
  {
    title: "Trademark & Legal",
    icon: "™️",
    faqs: [
      { q: "How long is trademark registration valid?", a: "Trademark registration is valid for 10 years from the date of application and can be renewed indefinitely for successive periods of 10 years each. Renewal application should be filed before expiry to avoid additional fees." },
      { q: "What can be trademarked?", a: "You can trademark brand names, logos, taglines, slogans, product names, and distinctive marks that identify your goods/services. The mark must be distinctive, not generic, and not similar to existing marks. Sound and color marks can also be registered." },
      { q: "How long does trademark registration take?", a: "The complete process takes 12-18 months if there's no opposition. However, you get protection from the application date. After examination (4-6 months), it's published in the Trademark Journal. If no opposition, registration certificate is issued." },
      { q: "What is trademark opposition?", a: "After publication in the Trademark Journal, any third party can file opposition within 4 months if they believe the mark infringes their rights or is confusingly similar. Both parties submit evidence, and the Registrar decides based on merits." },
      { q: "What is the difference between ™ and ®?", a: "™ (trademark) can be used as soon as you file an application - it indicates you're claiming rights. ® (registered) can only be used after your trademark is officially registered. Using ® without registration is an offense." },
    ],
  },
  {
    title: "Digital Signature & FSSAI",
    icon: "🔐",
    faqs: [
      { q: "What is Class 3 DSC and when is it needed?", a: "Class 3 DSC is the highest security digital signature, required for MCA filings, GST registration/returns, e-tendering, e-procurement, and other official electronic processes. It provides the highest level of assurance for online transactions." },
      { q: "How long is DSC valid?", a: "DSC validity ranges from 1 to 2 years depending on the plan chosen. It needs to be renewed before expiry. We recommend applying for renewal 2-3 weeks before expiry to ensure continuity of compliance activities." },
      { q: "Which FSSAI license do I need?", a: "Basic Registration for turnover up to ₹12 lakhs, State License for ₹12 lakhs to ₹20 crores, and Central License for above ₹20 crores. Manufacturing, export/import, and multi-state operations have specific requirements regardless of turnover." },
      { q: "Is FSSAI mandatory for home kitchens?", a: "Yes, at least Basic FSSAI registration is mandatory for all food businesses including home kitchens, cloud kitchens, tiffin services, and bakeries. It ensures food safety standards and builds customer trust. Operating without it can lead to penalties." },
      { q: "How long does FSSAI registration take?", a: "Basic registration takes 2-7 days. State and Central licenses take 30-60 days depending on documentation and inspection requirements. We help expedite the process with proper documentation and follow-up." },
    ],
  },
  {
    title: "Income Tax & TDS",
    icon: "💰",
    faqs: [
      { q: "Who needs to file Income Tax Returns?", a: "Individuals with income above ₹2.5 lakhs (₹3 lakhs for seniors, ₹5 lakhs for super seniors), all companies and firms regardless of income, and anyone with foreign assets or income. Filing is also required for claiming refunds or carrying forward losses." },
      { q: "What is TDS and when should it be deducted?", a: "Tax Deducted at Source (TDS) is advance tax collected at the source of income. It applies to salary, interest, rent, professional fees, contractor payments, and more. The deductor must deduct TDS, deposit it, and file quarterly returns." },
      { q: "What's the penalty for not filing TDS returns?", a: "Late filing fee is ₹200 per day until the return is filed, subject to a maximum of TDS amount. Interest at 1.5% per month is charged for late TDS deposit. Non-compliance can also lead to prosecution in serious cases." },
      { q: "Can you help with tax notices?", a: "Yes, we analyze tax notices (scrutiny, intimation, demand), prepare proper responses with supporting documents, and represent before authorities if needed. Early and proper response is crucial to resolve notices favorably." },
      { q: "What documents are needed for ITR filing?", a: "Form 16 (for salary), bank statements, investment proofs (80C, 80D, etc.), Form 26AS/AIS, property documents (if applicable), capital gains statements, and previous year ITR. Requirements vary based on income sources and ITR form applicable." },
    ],
  },
  {
    title: "Accounting & Bookkeeping",
    icon: "📊",
    faqs: [
      { q: "Do you provide monthly accounting services?", a: "Yes, we offer comprehensive monthly accounting and bookkeeping services including transaction recording, bank reconciliation, accounts payable/receivable management, and financial reports. Packages are customized based on transaction volume and complexity." },
      { q: "What's the difference between accounting and bookkeeping?", a: "Bookkeeping is recording daily financial transactions systematically. Accounting involves analyzing, interpreting, and summarizing bookkeeping data to prepare financial statements, tax returns, and provide insights for business decisions." },
      { q: "How can I keep my accounts audit-ready?", a: "Maintain organized records, reconcile accounts monthly, document all transactions with proper invoices, keep digital backups, ensure timely GST/TDS compliance, and prepare trial balance regularly. Our services ensure your books are always audit-ready." },
      { q: "Can you help with accounts reconciliation?", a: "Yes, we reconcile bank accounts, party ledgers, GST returns with books, and inter-company transactions. Regular reconciliation identifies errors, prevents fraud, and ensures accurate financial reporting." },
      { q: "What is Virtual CFO service?", a: "Virtual CFO provides strategic financial guidance without the cost of a full-time CFO. Services include financial planning, cash flow management, budgeting, investor readiness, MIS reporting, and decision support. Ideal for growing businesses that need expert financial leadership." },
    ],
  },
];

const FAQs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-slate-800 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-faq" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-faq)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mx-auto mb-8 animate-fade-in shadow-lg">
            <HelpCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight" style={{ animationDelay: "0.1s" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-orange-100/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Find quick answers to common questions about registrations, compliance, documents, timelines and processes.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <div className="flex items-center gap-5 mb-10 pb-6 border-b-2 border-gray-200">
                  <span className="text-5xl drop-shadow-lg">{category.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{category.title}</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-5">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`cat-${catIndex}-faq-${faqIndex}`}
                      className="bg-white rounded-2xl px-8 py-2 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-bold hover:no-underline py-6 text-foreground text-lg">
                        <span className="text-orange-600 mr-3">Q.</span>{faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-6 leading-relaxed text-base">
                        <span className="text-orange-600 font-bold">A.</span> {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta-faq" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-cta-faq)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in leading-tight">
              Still Have Questions?
            </h2>
            <p className="text-xl md:text-2xl text-orange-100/80 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our experts are ready to help. Contact us for personalized assistance with your specific queries.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Talk to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
