"use client";

import React from "react";
import { motion } from "framer-motion";

const BentoFeatures = () => {
  return (
    <section className="w-full py-24 bg-white px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Our Advantage
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C] leading-tight tracking-tight">
            Design that{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              Powers
            </span>{" "}
            Growth
          </h2>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Card 1: Large Main Feature (5-span) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="col-span-12 lg:col-span-5 bg-black rounded-[20px] p-10 flex flex-col justify-between h-[500px] relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F85EA] blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-white/20 font-black text-6xl mb-8 block">
                01
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                Strategic Brand Evolution
              </h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium max-w-sm">
                We build comprehensive visual systems that tell your brand's
                unique story and resonate with your audience.
              </p>
            </div>
            <div className="h-1.5 w-24 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] rounded-full group-hover:w-full transition-all duration-500" />
          </motion.div>

          {/* Card 2: Top Right Small (7-span) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="col-span-12 lg:col-span-7 bg-zinc-900/50 rounded-[20px] p-10 flex flex-col justify-center h-[240px] border border-black/5 hover:bg-black group transition-all duration-500"
          >
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-linear-to-r from-[#3445E7] to-[#07D6F3] flex items-center justify-center text-white text-3xl font-bold shrink-0">
                ★
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#04034C] group-hover:text-white transition-colors">
                  UI/UX Excellence
                </h3>
                <p className="text-black/60 group-hover:text-white/60 transition-colors font-medium">
                  Crafting intuitive digital experiences built for seamless user
                  journeys.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Bottom Right Sub (7-span) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="col-span-12 lg:col-span-7 bg-black rounded-[20px] p-10 flex items-center justify-between h-[240px] border border-white/5 group overflow-hidden"
          >
            <div className="max-w-md relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                High-Performance Dev
              </h3>
              <p className="text-white/60 text-lg font-medium leading-relaxed">
                Scalable, high-speed code that brings design to life across all
                modern platforms.
              </p>
            </div>
            {/* Visual Decorative Accent */}
            <div className="w-32 h-32 border-[20px] border-[#2F85EA]/20 rounded-full -mr-16 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
