"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;
    setIsSubmitting(true);

    const payload = {
      formType: "Newsletter Subscription",
      email: email,
      timestamp: new Date().toLocaleString(),
    };

    try {
      // Using your provided Google Apps Script Web App URL
      await fetch(
        "https://script.google.com/macros/s/AKfycbzSj-Aq7HibWvjSDPIPgCN8yFKJOegEsbRAzF3R5xwtgs1rZj9x-8BUFTwH-XPdSfFy4Q/exec",
        {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      alert("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      alert("There was an error subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "instagram",
      href: "https://www.instagram.com/softexedge/",
      Icon: Instagram,
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/share/1AcNcxaqrX/?mibextid=wwXIfr",
      Icon: Facebook,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/company/softexedge/posts/?feedView=all",
      Icon: Linkedin,
    },
  ];

  return (
    <footer className="px-4 md:px-6 lg:px-10">
      <section className="w-full pb-8 flex flex-col items-center gap-12">
        {/* Main Black Card */}
        <div className="w-full min-h-fit lg:min-h-[90vh] bg-black rounded-[20px] lg:rounded-[20px] p-8 md:p-12 lg:p-20 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 h-full">
            {/* Left Column: Branding & Trust */}
            <div className="flex flex-col justify-between h-full space-y-12 lg:space-y-0">
              <div className="space-y-8 md:space-y-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-bold leading-[1.1] lg:leading-[1] tracking-tight">
                  Designing <br /> Brands <br />
                  <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                    People Trust
                  </span>
                </h2>

                {/* Social Icons */}
                <div className="flex items-center gap-4 md:gap-6">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      className="group transition-all"
                      aria-label={name}
                    >
                      <div className="p-3 md:p-4 rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-white group-hover:scale-110 transition-transform md:w-6 md:h-6"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-zinc-300 text-lg lg:mt-10 md:text-xl lg:text-2xl max-w-sm leading-relaxed font-medium pt-8 lg:pt-0">
                Brands built on trust, <br className="hidden sm:block" /> chosen
                by people.
              </p>
            </div>

            {/* Right Column: Newsletter & Links */}
            <div className="flex flex-col justify-between h-full space-y-16 lg:space-y-0">
              {/* Newsletter Section */}
              <div className="space-y-6">
                <p className="text-zinc-400 text-sm uppercase tracking-widest font-bold">
                  Newsletter
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative flex-1 w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-full px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-2 focus:ring-[#2F85EA]/50 transition-all placeholder:text-zinc-600 text-base md:text-lg"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-white text-black hover:bg-linear-to-r hover:from-[#3445E7] hover:to-[#07D6F3] hover:text-white px-10 md:px-12 py-4 md:py-5 rounded-full cursor-pointer text-base md:text-lg font-medium transition-all whitespace-nowrap shadow-lg active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 lg:gap-10">
                <div className="space-y-6 md:space-y-8">
                  <h4 className="text-white text-lg md:text-xl font-bold">
                    Company
                  </h4>
                  <ul className="space-y-4 md:space-y-5 text-zinc-400 text-base md:text-lg">
                    {[
                      { label: "Home", href: "#hero" },
                      { label: "About Us", href: "#about" },
                      { label: "Services", href: "#services" },
                      { label: "Contact", href: "#contact" },
                      { label: "Industries", href: "#industries" },
                    ].map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .querySelector(item.href)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="hover:text-white transition-colors cursor-pointer"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 md:space-y-8 col-span-2 md:col-span-1">
                  <h4 className="text-white text-lg md:text-xl font-bold">
                    Quick Links
                  </h4>
                  <ul className="space-y-4 md:space-y-5 text-zinc-400 text-base md:text-lg">
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
        <div className="flex w-full flex-col md:flex-row items-center justify-between px-2 lg:px-6 gap-8">
          <div className="relative h-10 w-48 md:h-14 md:w-56">
            <Image
              src="/logo.svg"
              alt="SoftEx Edge Logo"
              fill
              className="object-contain object-center md:object-left"
            />
          </div>
          <p className="text-zinc-500 font-medium text-sm md:text-base lg:text-lg text-center md:text-right">
            Copyright © 2026 SoftEXedge Inc. <br className="sm:hidden" /> All
            rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
