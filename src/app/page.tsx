import AdvantageSection from "@/components/AdvantageSection";
import BentoFeatures from "@/components/BentoFeatures";
import Brands from "@/components/Brands";
import CardCarousel from "@/components/CardCarousel";
import ClientTestimonials from "@/components/ClientTestimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import ValuesSection from "@/components/ValuesSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Brands />
      <CardCarousel />
      <ProcessSection />
      <AdvantageSection />
      <ImpactSection />
      <ClientTestimonials />
      <FAQSection />
      <Footer />
    </div>
  );
}
