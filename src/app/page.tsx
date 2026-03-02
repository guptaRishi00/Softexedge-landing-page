import AdvantageSection from "@/components/AdvantageSection";
import BentoFeatures from "@/components/BentoFeatures";
import Brands from "@/components/Brands";
import CardCarousel from "@/components/CardCarousel";
import ClientTestimonials from "@/components/ClientTestimonials";
import FAQSection from "@/components/FAQSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import IndustriesSection from "@/components/IndustriesSection";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import ValuesSection from "@/components/ValuesSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Brands />
      <CardCarousel />
      <FeatureShowcase />
      <LogoCarousel />
      <IndustriesSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
      {/* <ProcessSection />
      <AdvantageSection />
      <ImpactSection />
      <ClientTestimonials />
      <FAQSection />
      <Footer /> */}
    </div>
  );
}
