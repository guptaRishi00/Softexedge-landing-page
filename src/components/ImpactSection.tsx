"use client";

import React from "react";
import { motion } from "framer-motion";

const ImpactSection = () => {
  const stats = [
    {
      value: "250+",
      label: "Projects Delivered",
      detail: "Global digital solutions",
    },
    {
      value: "98%",
      label: "Client Retention",
      detail: "Long-term partnerships",
    },
    { value: "15+", label: "Design Awards", detail: "Industry recognition" },
    { value: "10M", label: "User Reach", detail: "Impact across platforms" },
  ];

  return (
    <section className="w-full py-24 bg-white px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Our Footprint
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C] leading-tight tracking-tight">
              Driving growth through <br />
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                purposeful design.
              </span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-black/60 text-lg font-medium leading-relaxed">
              We measure our success by the tangible impact we create for the
              brands that shape our future.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-10 bg-black rounded-[20px] text-white flex flex-col justify-between h-[280px] transition-all duration-500 hover:scale-[1.03] border border-white/5 shadow-2xl"
            >
              <div className="space-y-2">
                {/* Signature Gradient for Numbers */}
                <h3 className="text-5xl lg:text-6xl font-black bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-xl font-bold tracking-tight">{stat.label}</p>
              </div>

              <div className="space-y-4">
                <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
                  {stat.detail}
                </p>
                {/* Animated Bottom Accent */}
                <div className="h-1 w-12 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
