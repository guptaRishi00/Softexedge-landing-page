"use client";

import React from "react";
import LogoLoop from "./LogoLoop"; // Assuming it's in the same folder

const Brands = () => {
  // Static logo data following the LogoItem type from your code
  const partnerLogos = [
    {
      src: "/betting.png",
      alt: "Amazon",
      width: 140,
      height: 60,
    },
    {
      src: "/blackshark.png",
      alt: "Google",
      width: 140,
      height: 60,
    },
    {
      src: "/abc.png",
      alt: "Netflix",
      width: 140,
      height: 60,
    },
    {
      src: "/aqualog.png",
      alt: "Slack",
      width: 140,
      height: 60,
    },
    {
      src: "/auth.png",
      alt: "IBM",
      width: 140,
      height: 60,
    },
    {
      src: "/threadify.png",
      alt: "Microsoft",
      width: 140,
      height: 60,
    },
    {
      src: "/bloomvest.png",
      alt: "Bloomvest",
      width: 140,
      height: 60,
    },
    {
      src: "/casinoscan.png",
      alt: "Bloomvest",
      width: 140,
      height: 60,
    },
    {
      src: "/trend.png",
      alt: "Bloomvest",
      width: 140,
      height: 60,
    },
    {
      src: "/triti.png",
      alt: "Bloomvest",
      width: 140,
      height: 60,
    },
    {
      src: "/twin.png",
      alt: "Bloomvest",
      width: 140,
      height: 60,
    },
    {
      src: "/valpem.png",
      alt: "Bloomvest",
      width: 140,
      height: 60,
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-14 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-600 mb-4">
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
