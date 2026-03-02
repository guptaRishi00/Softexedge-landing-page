"use client";

import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Code2,
  Globe,
  ShoppingCart,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const CardCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Shopify Development",
      description:
        "Custom Shopify stores built for speed, conversion, and scale — from theme development to full Shopify Plus builds.",
      icon: <ShoppingBag className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Custom Web Apps",
      description:
        "Bespoke web applications using React, Next.js, and Node.js — tailored to your unique business workflows.",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "WordPress Sites",
      description:
        "Pixel-perfect WordPress websites with custom themes, plugins, and WooCommerce integrations that you can manage easily.",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description:
        "End-to-end online stores with payment gateways, inventory management, and optimized checkout flows.",
      icon: <ShoppingCart className="w-4 h-4" />,
    },
    {
      id: 5,
      title: "Website Redesign",
      description:
        "Modernize your existing website with better UX, faster load times, mobile responsiveness, and improved SEO.",
      icon: <RefreshCw className="w-4 h-4" />,
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
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
              <span className={gradientText}>What</span> We Build
            </h2>
            <p className="text-base text-gray-400 max-w-sm leading-relaxed">
              High-performance websites engineered for growth.
            </p>
          </div>

          {/* GRADIENT SLIDERS */}
          <div className="flex gap-2 mb-1">
            {cards.map((_, index) => {
              const normalizedIndex =
                (currentIndex - itemsToShow + totalCards) % totalCards;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index + itemsToShow)}
                  className={`h-1 rounded-full transition-all duration-500 ${normalizedIndex === index
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
            className={`flex transition-transform ${isTransitioning
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
                <div className="bg-white border border-gray-100 rounded-[24px] p-8 lg:p-10 h-[420px] flex flex-col justify-between relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(52,69,231,0.06)] hover:border-blue-100 hover:-translate-y-1">
                  <div className="relative z-10 space-y-6">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 border border-gray-100 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#3445E7] group-hover:to-[#07D6F3] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-blue-500/20">
                      {card.icon}
                    </div>

                    <div className="space-y-3">
                      <h3
                        className={`text-2xl lg:text-3xl font-semibold leading-tight ${gradientText}`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-gray-900 font-medium group/btn">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 group-hover/btn:text-[#04034C] transition-colors">
                        Learn More
                      </span>
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-gradient-to-r group-hover/btn:from-[#3445E7] group-hover/btn:to-[#07D6F3] group-hover/btn:text-white group-hover/btn:border-transparent group-hover/btn:shadow-md group-hover/btn:shadow-blue-500/20 transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <span className="text-gray-50 font-bold text-7xl absolute -bottom-4 -right-1 select-none z-[-1] transition-colors group-hover:text-gray-100/30">
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
