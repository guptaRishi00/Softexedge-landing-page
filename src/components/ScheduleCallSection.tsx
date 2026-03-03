"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const AvatarGroup = ({ avatars }: { avatars: string[] }) => (
  <div className="flex -space-x-2">
    {avatars.map((src, i) => (
      <div
        key={i}
        className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-100"
      >
        <img src={src} className="w-full h-full object-cover" alt="User" />
      </div>
    ))}
  </div>
);

const ScheduleCallSection = () => {
  const brandGradient =
    "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]";

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&auto=format&fit=crop",
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#FDFCF8] px-4 sm:px-8 lg:px-20 overflow-hidden font-sans">
      {/* Structural Background Lines - Hidden on very small screens to avoid clutter */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300" />
        <div className="absolute top-[30%] left-0 w-[10%] sm:w-[20%] h-[1px] bg-gray-300" />
        <div className="absolute top-[70%] left-0 w-[10%] sm:w-[20%] h-[1px] bg-gray-300" />
        <div className="absolute top-[30%] right-0 w-[15%] sm:w-[25%] h-[1px] bg-gray-300" />
        <div className="absolute top-[70%] right-0 w-[15%] sm:w-[25%] h-[1px] bg-gray-300" />
        <div className="hidden sm:block absolute top-[30%] left-[20%] w-[1px] h-[40%] bg-gray-300" />
        <div className="hidden sm:block absolute top-[30%] right-[25%] w-[1px] h-[40%] bg-gray-300" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Ready to Take This Forward? <br className="hidden sm:block" />
            Let’s{" "}
            <span className={`${brandGradient} bg-clip-text text-transparent`}>
              Schedule Call.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mx-auto font-medium leading-relaxed px-4">
            We maximize revenue and customer satisfaction by improving the
            efficiency of your digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-12 items-center gap-4 relative">
          {/* Left Side Labels (Desktop Only) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col gap-32 pr-10">
            <div className="space-y-3 text-right">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Onboarding Call
              </p>
              <div className="flex justify-end">
                <AvatarGroup avatars={avatars.slice(0, 3)} />
              </div>
            </div>
            <div className="space-y-3 text-right">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Discovery Call
              </p>
              <div className="flex justify-end">
                <AvatarGroup avatars={avatars.slice(1, 4)} />
              </div>
            </div>
          </div>

          {/* Center Video Frame */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative aspect-square sm:aspect-video min-h-[320px] sm:min-h-0 rounded-[30px] sm:rounded-[40px] overflow-hidden border-[8px] sm:border-[12px] border-white shadow-2xl shadow-blue-900/10 group bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&auto=format&fit=crop&q=80"
                className="w-full h-full object-[center_30%] object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Meeting Interface"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />

              {/* Action Buttons inside Frame - Adjusted for mobile visibility */}
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-[85%] sm:w-max items-center">
                <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-gray-900 px-5 sm:px-6 py-3 rounded-full font-bold text-[12px] sm:text-[13px] shadow-lg hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:text-white transition-all cursor-pointer whitespace-nowrap">
                  <CalendarDays
                    size={16}
                    className="text-[#2F85EA] group-hover:text-white transition-colors"
                  />
                  Schedule A Call
                </button>

                <button
                  className={`w-full sm:w-auto ${brandGradient} text-white px-5 sm:px-6 py-3 rounded-full font-bold text-[12px] sm:text-[13px] shadow-lg hover:opacity-90 transition-all cursor-pointer whitespace-nowrap`}
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side Labels (Desktop Only) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col gap-32 pl-10">
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Regular Catchup
              </p>
              <AvatarGroup avatars={avatars.slice(0, 3)} />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Final Delivery Call
              </p>
              <AvatarGroup avatars={avatars.slice(2, 4)} />
            </div>
          </div>
        </div>

        {/* Mobile-Only Labels (Optional visibility fix) */}
        <div className="flex justify-between mt-8 lg:hidden px-2 opacity-60">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-bold text-gray-900 uppercase tracking-tighter">
              Discovery
            </p>
            <AvatarGroup avatars={avatars.slice(0, 2)} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-bold text-gray-900 uppercase tracking-tighter">
              Delivery
            </p>
            <AvatarGroup avatars={avatars.slice(2, 4)} />
          </div>
        </div>

        {/* Duplicate Mobile Bottom Buttons (Matches your original structure) */}
        <div className="flex flex-col gap-3 mt-10 lg:hidden px-2">
          <button className="flex items-center justify-center gap-2 border-2 border-gray-900 px-8 py-4 rounded-full font-bold text-gray-900 active:bg-gray-100 transition-colors">
            Schedule A Call
          </button>
          <button
            className={`${brandGradient} text-white px-8 py-4 rounded-full font-bold shadow-lg active:scale-[0.98] transition-all`}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCallSection;
