"use client";

import Image from "next/image";
import Link from "next/link";
// 1. Import icons from lucide-react
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  // 2. Define a map for the icons to keep the loop clean
  const socialLinks = [
    { name: "instagram", href: "https://instagram.com", Icon: Instagram },
    { name: "facebook", href: "https://facebook.com", Icon: Facebook },
    { name: "linkedin", href: "https://linkedin.com", Icon: Linkedin },
    { name: "x", href: "https://x.com", Icon: Twitter }, // Lucide uses 'Twitter' for the X icon style
  ];

  return (
    <footer className="px-5">
      <section className="w-full pb-6 min-h-screen flex flex-col items-center justify-between gap-10">
        <div className="w-full min-h-[90vh] bg-black rounded-[20px] lg:p-20 p-10 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 h-full">
            {/* Left Column */}
            <div className="flex flex-col justify-between h-full min-h-[450px]">
              <div className="space-y-12">
                <h2 className="text-5xl lg:text-[84px] font-bold leading-[1] tracking-tight">
                  Designing <br /> Brands <br />
                  <span className="bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                    People Trust
                  </span>
                </h2>

                {/* 3. Updated Social Icons Section */}
                <div className="flex items-center gap-6">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      className="group transition-all"
                      aria-label={name}
                    >
                      <div className="p-3 rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                          className="text-white group-hover:scale-110 transition-transform"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-white text-xl lg:text-2xl max-w-sm leading-relaxed font-medium mt-12 lg:mt-0">
                Designing Brands That <br /> People Trust And Choose
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between h-full space-y-16 lg:space-y-0">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-zinc-900/60 border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:ring-1 focus:ring-[#2F85EA] transition-all placeholder:text-zinc-600 text-lg"
                  />
                </div>
                <button className="w-full sm:w-auto bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white px-12 py-5 rounded-full cursor-pointer text-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg">
                  Subscribe
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div className="space-y-8">
                  <h4 className="text-white text-xl font-bold">Company</h4>
                  <ul className="space-y-5 text-zinc-400 text-lg">
                    {["Home", "About Us", "Services", "Contact", "Career"].map(
                      (item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            {item}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="space-y-8">
                  <h4 className="text-white text-xl font-bold">Services</h4>
                  <ul className="space-y-5 text-zinc-400 text-lg">
                    {[
                      "Branding & Identity",
                      "UI/UX Design",
                      "Digital Marketing",
                      "Video Production",
                      "Development",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-8">
                  <h4 className="text-white text-xl font-bold">Quick Links</h4>
                  <ul className="space-y-5 text-zinc-400 text-lg">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Terms & Condition
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand & Copyright Bar */}
        <div className="flex w-full flex-col md:flex-row items-center justify-between lg:px-6 gap-6">
          <div className="relative h-14 w-56">
            <Image
              src="/logo.svg"
              alt="SoftEx Edge Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-zinc-800 font-medium text-lg text-center md:text-right">
            Copyright © 2026 SoftEXedge Inc. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
