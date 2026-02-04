import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";

const blogData: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "complete-guide-gst-registration": {
    title: "Complete Guide to GST Registration in India 2024",
    excerpt: "Everything you need to know about GST registration - eligibility, documents, process and timeline explained step by step.",
    category: "GST",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    content: `
## What is GST Registration?

GST (Goods and Services Tax) registration is the process of obtaining a unique GSTIN (GST Identification Number) from the government. This 15-digit number is mandatory for businesses meeting certain criteria and enables them to collect GST from customers and claim input tax credit.

## Who Needs GST Registration?

GST registration is mandatory if:
- Your annual turnover exceeds ₹40 lakhs (for goods) or ₹20 lakhs (for services)
- You're in a special category state with ₹10 lakh threshold
- You're involved in inter-state supply
- You sell through e-commerce platforms
- You're an NRI or casual taxable person

## Documents Required

1. PAN Card of the business/proprietor
2. Aadhaar Card
3. Proof of business registration
4. Address proof of business premises
5. Bank statement or cancelled cheque
6. Photograph of the proprietor/partners/directors
7. Authorization letter for authorized signatory

## Registration Process

1. **Visit GST Portal** - Go to gst.gov.in and click on 'Register Now'
2. **Fill Part A** - Enter PAN, mobile, and email for OTP verification
3. **Complete Part B** - Submit business details and documents
4. **Verification** - Application is verified by tax officer
5. **GSTIN Issuance** - Receive your GST number upon approval

## Timeline

Typically, GST registration is completed within 3-7 working days after successful document submission and verification.

## Need Help?

Our experts can help you with GST registration, documentation, and all related compliance. Get in touch today!
    `,
  },
  "private-limited-vs-llp": {
    title: "Private Limited vs LLP: Which is Right for Your Business?",
    excerpt: "Detailed comparison of Private Limited Company and LLP to help you choose the best structure for your startup.",
    category: "Company Registration",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    content: `
## Introduction

Choosing the right business structure is one of the most important decisions for entrepreneurs. Two popular options in India are Private Limited Company and Limited Liability Partnership (LLP). Let's understand the key differences.

## Private Limited Company

### Advantages
- Separate legal entity with perpetual succession
- Easier to raise funding from investors
- Higher credibility in the market
- Can issue ESOPs to employees

### Considerations
- Higher compliance requirements
- Minimum 2 directors and 2 shareholders
- Annual audit is mandatory

## Limited Liability Partnership (LLP)

### Advantages
- Limited liability for partners
- Lower compliance burden
- No minimum capital requirement
- Partners can participate in management

### Considerations
- Cannot raise equity funding
- May have lower market perception
- Requires minimum 2 designated partners

## Quick Comparison

| Factor | Private Limited | LLP |
|--------|-----------------|-----|
| Compliance | Higher | Lower |
| Funding | Equity possible | Debt only |
| Audit | Mandatory | Only if turnover > 40L |
| Directors/Partners | Min 2 | Min 2 |

## Our Recommendation

Choose Private Limited if you plan to raise investment or scale significantly. Choose LLP for professional services or small businesses with limited growth plans.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData[slug || ""] || {
    title: "Post Not Found",
    excerpt: "",
    category: "",
    date: "",
    readTime: "",
    content: "The requested blog post could not be found.",
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 card-shadow prose prose-lg max-w-none">
                <div 
                  className="text-foreground"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">')
                      .replace(/### /g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">')
                      .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4">')
                      .replace(/\n- /g, '</p><li class="text-muted-foreground ml-4">')
                      .replace(/\n\d\. /g, '</p><li class="text-muted-foreground ml-4">')
                  }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-2xl p-6 card-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-4">Need Expert Help?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Our team can help you with all legal, tax and compliance requirements.
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">
                    <Phone className="h-4 w-4" />
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
