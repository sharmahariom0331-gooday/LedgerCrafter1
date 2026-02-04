import { Link } from "react-router-dom";

// Complete list of all services
const allServices = [
  { name: "About Us", slug: "about", isPage: true },
  { name: "Accounting and Book-keeping", slug: "accounting-bookkeeping" },
  { name: "Accounting Packages", slug: "accounting-packages" },
  { name: "Accounts Reconciliation", slug: "accounts-reconciliation" },
  { name: "Company Name Search", slug: "company-name-search" },
  { name: "Contact Us", slug: "contact", isPage: true },
  { name: "Corporate Tax", slug: "corporate-tax" },
  { name: "Digital Signature Certificate", slug: "dsc" },
  { name: "FSSAI [Food License]", slug: "fssai" },
  { name: "Gift Deed", slug: "gift-deed" },
  { name: "GST Calculator", slug: "gst-calculator", isPage: true },
  { name: "GST Cancellation and Revocation", slug: "gst-cancellation-revocation" },
  { name: "GST Filing", slug: "gst-filing" },
  { name: "GST Notice Handling", slug: "gst-notice-handling" },
  { name: "GST Reconciliation", slug: "gst-reconciliation" },
  { name: "GST Registration", slug: "gst-registration" },
  { name: "Home", slug: "", isPage: true },
  { name: "HSN Code Finder", slug: "hsn-code-finder" },
  { name: "Income Tax Assessment", slug: "income-tax-assessment" },
  { name: "Income Tax Calculator", slug: "income-tax-calculator" },
  { name: "Income Tax Notice", slug: "income-tax-notice" },
  { name: "Income Tax Return", slug: "income-tax-return" },
  { name: "Individual Income Tax Filing", slug: "individual-income-tax-filing" },
  { name: "ITR for LLP", slug: "itr-for-llp" },
  { name: "LEI [Legal Entity Identifier]", slug: "lei" },
  { name: "Limited Liability Partnership", slug: "llp-registration" },
  { name: "MSME Registration", slug: "msme-registration" },
  { name: "One Person Company", slug: "one-person-company" },
  { name: "Partnership Firm", slug: "partnership-firm" },
  { name: "Privacy Policy", slug: "privacy-policy", isPage: true },
  { name: "Private Limited Company", slug: "private-limited-company" },
  { name: "Proprietorship Tax Return Filing", slug: "proprietorship-tax-return" },
  { name: "Rental Agreement", slug: "rental-agreement" },
  { name: "Return & Refund Policy", slug: "refund-policy", isPage: true },
  { name: "Sale Deed", slug: "sale-deed" },
  { name: "Simple Compound Interest Calculator", slug: "compound-interest-calculator" },
  { name: "SIP Calculator", slug: "sip-calculator" },
  { name: "Sole Proprietorship", slug: "sole-proprietorship" },
  { name: "TDS Calculator", slug: "tds-calculator" },
  { name: "TDS Compliance", slug: "tds-compliance" },
  { name: "TDS Return Filing", slug: "tds-return-filing" },
  { name: "Terms & Conditions", slug: "terms-conditions", isPage: true },
  { name: "Trademark", slug: "trademark" },
  { name: "Udyam Registration", slug: "udyam-registration" },
  { name: "Virtual CFO", slug: "virtual-cfo" },
];

const ServicesGrid = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Links Grid - Like Reference Image */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center">
          {allServices.map((service, index) => (
            <Link
              key={service.slug + index}
              to={service.isPage ? `/${service.slug}` : `/services/${service.slug}`}
              className="text-primary hover:text-accent transition-colors text-sm md:text-base font-medium whitespace-nowrap"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
