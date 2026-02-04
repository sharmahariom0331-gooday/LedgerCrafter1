import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-xl font-bold text-primary">L</span>
              </div>
              <span className="text-xl font-bold">LedgerCrafter</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              India's trusted platform for legal, tax & compliance services. Empowering businesses with seamless solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/gst-calculator" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  GST Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/company-registration" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Company Registration
                </Link>
              </li>
              <li>
                <Link to="/services/gst-registration" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  GST Registration
                </Link>
              </li>
              <li>
                <Link to="/services/trademark" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link to="/services/accounting-bookkeeping" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Accounting & Book-keeping
                </Link>
              </li>
              <li>
                <Link to="/services/gst-filing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  GST Filing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  1st floor, 34, New Anaj mandi, Mal godam road, Rohtak 124001, Haryana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+918952008952" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  +91 8952-00-8952
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:ledgercrafter@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  ledgercrafter@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>Mon–Fri: 10 AM – 6 PM</p>
                  <p>Sat: 11 AM – 4 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} LedgerCrafter.in. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
