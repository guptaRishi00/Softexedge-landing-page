"use client";

import React from "react";
import { motion } from "framer-motion";

const AdvantageSection = () => {
  const advantages = [
    {
      title: "Fast-Paced Delivery",
      description:
        "We ship high-quality products in weeks, not months, without ever compromising on design integrity.",
      label: "Agility",
    },
    {
      title: "Data-Driven Design",
      description:
        "Our creative choices are backed by deep user research and market analytics to ensure performance.",
      label: "Precision",
    },
    {
      title: "Full-Stack Expertise",
      description:
        "From core branding to complex web development, we handle the entire digital product lifecycle.",
      label: "Unified",
    },
  ];

  return (
    <section className="w-full py-24 bg-white px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Gilroy Font Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Our Strategic Edge
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C] leading-tight">
              Why innovative teams <br />
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                choose SoftEXedge
              </span>
            </h2>
          </div>
          <p className="text-black/60 text-lg lg:max-w-xs font-medium border-l-2 border-black/10 pl-6 py-2">
            We don't just build websites; we build scalable digital brands
            people trust.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group p-10 bg-black rounded-[20px] text-white flex flex-col h-[420px] justify-between relative overflow-hidden transition-all duration-500 border border-white/5 hover:border-[#2F85EA]/30"
            >
              {/* Subtle Gradient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F85EA] blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="space-y-6 relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[10px] font-black uppercase tracking-widest text-[#2F85EA]">
                  {item.label}
                </span>
                <h3 className="text-3xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Dynamic Bottom Bar */}
              <div className="flex items-center justify-between relative z-10">
                <div className="h-1.5 w-12 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] rounded-full group-hover:w-full transition-all duration-500" />
                <span className="text-white/10 font-black text-5xl group-hover:text-white/20 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
