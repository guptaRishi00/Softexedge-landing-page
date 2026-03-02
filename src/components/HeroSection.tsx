"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MoveRight, SendHorizontal } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [service, setService] = useState("");

  return (
    <section className="relative w-full bg-white py-20 lg:py-40 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* LEFT: CONTENT */}
        <div className="flex flex-col gap-10 w-full lg:w-[55%]">
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 border-gray-300 border w-fit">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F85EA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F85EA]"></span>
              </div>
              <span className="text-[12px] font-bold bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent uppercase tracking-widest">
                Available for New Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[0.9] font-extrabold text-[#04034C] tracking-tighter">
              Building Websites <br />
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                That Convert
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
            We build high-performance websites on{" "}
            <span className="text-[#04034C]">
              Shopify, WordPress, and custom stacks
            </span>{" "}
            that drive growth.
          </p>

          <div className="pt-2">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-[#04034C] px-10 py-5 rounded-full text-[16px] font-medium text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-900/5"
            >
              <span>View our services</span>
              <MoveRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="w-full lg:w-[40%]">
          <div className="relative p-[1.5px] rounded-[40px] bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]">
            <div className="relative bg-white rounded-[38.5px] p-10 lg:p-12">
              <div className="mb-12">
                <h2 className="text-4xl font-black text-[#04034C] tracking-tight">
                  Let&apos;s Talk<span className="text-[#2F85EA]">.</span>
                </h2>
              </div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="relative group">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 text-[#04034C] text-[16px] focus:outline-none focus:border-[#2F85EA] transition-all"
                  />
                  <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[12px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[12px]">
                    Full Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 text-[#04034C] text-[16px] focus:outline-none focus:border-[#2F85EA] transition-all"
                  />
                  <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[12px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[12px]">
                    Work Email
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Website URL - NEW FIELD */}
                <div className="relative group">
                  <input
                    type="url"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 text-[#04034C] text-[16px] focus:outline-none focus:border-[#2F85EA] transition-all"
                  />
                  <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[12px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[12px]">
                    Website URL
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Dropdown */}
                <div className="relative group">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 text-[#04034C] text-[16px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer"
                  >
                    <option value="" disabled hidden></option>
                    <option value="shopify">Shopify Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="custom">Custom Website</option>
                  </select>

                  <label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 
                    ${
                      service
                        ? "-top-5 text-[12px] text-[#2F85EA] font-bold"
                        : "top-3 text-gray-400 text-[16px] group-focus-within:-top-5 group-focus-within:text-[12px] group-focus-within:text-[#2F85EA] group-focus-within:font-bold"
                    }`}
                  >
                    What do you need?
                  </label>

                  <IoIosArrowDown className="absolute right-0 top-4 text-gray-300 group-focus-within:rotate-180 transition-transform" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                <button
                  type="submit"
                  className="relative w-full group overflow-hidden rounded-full p-[1.5px] transition-transform active:scale-95"
                >
                  <div className="relative flex items-center justify-center gap-3 bg-[#04034C] text-white py-4.5 rounded-full transition-all duration-300 hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] cursor-pointer">
                    <span className="font-medium tracking-tight">
                      Send Message
                    </span>
                    <SendHorizontal
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
