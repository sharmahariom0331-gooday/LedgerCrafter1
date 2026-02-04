import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Header.css";

// All services for mega dropdown (only services, not pages)
const allServices = [
  { name: "Accounting & Book-keeping", slug: "accounting-bookkeeping" },
  { name: "Accounting Packages", slug: "accounting-packages" },
  { name: "Accounts Reconciliation", slug: "accounts-reconciliation" },
  { name: "Company Name Search", slug: "company-name-search" },
  { name: "Corporate Tax", slug: "corporate-tax" },
  { name: "Digital Signature Certificate", slug: "dsc" },
  { name: "FSSAI Food License", slug: "fssai" },
  { name: "Gift Deed", slug: "gift-deed" },
  { name: "GST Calculator", slug: "gst-calculator", isCalculator: true },
  { name: "GST Cancellation & Revocation", slug: "gst-cancellation-revocation" },
  { name: "GST Filing", slug: "gst-filing" },
  { name: "GST Notice Handling", slug: "gst-notice-handling" },
  { name: "GST Reconciliation", slug: "gst-reconciliation" },
  { name: "GST Registration", slug: "gst-registration" },
  { name: "HSN Code Finder", slug: "hsn-code-finder" },
  { name: "Income Tax Assessment", slug: "income-tax-assessment" },
  { name: "Income Tax Calculator", slug: "income-tax-calculator" },
  { name: "Income Tax Notice", slug: "income-tax-notice" },
  { name: "Income Tax Return", slug: "income-tax-return" },
  { name: "Individual Income Tax Filing", slug: "individual-income-tax-filing" },
  { name: "ITR for LLP", slug: "itr-llp" },
  { name: "LEI Registration", slug: "lei-registration" },
  { name: "Limited Liability Partnership", slug: "llp-registration" },
  { name: "MSME Registration", slug: "msme-registration" },
  { name: "One Person Company", slug: "one-person-company" },
  { name: "Partnership Firm", slug: "partnership-firm" },
  { name: "Private Limited Company", slug: "private-limited-company" },
  { name: "Proprietorship Tax Filing", slug: "proprietorship-tax-filing" },
  { name: "Rental Agreement", slug: "rental-agreement" },
  { name: "Sale Deed", slug: "sale-deed" },
  { name: "SIP Calculator", slug: "sip-calculator" },
  { name: "Sole Proprietorship", slug: "sole-proprietorship" },
  { name: "TDS Calculator", slug: "tds-calculator" },
  { name: "TDS Compliance", slug: "tds-compliance" },
  { name: "TDS Return Filing", slug: "tds-return-filing" },
  { name: "Trademark", slug: "trademark" },
  { name: "Udyam Registration", slug: "udyam-registration" },
  { name: "Virtual CFO", slug: "virtual-cfo" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(43,90%,50%)] to-[hsl(38,85%,40%)] shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-xl font-bold text-white">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[hsl(43,90%,50%)] to-[hsl(38,85%,40%)] bg-clip-text text-transparent">
              LedgerCrafter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive("/")
                  ? "active text-primary"
                  : "text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`services-btn flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                  servicesOpen ? "text-primary" : "text-foreground"
                }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 chevron-rotate ${servicesOpen ? "open" : ""}`} />
              </button>

              {/* Mega Dropdown Menu */}
              <div
                className={`mega-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden ${
                  servicesOpen
                    ? "open"
                    : "closed"
                }`}
              >
                <div className="p-6 bg-gradient-to-br from-card to-card/95">
                  <div className="grid grid-cols-3 gap-3">
                    {allServices.map((service) => (
                      <Link
                        key={service.slug}
                        to={service.isCalculator ? `/${service.slug}` : `/services/${service.slug}`}
                        className="service-item px-4 py-3 text-sm text-foreground rounded-lg transition-all duration-300"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services <span className="transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/blog"
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive("/blog")
                  ? "active text-primary"
                  : "text-foreground"
              }`}
            >
              Blog
            </Link>

            <Link
              to="/about"
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive("/about")
                  ? "active text-primary"
                  : "text-foreground"
              }`}
            >
              About
            </Link>

            <Link
              to="/faqs"
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive("/faqs")
                  ? "active text-primary"
                  : "text-foreground"
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className={`nav-link px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive("/contact")
                  ? "active text-primary"
                  : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="hero"
              size="default"
              asChild
              className="cta-button shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              <Link to="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Talk to an Expert
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mobile-nav py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive("/") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="px-4 py-3 rounded-lg text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive("/blog") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive("/about") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/faqs"
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive("/faqs") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive("/contact") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 px-4">
                <Button variant="hero" className="w-full font-semibold" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
