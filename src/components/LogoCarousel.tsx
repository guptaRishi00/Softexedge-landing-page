"use client";

import Image from "next/image";

const LogoCarousel = () => {
  const projects = [
    "one.png",
    "two.png",

    "four.png",
    "five.png",
    "six.png",
    "seven.png",
    "eight.png",
    "nine.png",
    "ten.png",
    "eleven.png",
    "twelve.png",
    "thirteen.png",
    "fourteen.png",
  ];

  const displayProjects = [...projects, ...projects];

  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      {/* Optional: Minimalist Title for Projects */}
      <div className="px-6 lg:px-16 mb-14">
        <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-black/40">
          Selected Works
        </h2>
      </div>

      <div className="relative flex items-center">
        {/* The Track */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
          {displayProjects.map((src, index) => (
            <div
              key={index}
              // w-[80vw] on mobile makes it feel huge. md:w-[60vw] on desktop keeps it balanced.
              className="flex w-[85vw] md:w-[65vw] items-center justify-center px-4"
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-[10px] md:rounded-[20px] border border-black/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                <Image
                  src={`/${src}`}
                  alt={`Project Screenshot ${index}`}
                  fill
                  className="object-cover"
                  priority={index < 4}
                />

                {/* Subtle Overlay to keep it clean */}
                <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
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
          /* Slower, smooth speed for large screenshots */
          animation: infinite-scroll 50s linear infinite;
        }

        /* Essential for full-bleed layouts */
        :global(html, body) {
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
