"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 px-6 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column (4-span) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="SoftEXedge Logo"
                width={180}
                height={50}
                className="w-40 lg:w-48 object-contain"
              />
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm font-medium">
              We combine strategic thinking with world-class design to help
              innovative companies scale their impact and define their legacy.
            </p>
            {/* Social Icons with Brand Gradient */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center 
                             transition-all duration-300 hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] 
                             hover:border-transparent hover:scale-110"
                  >
                    <Icon className="text-xl" />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Navigation Columns (2-span each) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xl font-bold tracking-tight">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-[#2F85EA] transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xl font-bold tracking-tight">Services</h4>
            <ul className="space-y-4">
              {["UI/UX Design", "Web Development", "Branding", "Strategy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-[#2F85EA] transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter Column (4-span) */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xl font-bold tracking-tight">Stay Updated</h4>
            <p className="text-white/60 font-medium">
              Subscribe to our newsletter for the latest design insights.
            </p>
            <form
              className="relative group"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-zinc-900 border border-white/5 rounded-full py-4 px-6 focus:outline-none 
                           focus:ring-2 focus:ring-[#2F85EA] transition-all font-medium text-white"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full font-bold 
                           bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white 
                           transition-transform hover:scale-105 active:scale-95"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium">
            © {currentYear} SoftEXedge. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-white/40 hover:text-white text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/40 hover:text-white text-sm font-medium transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
