import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LeadForm from "@/components/home/LeadForm";
import FAQPreview from "@/components/home/FAQPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedServices />
      <ServicesGrid />
      <WhyChooseUs />
      <LeadForm />
      <FAQPreview />
    </Layout>
  );
};

export default Index;
