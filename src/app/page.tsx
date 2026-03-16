"use client";

import { useState, Suspense } from "react";
import Brands from "@/components/Brands";
import CardCarousel from "@/components/CardCarousel";
import ContactFormPopup from "@/components/ContactFormPopup";
import FAQSection from "@/components/FAQSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";
import ScheduleCallSection from "@/components/ScheduleCallSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="">
      <Navbar onOpenPopup={openPopup} />

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
