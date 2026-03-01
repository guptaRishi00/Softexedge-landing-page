"use client";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-24 lg:py-40 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Side: Content */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold text-[#04034C] tracking-tight">
            Designing Brands <br />
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              People Trust
            </span>
          </h1>

          <p className="text-base md:text-lg text-black/70 max-w-md leading-relaxed font-medium">
            We combine strategic thinking with world-class design to help
            innovating companies scale their impact and define their legacy.
          </p>

          <div>
            <Link
              href="/services"
              className="inline-block px-10 py-4 rounded-full font-bold text-white 
                         bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] 
                         shadow-lg shadow-blue-200/50 hover:scale-105 active:scale-95 
                         transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Side: Form Container (Black) */}
        <div className="w-full lg:w-[45%] bg-black rounded-[30px] p-6 lg:p-10 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Let's Talk</h2>
            <p className="text-sm text-white/60">
              Fill out the form and we'll be in touch.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm text-white/90 font-medium ml-2">
                Full Name*
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-zinc-900/80 text-white border border-white/10 rounded-full p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F85EA] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-white/90 font-medium ml-2">
                Work Email*
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full bg-zinc-900/80 text-white border border-white/10 rounded-full p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F85EA] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-white/90 font-medium ml-2">
                How can we help?
              </label>
              <div className="relative">
                <select className="w-full bg-zinc-900/80 text-white border border-white/10 rounded-full p-4 text-sm appearance-none focus:outline-none cursor-pointer">
                  <option value="">Select an option</option>
                  <option value="branding">Branding</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="development">Development</option>
                </select>
                <IoIosArrowDown className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-white/50 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 rounded-full text-lg font-bold bg-white text-black 
                         hover:bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] 
                         hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
