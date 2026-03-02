"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonBase = "px-6 py-2.5 rounded-full text-[14px] font-medium border transition-all duration-300";
  const buttonIdle = "text-gray-700 border-gray-300 bg-transparent";
  const buttonHover =
    "hover:border-transparent hover:text-white hover:bg-gradient-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "py-3 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-346 mx-auto px-6 lg:px-16 flex justify-between items-center">
        {/* LEFT: Logo */}
        <Link href="/" className="transition-opacity ">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={130}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* RIGHT: Buttons */}
        <div className="flex items-center gap-3">
          {/* Schedule A Call */}
          <Link
            href="/schedule"
            className={`hidden md:flex items-center gap-2 group ${buttonBase} ${buttonIdle} ${buttonHover}`}
          >
            <CalendarDays
              size={16}
              className="text-gray-400 group-hover:text-white "
            />
            <span>Schedule A Call</span>
          </Link>

          {/* Get In Touch */}
          <Link
            href="/contact"
            className={`${buttonBase} ${buttonIdle} ${buttonHover}`}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
