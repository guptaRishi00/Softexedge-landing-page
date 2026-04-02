"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";

const LogoCarousel = () => {
  const projects = [
    "1.PNG",
    "5.PNG",
    "6.PNG",
    "8.PNG",
    "10.PNG",
    "12.PNG",
    "2.PNG",
    "3.PNG",
    "4.PNG",
    "7.PNG",
    "9.PNG",
    "11.PNG",
    "23.jpeg",
    "22.jpeg",
    "26.jpeg",
    "13.PNG",
  ];

  // Triple the items so we have enough runway for seamless looping
  const displayProjects = [...projects, ...projects, ...projects];

  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPos = useRef(0);
  const speed = useRef(1); // px per frame
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);
  const isPaused = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Get the width of one full set of items
  const getSetWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 3;
  }, []);

  // Seamless loop: when we scroll past one full set, jump back
  const wrapPosition = useCallback(() => {
    const setWidth = getSetWidth();
    if (setWidth === 0) return;
    if (scrollPos.current >= setWidth * 2) {
      scrollPos.current -= setWidth;
    }
    if (scrollPos.current < 0) {
      scrollPos.current += setWidth;
    }
  }, [getSetWidth]);

  // Animation loop
  const animate = useCallback(() => {
    if (!isDragging.current && !isPaused.current) {
      scrollPos.current += speed.current;
      wrapPosition();
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-scrollPos.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [wrapPosition]);

  useEffect(() => {
    // Start from the middle set so we can drag in both directions
    const setWidth = getSetWidth();
    if (setWidth > 0) {
      scrollPos.current = setWidth;
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate, getSetWidth]);

  // --- Pointer (mouse + touch) handlers ---
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragScrollStart.current = scrollPos.current;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.clientX;
    scrollPos.current = dragScrollStart.current + delta;
    wrapPosition();
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    // Resume auto-scroll after a short delay
    resumeTimeout.current = setTimeout(() => {
      isPaused.current = false;
    }, 1500);
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16 overflow-hidden font-sans">
      <div className="px-6 lg:px-16 mb-10">
        <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-xs mb-3">
          Our Projects
        </p>
      </div>

      <div
        className="relative flex items-center select-none"
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        onMouseEnter={() => {
          setIsHovered(true);
          isPaused.current = true;
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (!isDragging.current) isPaused.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
          style={{ touchAction: "pan-y" }}
        >
          {displayProjects.map((src, index) => (
            <div
              key={index}
              className="flex w-[220px] md:w-[280px] items-center justify-center px-1.5 md:px-2.5"
            >
              <div className="relative w-full aspect-[10/19] overflow-hidden rounded-[10px] md:rounded-[12px] border border-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-700 hover:scale-[1.03] hover:shadow-blue-500/10">
                <Image
                  src={`/${src}`}
                  alt={`Project Screenshot ${index}`}
                  fill
                  draggable={false}
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(html, body) {
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
