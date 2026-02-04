import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does company registration take?",
    answer: "Company registration typically takes 7-10 working days once all documents are submitted. We handle the entire process including name approval, DSC, DIN and incorporation.",
  },
  {
    question: "What documents are required for GST registration?",
    answer: "You need PAN card, Aadhaar card, address proof of business, bank statement/cancelled cheque, and photographs. Additional documents may be required based on business type.",
  },
  {
    question: "Can you help with GST notice replies?",
    answer: "Yes, we analyze the notice, prepare a compliant response with supporting documents, and file it within the given timeline to avoid penalties.",
  },
  {
    question: "What is the cost of trademark registration?",
    answer: "Trademark registration starts from ₹5,499 including government fees. The final cost depends on the number of classes and type of applicant (individual/company).",
  },
  {
    question: "Do you provide monthly accounting services?",
    answer: "Yes, we offer comprehensive monthly accounting and bookkeeping services. Our experts maintain your books, prepare reports, and keep accounts audit-ready.",
  },
  {
    question: "How can I get a Digital Signature Certificate (DSC)?",
    answer: "We help you apply for Class 3 DSC online. The process takes 1-2 days with proper document submission. DSC is required for GST, MCA filings and tenders.",
  },
];

const FAQPreview = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-0 card-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/faqs">
                View All FAQs
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
