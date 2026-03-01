"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 font-sans transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.06)] border-b border-gray-200/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-[#04034C] flex items-center gap-1.5"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-20 h-20"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Company Dropdown */}
            <div className="group relative">
              <button className="nav-link-underline flex items-center gap-1.5 text-[15px] text-gray-700 font-medium hover:text-[#04034C] transition-colors py-2">
                Company
                <ChevronDown
                  size={15}
                  className="group-hover:rotate-180 transition-transform duration-300 text-gray-400 group-hover:text-[#2F85EA]"
                />
              </button>
              <div className="absolute top-full -left-4 pt-4 w-52">
                <div className="dropdown-enter bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl p-2 space-y-0.5">
                  <Link
                    href="/about"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl text-sm text-gray-600 hover:text-[#04034C] transition-all group/item"
                  >
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2F85EA] text-sm group-hover/item:bg-blue-100 transition-colors">
                      ✦
                    </span>
                    About Us
                  </Link>
                  <Link
                    href="/team"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl text-sm text-gray-600 hover:text-[#04034C] transition-all group/item"
                  >
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2F85EA] text-sm group-hover/item:bg-blue-100 transition-colors">
                      👥
                    </span>
                    Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="group relative">
              <button className="nav-link-underline flex items-center gap-1.5 text-[15px] text-gray-700 font-medium hover:text-[#04034C] transition-colors py-2">
                Services
                <ChevronDown
                  size={15}
                  className="group-hover:rotate-180 transition-transform duration-300 text-gray-400 group-hover:text-[#2F85EA]"
                />
              </button>
              <div className="absolute top-full -left-4 pt-4 w-52">
                <div className="dropdown-enter bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl p-2 space-y-0.5">
                  <Link
                    href="/services"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl text-sm text-gray-600 hover:text-[#04034C] transition-all group/item"
                  >
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2F85EA] text-sm group-hover/item:bg-blue-100 transition-colors">
                      🎨
                    </span>
                    All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <Link
              href="/case-studies"
              className="nav-link-underline text-[15px] text-gray-700 font-medium hover:text-[#04034C] transition-colors py-2"
            >
              Case Study
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group/cta px-7 py-2.5 rounded-full font-semibold text-sm text-white
                         bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]
                         transition-all duration-300 transform hover:scale-105
                         shadow-[0_4px_20px_rgba(4,3,76,0.2)] hover:shadow-[0_8px_30px_rgba(47,133,234,0.3)]
                         inline-flex items-center gap-2"
            >
              Let&apos;s Talk
              <ArrowRight
                size={15}
                className="group-hover/cta:translate-x-0.5 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-700"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-8 space-y-2">
          <Link
            href="/about"
            className="block px-4 py-3.5 text-lg font-semibold text-gray-700 hover:text-[#04034C] hover:bg-gray-50 rounded-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Company
          </Link>
          <Link
            href="/services"
            className="block px-4 py-3.5 text-lg font-semibold text-gray-700 hover:text-[#04034C] hover:bg-gray-50 rounded-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="block px-4 py-3.5 text-lg font-semibold text-gray-700 hover:text-[#04034C] hover:bg-gray-50 rounded-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Case Study
          </Link>
          <div className="pt-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white
                          bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]
                          shadow-[0_8px_30px_rgba(47,133,234,0.25)]
                          active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
