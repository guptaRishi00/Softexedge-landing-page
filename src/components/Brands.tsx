"use client";

import React from "react";
import LogoLoop from "./LogoLoop"; // Assuming it's in the same folder

const Brands = () => {
  // Static logo data following the LogoItem type from your code
  const partnerLogos = [
    {
      src: "/web/betting.png",
      alt: "Amazon",
    },
    {
      src: "/web/blackshark.png",
      alt: "Google",
    },
    {
      src: "/web/abc.png",
      alt: "Netflix",
    },
    {
      src: "/web/aqualog.png",
      alt: "Slack",
    },
    {
      src: "/web/auth.png",
      alt: "IBM",
    },
    {
      src: "/web/threadify.png",
      alt: "Microsoft",
    },
    {
      src: "/web/bloomvest.png",
      alt: "Bloomvest",
    },
    {
      src: "/web/casinoscan.png",
      alt: "Bloomvest",
    },

    {
      src: "/web/trend.png",
      alt: "Bloomvest",
    },
    {
      src: "/web/triti.png",
      alt: "Bloomvest",
    },
    {
      src: "/web/twin.png",
      alt: "Bloomvest",
    },
    {
      src: "/web/valpem.png",
      alt: "Bloomvest",
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-14 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
          Brands We&apos;ve Built For
        </p>
      </div>

      <div className="relative w-full">
        {/* Horizontal Logo Loop using your provided component logic */}
        <LogoLoop
          logos={partnerLogos}
          speed={40}
          gap={50}
          logoHeight={90}
          pauseOnHover={true}
          fadeOut={true}
          className=" hover:opacity-100 transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default Brands;
