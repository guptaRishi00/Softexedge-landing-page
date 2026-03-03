"use client";

import Image from "next/image";

const LogoCarousel = () => {
  const projects = [
    "m1.png",
    "m2.png",
    "m3.png",
    "m4.png",
    "m5.png",
    "m6.png",
    "m7.png",
    "m8.png",
    "m9.png",
    "m10.png",
    "m11.png",
    "m12.png",
    "m13.png",
    "m14.png",
    "m15.png",
    "m16.png",
  ];

  // Double the array for seamless looping
  const displayProjects = [...projects, ...projects];

  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden font-sans">
      {/* Section Header */}
      <div className="px-6 lg:px-16 mb-16">
        <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-xs mb-4">
          Projects Showcase
        </p>
      </div>

      <div className="relative flex items-center">
        {/* Infinite Scroll Track */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
          {displayProjects.map((src, index) => (
            <div
              key={index}
              // Narrower width for mobile portrait orientation
              className="flex w-[260px] md:w-[320px] items-center justify-center px-4"
            >
              <div className="relative w-full aspect-[9/19] overflow-hidden rounded-[30px] md:rounded-[40px] border-[6px] md:border-[8px] border-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-[1.05] hover:shadow-blue-500/20">
                {/* Screenshot Image */}
                <Image
                  src={`/${src}`}
                  alt={`Mobile Project ${index}`}
                  fill
                  className="object-cover"
                  priority={index < 6}
                />

                {/* Glassy Notch/Dynamic Island Detail */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 hidden md:block" />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          /* Faster speed (35s) because items are narrower */
          animation: infinite-scroll 35s linear infinite;
        }

        :global(html, body) {
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
