"use client";

import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Code2,
  Globe,
  ShoppingCart,
  RefreshCw,
  ArrowRight,
  Target, // Added for Landing Pages
  Layers, // Added for End-to-End
  TrendingUp, // Added for CRO
  Settings, // Added for Maintenance
} from "lucide-react";

const CardCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to turn traffic into customers, built using real data and proven D2C frameworks.",
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "End-to-End Website Development",
      description:
        "Complete websites for new brands or full redesigns for growing ones. Strategy, design, copy, and build done start to finish.",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "CRO Retainers",
      description:
        "Ongoing optimization for your website. Monthly audits, new pages, A/B tests, and updates that keep conversions climbing.",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      id: 4,
      title: "Shopify Store Maintenance",
      description:
        "Hands-on support to keep your Shopify store fast, functional, and up to date so you can focus on running the business.",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      id: 5,
      title: "Shopify Development",
      description:
        "Custom Shopify stores built for speed, conversion, and scale — from theme development to full Shopify Plus builds.",
      icon: <ShoppingBag className="w-4 h-4" />,
    },
    {
      id: 6,
      title: "Custom Web Apps",
      description:
        "Bespoke web applications using React, Next.js, and Node.js — tailored to your unique business workflows.",
      icon: <Code2 className="w-4 h-4" />,
    },
  ];

  const gradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]";

  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedCards = [
    ...cards.slice(-itemsToShow),
    ...cards,
    ...cards.slice(0, itemsToShow),
  ];

  const [currentIndex, setCurrentIndex] = useState(itemsToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalCards = cards.length;

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
  }, [currentIndex, totalCards, itemsToShow]);

  useEffect(() => {
    if (!isTransitioning) {
      void document.documentElement.offsetHeight;
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 px-4 gap-6">
          <div className="space-y-3 text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              <span className={`${gradientText} font-bold`}>What</span> We Build
            </h2>
            <p className="text-base text-gray-400 max-w-sm leading-relaxed">
              High-performance websites engineered for growth.
            </p>
          </div>

          <div className="flex gap-2 mb-1">
            {cards.map((_, index) => {
              const normalizedIndex =
                (currentIndex - itemsToShow + totalCards) % totalCards;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index + itemsToShow)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    normalizedIndex === index
                      ? "w-12 bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]"
                      : "w-3 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div className="relative overflow-visible">
          <div
            className={`flex transition-transform ${
              isTransitioning
                ? "duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"
                : "duration-0"
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {extendedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                style={{ width: `${100 / itemsToShow}%` }}
                className="px-3 shrink-0 group"
              >
                <div className="relative bg-white border border-gray-300 rounded-3xl p-8 lg:p-10 h-[420px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-100">
                  <div className="relative z-10 space-y-6">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 border border-gray-100">
                      {card.icon}
                    </div>

                    <div className="space-y-3">
                      <h3
                        className={`text-2xl lg:text-3xl font-bold leading-tight ${gradientText}`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between cursor-pointer">
                    <button className="group/btn flex items-center gap-4 rounded-full border border-gray-200 bg-white py-1.5 pl-5 pr-1.5 transition-all duration-300 hover:bg-linear-to-r hover:from-[#3445E7] hover:to-[#07D6F3]">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 cursor-pointer group-hover/btn:text-white">
                        Learn More
                      </span>
                      <div className="flex h-8 cursor-pointer w-8 items-center justify-center rounded-full border border-gray-100 bg-gray-50 transition-all duration-300 group-hover/btn:border-white/20 group-hover/btn:bg-white/20 group-hover/btn:text-white">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </button>

                    <span
                      className={`absolute -bottom-6 -right-2 select-none z-0 font-black text-8xl transition-all duration-700 opacity-30 group-hover:opacity-60 group-hover:scale-110 ${gradientText}`}
                    >
                      0{((index - itemsToShow + totalCards) % totalCards) + 1}
                    </span>
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

export default CardCarousel;
