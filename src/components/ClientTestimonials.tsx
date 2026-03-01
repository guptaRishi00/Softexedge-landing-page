"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ClientTestimonials = () => {
  // Static placeholder data mirroring the SoftEXedge agency style
  const testimonials = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "CEO, TechFlow",
      quote:
        "SoftEXedge transformed our digital identity. Their strategic approach to UI/UX didn't just look better; it doubled our conversion rates.",
      stars: 5,
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Product Lead, InnovateHQ",
      quote:
        "The most agile team we've worked with. They ship high-quality designs at a pace that keeps up with our rapid development cycles.",
      stars: 5,
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "Founder, Zenith",
      quote:
        "A true strategic partner. They understood our brand vision immediately and delivered a scalable design system that will last us years.",
      stars: 4,
    },
    {
      id: 4,
      name: "Elena Petrova",
      role: "Marketing Director, Nexus",
      quote:
        "Their ability to combine data-driven insights with world-class aesthetics is what sets SoftEXedge apart from traditional agencies.",
      stars: 5,
    },
  ];

  const itemsToShow = 3;
  // Infinite scroll logic using card cloning
  const extendedCards = [
    ...testimonials.slice(-itemsToShow),
    ...testimonials,
    ...testimonials.slice(0, itemsToShow),
  ];

  const [currentIndex, setCurrentIndex] = useState(itemsToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalCards = testimonials.length;

  // Seamless loop reset logic
  useEffect(() => {
    if (currentIndex >= totalCards + itemsToShow) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(itemsToShow);
      }, 700);
    }
    if (currentIndex <= itemsToShow - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalCards + itemsToShow - 1);
      }, 700);
    }
  }, [currentIndex, totalCards]);

  useEffect(() => {
    if (!isTransitioning) {
      void document.documentElement.offsetHeight; // Force reflow
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Client Feedback
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C] leading-tight">
              What the{" "}
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                Innovators
              </span>{" "}
              Say
            </h2>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2 mb-4">
            {testimonials.map((_, index) => {
              const normalizedIndex =
                (currentIndex - itemsToShow + totalCards) % totalCards;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index + itemsToShow)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    normalizedIndex === index
                      ? "w-12 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]"
                      : "w-8 bg-black/10"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative overflow-visible">
          <div
            className={`flex transition-transform ${isTransitioning ? "duration-700 ease-in-out" : "duration-0"}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {extendedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="w-full md:w-1/3 px-4 shrink-0 box-border group"
              >
                <div className="bg-black rounded-[20px] p-10 h-[400px] flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-white/5">
                  {/* Subtle Gradient Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#3445E7]/5 to-[#07D6F3]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 space-y-6">
                    {/* Stars with SoftEXedge Blue color */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < card.stars ? "text-[#2F85EA]" : "text-white/20"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-white/80 text-lg leading-relaxed font-medium italic">
                      "{card.quote}"
                    </p>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {card.name}
                    </h3>
                    <p className="text-[#2F85EA] text-sm font-bold uppercase tracking-widest">
                      {card.role}
                    </p>

                    {/* Animated accent line */}
                    <div className="h-1 w-12 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] mt-6 rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
