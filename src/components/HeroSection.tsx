"use client";

import { IoIosArrowDown } from "react-icons/io";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 lg:px-16 overflow-hidden">
      {/* SCALED UP AURA: Soft anchoring glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-blue-50/60 to-cyan-50/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* LEFT: COMMANDING CONTENT */}
        <div className="flex flex-col gap-10 w-full lg:w-[55%]">
          <div className="space-y-6">
            <div className="flex items-center gap-4 border border-blue-200/60 bg-blue-50/30 rounded-full px-4 py-1.5 w-max">
              <span className="text-[13px] font-bold text-[#3445E7]/70">
                Web Development Experts
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[0.95] font-extrabold text-[#04034C] tracking-tighter">
              Building Websites <br />
              <span className="bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                That Convert
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed font-medium">
            We build high-performance websites on{" "}
            <span className="text-[#04034C]">Shopify, WordPress, and custom stacks</span>{" "}
            that drive traffic, engage visitors, and grow your revenue.
          </p>

          <div className="pt-2">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-white px-10 py-4 rounded-full border border-gray-300
               text-[16px] font-bold text-[#04034C]
               hover:text-white hover:border-transparent
               hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3]
               hover:shadow-lg hover:shadow-blue-500/20
               active:scale-95 transition-all duration-300"
            >
              <span>View our services</span>

              {/* Animated Arrow Icon */}
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <MoveRight size={20} />
              </div>
            </Link>
          </div>
        </div>

        {/* RIGHT: PREMIUM FORM CARD */}
        <div className="w-full lg:w-[42%]">
          <div className="bg-white rounded-[32px] p-10 lg:p-12 border border-gray-200/80 shadow-[0_20px_60px_-15px_rgba(4,3,76,0.08)] hover:shadow-[0_30px_80px_-15px_rgba(4,3,76,0.12)] transition-shadow duration-500 relative z-10">
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#04034C] tracking-tight">
                Let&apos;s Talk
              </h2>
              <p className="text-[15px] text-gray-400 mt-2">
                Fill out the form and we&apos;ll reach out shortly.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-[16px] focus:outline-none focus:border-[#2F85EA] transition-all placeholder:text-gray-400"
                />
                {/* Focus Line Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2F85EA] group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="group relative">
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-[16px] focus:outline-none focus:border-[#2F85EA] transition-all placeholder:text-gray-400"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2F85EA] group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="relative group">
                <select className="w-full bg-transparent border-b border-gray-300 py-4 text-[16px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer text-gray-400">
                  <option value="">What do you need?</option>
                  <option value="shopify">Shopify Development</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="custom">Custom Website</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="redesign">Website Redesign</option>
                </select>
                <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-[#2F85EA]" />
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2F85EA] group-focus-within:w-full transition-all duration-500" />
              </div>

              <button
                type="submit"
                className="w-full py-4.5 rounded-full text-[15px] font-bold text-white bg-[#04034C]
                           hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3]
                           hover:shadow-lg hover:shadow-blue-500/25
                           transition-all duration-500 transform cursor-pointer"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
