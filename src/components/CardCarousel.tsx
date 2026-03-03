"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  ShoppingBag,
  Code2,
  Target,
  Layers,
  TrendingUp,
  Settings,
  ArrowRight,
} from "lucide-react";

interface CardCarouselProps {
  onOpenPopup: () => void;
}

const CardCarousel = ({ onOpenPopup }: CardCarouselProps) => {
  const cards = [
    {
      id: 1,
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to turn traffic into customers, built using real data.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "End-to-End Dev",
      description:
        "Complete websites for new brands. Strategy, design, copy, and build done start to finish.",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "CRO Retainers",
      description:
        "Ongoing optimization. Monthly audits, A/B tests, and updates that keep conversions climbing.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Shopify Maintenance",
      description:
        "Hands-on support to keep your store fast and functional so you can focus on business.",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Shopify Development",
      description:
        "Custom stores built for speed and scale — from theme dev to full Shopify Plus builds.",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "Custom Web Apps",
      description:
        "Bespoke applications using React and Next.js tailored to your unique workflows.",
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  const gradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]";

  // --- State & Refs ---
  const [itemsToShow, setItemsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const totalCards = cards.length;

  // --- Responsive Logic ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsToShow(3);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync index with itemsToShow to prevent layout shifts on resize
  useEffect(() => {
    setCurrentIndex(itemsToShow);
  }, [itemsToShow]);

  const extendedCards = [
    ...cards.slice(-itemsToShow),
    ...cards,
    ...cards.slice(0, itemsToShow),
  ];

  // --- Navigation Logic ---
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= totalCards + itemsToShow) {
      setIsTransitioning(false);
      setCurrentIndex(itemsToShow);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalCards);
    }
  }, [currentIndex, totalCards, itemsToShow]);

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // --- Swipe Logic for Mobile ---
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => prev + 1);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-14 px-2 gap-8">
          <div className="space-y-3">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              <span className={gradientText}>What</span> We Build
            </h2>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
              High-performance websites engineered for growth.
            </p>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 pb-2">
            {cards.map((_, index) => {
              const normalizedIndex =
                (currentIndex - itemsToShow + totalCards) % totalCards;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index + itemsToShow)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${normalizedIndex === index
                    ? "w-8 sm:w-12 bg-gradient-to-r from-[#3445E7] to-[#07D6F3]"
                    : "w-2 sm:w-3 bg-gray-200 hover:bg-gray-300"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative touch-pan-y" // touch-pan-y allows vertical scrolling while swiping horizontally
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" : "transition-none"}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                style={{ width: `${100 / itemsToShow}%` }}
                className="px-2 sm:px-3 shrink-0 group"
              >
                <div className="relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 min-h-[360px] lg:h-[400px] flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 hover:border-blue-200">
                  <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                      {card.icon}
                    </div>

                    <div className="space-y-3">
                      <h3
                        className={`text-2xl lg:text-3xl font-bold leading-tight ${gradientText}`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <button onClick={onOpenPopup} className="group/btn flex items-center gap-3 rounded-full border border-gray-200 bg-white py-1.5 pl-4 pr-1.5 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover/btn:text-white">
                        Learn More
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 group-hover/btn:bg-white/20 text-gray-600 group-hover/btn:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </button>

                    <span
                      className={`absolute -bottom-4 -right-2 select-none z-0 font-black text-7xl lg:text-8xl transition-all duration-700 opacity-30 group-hover:opacity-80 ${gradientText}`}
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
