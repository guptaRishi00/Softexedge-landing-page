"use client";

import Image from "next/image";

const LogoCarousel = () => {
  const projects = [
    "1.PNG",
    "2.PNG",
    "3.PNG",
    "4.PNG",
    "5.PNG",
    "6.PNG",
    "7.PNG",
    "8.PNG",
    "9.PNG",
    "10.PNG",
    "11.PNG",
    "12.PNG",
    "13.PNG",
  ];

  const displayProjects = [...projects, ...projects];

  return (
    // Reduced section padding from py-20/28 to py-12/16
    <section className="w-full bg-white py-12 lg:py-16 overflow-hidden font-sans">
      {/* Reduced bottom margin from mb-16 to mb-10 */}
      <div className="px-6 lg:px-16 mb-10">
        <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-xs mb-3">
          Our Projects
        </p>
      </div>

      <div className="relative flex items-center">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] cursor-pointer">
          {displayProjects.map((src, index) => (
            <div
              key={index}
              // Reduced horizontal gap from px-3/5 to px-1.5/2.5
              className="flex w-[220px] md:w-[280px] items-center justify-center px-1.5 md:px-2.5"
            >
              <div className="relative w-full aspect-[10/19] overflow-hidden rounded-[10px] md:rounded-[12px] border border-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-700 hover:scale-[1.03] hover:shadow-blue-500/10">
                <Image
                  src={`/${src}`}
                  alt={`Project Screenshot ${index}`}
                  fill
                  className=""
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Adjusted fade width to match the tighter layout */}
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
          animation: infinite-scroll 40s linear infinite;
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
