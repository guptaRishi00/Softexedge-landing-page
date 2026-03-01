"use client";

import React from "react";
import LogoLoop from "./LogoLoop"; // Assuming it's in the same folder

const Brands = () => {
  // Static logo data following the LogoItem type from your code
  const partnerLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      alt: "Netflix",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
      alt: "Slack",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      alt: "IBM",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft",
    },
  ];

  return (
    <section className="w-full bg-white mb-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
          Trusted Collaboration
        </p>
      </div>

      <div className="relative w-full">
        {/* Horizontal Logo Loop using your provided component logic */}
        <LogoLoop
          logos={partnerLogos}
          speed={40}
          gap={80}
          logoHeight={45}
          pauseOnHover={true}
          fadeOut={true}
          className=" hover:opacity-100 transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default Brands;
