"use client";

import React from "react";
import { motion } from "framer-motion";

const industries = [
  { name: "Travel and Luggage", color: "text-blue-400" },
  { name: "Clothing & Accessories", color: "text-pink-400" },
  { name: "Men's Grooming", color: "text-cyan-400" },
  { name: "Footwear", color: "text-green-400" },
  { name: "Eyewear", color: "text-purple-400" },
  { name: "Beauty and Skincare", color: "text-pink-500" },
  { name: "Home Goods and Bedding", color: "text-orange-400" },
  { name: "Sustainable Products", color: "text-green-500" },
  { name: "Lingerie & Women's Underwear", color: "text-red-400" },
  { name: "Personal Care Products", color: "text-emerald-400" },
  { name: "Meal Kits", color: "text-yellow-500" },
  { name: "Organic & Natural Groceries", color: "text-green-600" },
  { name: "Wellness & Fitness", color: "text-indigo-400" },
  { name: "Pet Care & Supplies", color: "text-orange-500" },
  { name: "Tech Accessories", color: "text-slate-500" },
  { name: "Jewelry & Luxury", color: "text-yellow-600" },
  { name: "Subscription Boxes", color: "text-purple-500" },
  { name: "Outdoor & Camping", color: "text-lime-600" },
  { name: "Health & Supplements", color: "text-teal-500" },
  { name: "Automotive Gear", color: "text-gray-600" },
  { name: "Smart Home Tech", color: "text-blue-600" },
  { name: "Office Furniture", color: "text-amber-700" },
  { name: "Baby & Toddler", color: "text-sky-400" },
  { name: "Coffee & Beverages", color: "text-orange-900" },
];

const SparkleIcon = ({ className }: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-3.5 h-3.5 ${className}`}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const IndustryPill = ({ name, color }: any) => (
  <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-100 rounded-full shadow-sm whitespace-nowrap mx-1.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300">
    <SparkleIcon className={color} />
    <span className="text-gray-700 font-medium text-xs lg:text-sm">{name}</span>
  </div>
);

const ScrollingRow = ({ items, direction = 1, speed = 40 }: any) => {
  return (
    <div className="flex overflow-hidden w-full relative py-0.5">
      <motion.div
        className="flex"
        animate={{ x: direction === 1 ? [0, -1200] : [-1200, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <IndustryPill key={index} name={item.name} color={item.color} />
        ))}
      </motion.div>
    </div>
  );
};

const IndustriesSection = () => {
  const row1 = industries.slice(0, 8);
  const row2 = industries.slice(8, 16);
  const row3 = industries.slice(16, 24);

  const brandGradient =
    "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]";

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FDFCF8] overflow-hidden flex flex-col items-center">
      <div className="text-center max-w-2xl px-6 lg:px-16 mb-14 space-y-4">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200/50 bg-blue-50/30 text-[10px] font-bold uppercase tracking-widest text-[#3445E7]/70 shadow-sm">
          Serving 20+ Industries
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#04034C] tracking-tight">
          <span className={`${brandGradient} bg-clip-text text-transparent`}>
            Industries
          </span>{" "}
          We Build For
        </h2>

        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          From DTC brands to enterprise platforms, we build websites
          that drive real business results across every sector.
        </p>
      </div>

      <div className="w-full space-y-4 mb-14">
        <ScrollingRow items={row1} direction={1} speed={60} />
        <ScrollingRow items={row2} direction={-1} speed={55} />
        <ScrollingRow items={row3} direction={1} speed={65} />
      </div>

      <button
        className={`${brandGradient} hover:brightness-110 active:scale-95 text-white font-semibold px-8 py-3 rounded-full cursor-pointer transition-all duration-300 text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30`}
      >
        Get a Free Quote
      </button>
    </section>
  );
};

export default IndustriesSection;
