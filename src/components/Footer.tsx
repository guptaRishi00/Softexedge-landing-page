"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const FOOTER_LINKS = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Web Development", href: "/services/dev" },
    { name: "Branding", href: "/services/branding" },
    { name: "Strategy", href: "/services/strategy" },
  ],
  socials: [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-white pt-20 lg:pt-28 pb-12 px-6 lg:px-16 overflow-hidden border-t border-white/10">
      {/* Background Subtle Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-[#2F85EA]/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <Image
                src="/logoWhite.svg"
                alt="SoftEXedge Logo"
                width={180}
                height={50}
                className="w-40 lg:w-48 object-contain transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-medium">
              We combine strategic thinking with world-class design to help
              innovative companies scale their impact and define their legacy.
            </p>
            <div className="flex gap-4">
              {FOOTER_LINKS.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center 
                             transition-all duration-300 hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] 
                             hover:border-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(47,133,234,0.3)]"
                >
                  <social.icon className="text-lg" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-[#2F85EA] transition-colors font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-px bg-[#2F85EA] mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-[#2F85EA] transition-colors font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-px bg-[#2F85EA] mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column - Refined with Rounded-Full */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-lg font-bold uppercase tracking-widest text-white mb-4">
                Stay Updated
              </h4>
              <p className="text-zinc-400 font-medium">
                Subscribe to our newsletter for the latest design insights.
              </p>
            </div>
            <form
              className="relative group max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-4 pl-7 pr-32 focus:outline-none 
                           focus:ring-2 focus:ring-[#2F85EA]/50 focus:border-[#2F85EA] transition-all font-medium text-white placeholder:text-zinc-600"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-7 rounded-full font-bold 
                           bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white 
                           transition-all hover:brightness-110 hover:shadow-lg active:scale-95 text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-zinc-500 text-sm font-medium">
              © {currentYear} SoftEXedge.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-zinc-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-zinc-500 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter"
          >
            Back to top
            <div className="p-2 rounded-full border border-white/10 group-hover:border-[#2F85EA] transition-colors">
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
