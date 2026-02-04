import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Shield, Phone, Target, Eye, Heart, Zap, Clock, ThumbsUp } from "lucide-react";
import aboutOfficeImg from "@/assets/images/about-office.jpg";
import teamProfessionalsImg from "@/assets/images/team-professionals.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-slate-800 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-about" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-about)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight">
            About LedgerCrafter
          </h1>
          <p className="text-xl md:text-2xl text-teal-100/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Empowering businesses with seamless legal, tax and compliance solutions
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-5 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-bold mb-6 uppercase tracking-wide">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Welcome to LedgerCrafter.in
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                LedgerCrafter.in is built to simplify finance, tax and legal compliance for individuals and businesses. Based in Rohtak, Haryana, we deliver professional support with transparency and speed. Our experts help you stay compliant while you focus on growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We understand that navigating the complex landscape of legal and tax compliance can be overwhelming for businesses. That's why we've created a platform that combines expertise, technology, and personalized service to make the process seamless and stress-free.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a startup founder, an established business owner, or an individual taxpayer, we're here to guide you through every step of your compliance journey with clarity and confidence.
              </p>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-500/30 to-green-500/30 rounded-3xl blur-3xl" />
              <img
                src={aboutOfficeImg}
                alt="LedgerCrafter Office"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl animate-fade-in hover:-translate-y-3 transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-5">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower businesses and individuals by simplifying compliance processes, providing expert guidance, and delivering exceptional value through transparent and efficient services.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl animate-fade-in hover:-translate-y-3 transition-all duration-300 border border-teal-100" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-5">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become India's most trusted platform for legal, tax, and compliance services. We envision a future where every business has access to professional-grade compliance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across all aspects of business compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: CheckCircle, title: "Accounting & Audit", desc: "Comprehensive bookkeeping, financial reporting, reconciliation and audit support", color: "from-blue-600 to-blue-500" },
              { icon: Zap, title: "Tax Services", desc: "GST registration, filing, income tax, TDS compliance and corporate tax planning", color: "from-emerald-600 to-emerald-500" },
              { icon: Users, title: "Corporate Secretarial", desc: "Company registration, LLP formation, annual filings and ROC compliance", color: "from-purple-600 to-purple-500" },
              { icon: Shield, title: "Legal Advisory", desc: "Trademark registration, contracts drafting and legal documentation services", color: "from-orange-600 to-orange-500" },
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover:-translate-y-3 group border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={teamProfessionalsImg}
                alt="LedgerCrafter Team"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6 uppercase tracking-wide">
                Meet Our Experts
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">Our Team</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Led by qualified Chartered Accountants (CA) and Company Secretaries (CS), our team brings together expertise across finance, tax, legal and compliance domains. With years of combined experience, we've helped thousands of businesses navigate complex regulatory requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every team member is committed to delivering accurate, timely and personalized solutions. We believe in building long-term relationships with our clients based on trust, transparency and exceptional service quality.
              </p>
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <span className="text-foreground font-semibold">Certified Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <span className="text-foreground font-semibold">Industry Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <span className="text-foreground font-semibold">Client-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose LedgerCrafter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart from the rest
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "Expert Team", desc: "Qualified CAs and CSs with deep domain expertise and years of hands-on experience" },
              { icon: Heart, title: "Client-Centric", desc: "Personalized solutions tailored to your specific business needs" },
              { icon: Shield, title: "Ethical Standards", desc: "Complete transparency, honesty and integrity in every interaction" },
              { icon: Clock, title: "Timely Delivery", desc: "Prompt responses and on-time completion of all work" },
              { icon: ThumbsUp, title: "Competitive Pricing", desc: "Fair, transparent prices with no hidden charges" },
              { icon: Zap, title: "Technology-Enabled", desc: "Modern tools that make compliance faster and easier" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in hover:-translate-y-3 group border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-cta)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-teal-100/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Connect with us today to set your financials right! Our experts are ready to help.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/contact">
              <Phone className="h-5 w-5 mr-2" />
              Speak to an Expert
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
