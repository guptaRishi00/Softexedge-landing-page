"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Brands from "@/components/Brands";
import ContactFormPopup from "@/components/ContactFormPopup";
import FAQSection from "@/components/FAQSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import Navbar from "@/components/Navbar";
import ScheduleCallSection from "@/components/ScheduleCallSection";

// Dynamic imports for heavy components
const LogoCarousel = dynamic(() => import("@/components/LogoCarousel"), { ssr: false });
const CardCarousel = dynamic(() => import("@/components/CardCarousel"), { ssr: false });
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"), { ssr: false });

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="">
      <Navbar onOpenPopup={openPopup} />

      <main>
        {/* Wrap HeroSection in Suspense because it uses useSearchParams */}
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <HeroSection />
        </Suspense>

        <LogoCarousel />
        <Brands />
        <CardCarousel onOpenPopup={openPopup} />
        <FeatureShowcase onOpenPopup={openPopup} />
        <IndustriesSection onOpenPopup={openPopup} />
        <TestimonialSection />
        <ScheduleCallSection onOpenPopup={openPopup} />
        <FAQSection onOpenPopup={openPopup} />
      </main>

      {/* <Footer /> */}

      {/* Wrap ContactFormPopup in Suspense because it uses useSearchParams */}
      <Suspense fallback={null}>
        <ContactFormPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </Suspense>
    </div>
  );
}
