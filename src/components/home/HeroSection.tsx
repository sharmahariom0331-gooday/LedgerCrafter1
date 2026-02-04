import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const popularServices = [
  { name: "Company Registration", slug: "company-registration" },
  { name: "GST Registration", slug: "gst-registration" },
  { name: "Trademark", slug: "trademark" },
  { name: "Accounting & Compliance", slug: "accounting-bookkeeping" },
];

const allServices = [
  { name: "Accounting & Book-keeping", slug: "accounting-bookkeeping" },
  { name: "Accounting Packages", slug: "accounting-packages" },
  { name: "Accounts Reconciliation", slug: "accounts-reconciliation" },
  { name: "Company Name Search", slug: "company-name-search" },
  { name: "Corporate Tax", slug: "corporate-tax" },
  { name: "Digital Signature Certificate", slug: "dsc" },
  { name: "FSSAI Food License", slug: "fssai" },
  { name: "Gift Deed", slug: "gift-deed" },
  { name: "GST Cancellation & Revocation", slug: "gst-cancellation-revocation" },
  { name: "GST Filing", slug: "gst-filing" },
  { name: "GST Notice Handling", slug: "gst-notice-handling" },
  { name: "GST Reconciliation", slug: "gst-reconciliation" },
  { name: "GST Registration", slug: "gst-registration" },
  { name: "HSN Code Finder", slug: "hsn-code-finder" },
  { name: "Income Tax Assessment", slug: "income-tax-assessment" },
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
  { name: "Sole Proprietorship", slug: "sole-proprietorship" },
  { name: "TDS Compliance", slug: "tds-compliance" },
  { name: "TDS Return Filing", slug: "tds-return-filing" },
  { name: "Trademark", slug: "trademark" },
  { name: "Udyam Registration", slug: "udyam-registration" },
  { name: "Virtual CFO", slug: "virtual-cfo" },
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const filteredServices = allServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-24 lg:py-32 overflow-hidden">
      {/* Premium Background with pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-100 text-sm font-semibold mb-6 animate-fade-in backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            India's Trusted Legal & Tax Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight">
            Empowering India's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-cyan-200 font-semibold italic mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Supporting One Business Every Hour
          </p>

          <p className="text-cyan-100/80 text-lg md:text-xl mb-10 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.15s" }}>
            Professional legal, tax & compliance services for businesses across India
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10 animate-fade-in relative" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSearch} className="relative flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-300" />
                <Input
                  type="text"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full h-16 pl-14 pr-6 rounded-2xl border-2 border-cyan-400/30 bg-white/10 backdrop-blur-md text-white text-lg shadow-2xl focus:border-cyan-400 transition-all placeholder:text-white/50"
                />
              </div>
              <Button
                type="submit"
                className="h-16 px-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50"
              >
                Search
              </Button>
            </form>
            
            {/* Search Suggestions */}
            {showSuggestions && filteredServices.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-4 bg-slate-800/95 border border-cyan-400/20 rounded-2xl shadow-2xl z-50 max-h-80 overflow-y-auto animate-fade-in backdrop-blur-md">
                {filteredServices.slice(0, 8).map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-cyan-500/20 transition-colors text-left text-cyan-100 border-b border-cyan-400/10 last:border-0"
                    onClick={() => setShowSuggestions(false)}
                  >
                    <Search className="h-4 w-4 text-cyan-400" />
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Popular Services */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-cyan-200/70 font-semibold py-2">Popular:</span>
            {popularServices.map((service, idx) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/30 text-cyan-100 text-sm font-semibold hover:bg-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                style={{ animationDelay: `${0.35 + idx * 0.05}s` }}
              >
                {service.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 py-7 px-8"
              asChild
            >
              <Link to="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Talk to an Expert
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400/50 text-white hover:bg-cyan-500/20 hover:border-cyan-400 text-lg font-semibold shadow-lg transition-all duration-300 py-7 px-8"
              asChild
            >
              <Link to="/services">
                Explore Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
