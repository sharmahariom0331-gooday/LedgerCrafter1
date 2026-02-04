import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";

// Import blog images
import blogGstImg from "@/assets/images/blog-gst.jpg";
import blogCompanyImg from "@/assets/images/blog-company.jpg";
import blogComplianceImg from "@/assets/images/blog-compliance.jpg";
import blogTrademarkImg from "@/assets/images/blog-trademark.jpg";
import blogFssaiImg from "@/assets/images/blog-fssai.jpg";
import blogAccountingImg from "@/assets/images/blog-accounting.jpg";

const allBlogPosts = [
  {
    slug: "complete-guide-gst-registration",
    title: "Complete Guide to GST Registration in India 2024",
    excerpt: "Everything you need to know about GST registration - eligibility, documents, process and timeline explained step by step.",
    category: "GST",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    image: blogGstImg,
  },
  {
    slug: "private-limited-vs-llp",
    title: "Private Limited vs LLP: Which is Right for Your Business?",
    excerpt: "Detailed comparison of Private Limited Company and LLP to help you choose the best structure for your startup.",
    category: "Company Registration",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    image: blogCompanyImg,
  },
  {
    slug: "gst-notice-handling-tips",
    title: "How to Handle GST Notices: Expert Tips",
    excerpt: "Received a GST notice? Don't panic. Learn how to analyze, respond and resolve common GST notices effectively.",
    category: "Compliance",
    date: "Jan 5, 2024",
    readTime: "5 min read",
    image: blogComplianceImg,
  },
  {
    slug: "trademark-registration-benefits",
    title: "5 Benefits of Trademark Registration for Your Brand",
    excerpt: "Protect your brand identity and understand why trademark registration is crucial for business growth.",
    category: "Legal",
    date: "Dec 28, 2023",
    readTime: "4 min read",
    image: blogTrademarkImg,
  },
  {
    slug: "fssai-license-requirements",
    title: "FSSAI License: Requirements and Process Explained",
    excerpt: "Complete guide to FSSAI registration - which license you need, documents required and application process.",
    category: "Licensing",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    image: blogFssaiImg,
  },
  {
    slug: "bookkeeping-best-practices",
    title: "Bookkeeping Best Practices for Small Businesses",
    excerpt: "Essential bookkeeping tips to keep your accounts organized, compliant and audit-ready throughout the year.",
    category: "Accounting",
    date: "Dec 15, 2023",
    readTime: "6 min read",
    image: blogAccountingImg,
  },
  // Additional blog posts for load more
  {
    slug: "income-tax-return-guide",
    title: "Income Tax Return Filing: Complete Guide for Individuals",
    excerpt: "Step-by-step guide to filing your ITR correctly. Learn about forms, deductions, and common mistakes to avoid.",
    category: "Tax",
    date: "Dec 10, 2023",
    readTime: "10 min read",
    image: blogGstImg,
  },
  {
    slug: "msme-registration-benefits",
    title: "MSME/Udyam Registration: Benefits & Process",
    excerpt: "Discover the advantages of MSME registration including subsidies, loan priority, and tax benefits for small businesses.",
    category: "Registration",
    date: "Dec 5, 2023",
    readTime: "5 min read",
    image: blogCompanyImg,
  },
  {
    slug: "digital-signature-guide",
    title: "Digital Signature Certificate: Types and Uses",
    excerpt: "Understanding Class 1, 2, and 3 DSC. Learn which certificate you need and how to apply for it.",
    category: "Legal",
    date: "Nov 28, 2023",
    readTime: "4 min read",
    image: blogTrademarkImg,
  },
  {
    slug: "tds-compliance-basics",
    title: "TDS Compliance Made Simple for Businesses",
    excerpt: "Master TDS deduction, payment, and return filing. Avoid penalties with our comprehensive compliance guide.",
    category: "Tax",
    date: "Nov 20, 2023",
    readTime: "8 min read",
    image: blogComplianceImg,
  },
  {
    slug: "partnership-deed-essentials",
    title: "Partnership Deed: Essential Clauses & Registration",
    excerpt: "Key clauses every partnership deed should have. Learn about rights, duties, and profit-sharing arrangements.",
    category: "Legal",
    date: "Nov 15, 2023",
    readTime: "6 min read",
    image: blogAccountingImg,
  },
  {
    slug: "gst-input-tax-credit",
    title: "GST Input Tax Credit: Maximize Your ITC Claims",
    excerpt: "Complete guide to claiming ITC under GST. Understand eligible credits, conditions, and reconciliation process.",
    category: "GST",
    date: "Nov 10, 2023",
    readTime: "7 min read",
    image: blogFssaiImg,
  },
];

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + 6, allBlogPosts.length));
      setIsLoading(false);
    }, 800);
  };

  const displayedPosts = allBlogPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < allBlogPosts.length;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-blog" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-blog)" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight tracking-tight">
            Blog & Resources
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Read practical guides on GST, compliance, registrations, notices and bookkeeping. Simple explanations for business owners.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in hover:-translate-y-3"
                style={{ animationDelay: `${(index % 6) * 0.1}s` }}
              >
                {/* Blog Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold shadow-lg uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-base mb-5 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-purple-600" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-blue-600" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Gradient bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {hasMorePosts && (
            <div className="text-center mt-16">
              <Button
                variant="default"
                size="lg"
                onClick={handleLoadMore}
                disabled={isLoading}
                className="px-10 py-6 text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Loading More Posts...
                  </>
                ) : (
                  <>
                    Load More Posts
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}

          {/* All posts loaded message */}
          {!hasMorePosts && visiblePosts > 6 && (
            <div className="text-center mt-16">
              <p className="text-gray-600 text-xl font-semibold">You've explored all our blog posts! 🎉</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
