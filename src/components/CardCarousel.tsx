"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardCarousel = () => {
  // Static data for demonstration
  const cards = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Crafting intuitive digital experiences that engage users.",
    },
    {
      id: 2,
      title: "Development",
      description: "Building scalable, high-performance web applications.",
    },
    {
      id: 3,
      title: "Branding",
      description: "Defining unique visual identities for modern companies.",
    },
    {
      id: 4,
      title: "Marketing",
      description: "Strategically expanding your digital reach and impact.",
    },
    {
      id: 5,
      title: "Consulting",
      description: "Strategic insights to navigate complex digital landscapes.",
    },
  ];

  const itemsToShow = 3;
  // Clone cards for infinite effect logic from Testimonial.tsx
  const extendedCards = [
    ...cards.slice(-itemsToShow),
    ...cards,
    ...cards.slice(0, itemsToShow),
  ];

  const [currentIndex, setCurrentIndex] = useState(itemsToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalCards = cards.length;

  // Infinite loop reset logic
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

  // Auto-play timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 px-2">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C]">
              Our Expertise
            </h2>
            <p className="text-lg text-black/60 max-w-md">
              Solutions tailored for innovative growth.
            </p>
          </div>

          {/* Progress Dots with Brand Gradient */}
          <div className="flex gap-2 mb-4">
            {cards.map((_, index) => {
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
                <div className="bg-black rounded-[30px] p-10 h-[450px] flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  {/* Subtle Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#3445E7]/10 via-transparent to-[#07D6F3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <span className="text-white/30 font-bold text-xl block mb-6">
                      0{((index - itemsToShow + totalCards) % totalCards) + 1}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:bg-linear-to-r group-hover:from-[#3445E7] group-hover:via-[#2F85EA] group-hover:to-[#07D6F3] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {card.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Dynamic Brand Accent */}
                  <div className="h-1 w-16 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] rounded-full transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
