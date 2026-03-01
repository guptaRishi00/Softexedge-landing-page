"use client";

import React from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      description:
        "We deep-dive into your brand, target audience, and market landscape to find the 'edge'.",
    },
    {
      id: "02",
      title: "Strategy",
      description:
        "Crafting a roadmap that aligns your business goals with user-centric design principles.",
    },
    {
      id: "03",
      title: "Design",
      description:
        "Iterative visual creation where we transform complex ideas into intuitive digital interfaces.",
    },
    {
      id: "04",
      title: "Delivery",
      description:
        "Precision development and launch strategies ensuring your brand scales effectively.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            How We Work
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C] leading-tight">
            Our Working{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              whileHover={{ y: -10 }}
              className="group bg-black rounded-[20px] p-10 h-full flex flex-col justify-between transition-all duration-500 border border-white/5 hover:border-[#2F85EA]/30"
            >
              <div className="space-y-6">
                {/* Step Number with Signature Gradient */}
                <span className="text-5xl font-black bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent opacity-40 group-hover:opacity-100 transition-opacity">
                  {step.id}
                </span>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-white/60 text-base leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="mt-12 h-1 w-12 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
