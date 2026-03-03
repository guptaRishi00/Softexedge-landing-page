"use client";

import { Smartphone, Zap, Search, ArrowRight } from "lucide-react";

interface FeatureShowcaseProps {
  onOpenPopup: () => void;
}

const FeatureShowcase = ({ onOpenPopup }: FeatureShowcaseProps) => {
  const features = [
    {
      id: 1,
      title: "Responsive Design",
      description:
        "Every website we build looks flawless on desktop, tablet, and mobile.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Speed Optimized",
      description:
        "Lightning-fast load times with optimized code, images, and caching.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "SEO-Ready Code",
      description:
        "Clean, semantic HTML with structured data to help you rank higher.",
      icon: <Search className="w-5 h-5" />,
    },
  ];

  // Refined Gradient Class for re-use
  const primaryGradient =
    "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]";

  return (
    <section className="w-full py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Column (Call to Action Card) */}
        <div className="md:col-span-4 bg-[#04034C] rounded-3xl p-8 flex flex-col items-start text-left space-y-6 relative overflow-hidden group min-h-[280px] justify-center gap-10 hover:shadow-2xl hover:shadow-blue-900/20">
          {/* Decorative gradient line */}

          <h3 className="text-2xl font-semibold text-white leading-snug relative z-10">
            Ready to launch <br /> your next website?
          </h3>

          <button
            onClick={onOpenPopup}
            className={`relative z-10 bg-white text-gray-900 hover:text-white hover:${primaryGradient} rounded-full px-6 py-2.5 text-sm font-semibold flex items-center gap-2 cursor-pointer`}
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column (Content) */}
        <div className="md:col-span-8 space-y-10">
          {/* Header Section */}
          <div className="space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#3445E7] border border-[#3445E7]/30 rounded-full px-3 py-1 w-max mb-4">
              Every Website Includes
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#04034C] tracking-tight">
              Built Into{" "}
              <span
                className={`${primaryGradient} bg-clip-text text-transparent`}
              >
                Every Build
              </span>
            </h2>
            <p className="text-base text-gray-500 max-w-lg leading-relaxed">
              Every website comes standard with the essentials to perform and
              convert from day one.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="space-y-4 group">
                {/* Icon Container - Small & Minimal */}
                <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-[#3445E7] to-[#07D6F3] text-white">
                  {feature.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
