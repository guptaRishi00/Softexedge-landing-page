"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

interface NavbarProps {
  onOpenPopup: () => void;
}

const Navbar = ({ onOpenPopup }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonBase =
    "px-6 py-2.5 rounded-full text-[14px] font-medium border cursor-pointer";
  const buttonIdle = "text-gray-700 border-gray-300 bg-transparent";
  const buttonHover =
    " hover:text-white hover:border-white hover:bg-gradient-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3]";

  return (
    <div className="top-0 w-full z-50">
      {/* Alert / Announcement Bar */}
      <div className="w-full bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white text-center py-2.5 px-4">
        <p className="text-[8px] sm:text-[13px] font-medium tracking-wide">
          Partner with an agency that prioritizes exceptional design and robust development.{" "}
          <a href="mailto:admin@softexedge.com" className="underline underline-offset-2 font-bold hover:text-white/80 transition-colors">
            Start your project →
          </a>
        </p>
      </div>

      <nav
        className={`w-full ${scrolled
          ? "py-3 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-343 mx-auto px-6 lg:px-16 flex justify-between items-center">
          {/* LEFT: Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="transition-opacity cursor-pointer"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={130}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
