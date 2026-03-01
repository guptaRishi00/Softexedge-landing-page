"use client";

import React from "react";
import { motion } from "framer-motion";

const ValuesSection = () => {
  const values = [
    {
      title: "Human-Centric",
      description:
        "We design for people first, ensuring every digital touchpoint feels natural, intuitive, and accessible.",
      icon: "👥",
    },
    {
      title: "Future-Proof",
      description:
        "Our tech stacks and design systems are built to scale, ensuring your brand stays ahead of the curve.",
      icon: "🚀",
    },
    {
      title: "Result-Driven",
      description:
        "We bridge the gap between aesthetics and business goals, delivering designs that convert and perform.",
      icon: "📈",
    },
  ];

  return (
    <section className="w-full py-24 bg-white px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Deep Navy Tone */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C] leading-tight">
              Design that defines <br />
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                the digital edge.
              </span>
            </h2>
          </div>
          <div className="h-0.5 w-full md:w-32 bg-black/10 mb-4 hidden md:block" />
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-10 bg-black rounded-[20px] text-white flex flex-col h-[380px] justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-white/5"
            >
              {/* Subtle Blue Glow Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2F85EA] blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="space-y-6 relative z-10">
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Animated Accent Bar */}
              <div className="relative z-10 mt-8">
                <div className="h-1.5 w-16 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
