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
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.status === "error") {
        console.error("Newsletter subscription error:", data.message);
        alert("There was an error subscribing. Please try again.");
        return;
      }

      alert("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Network error. Please try again.");
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
    <footer className="px-4 pt-12 md:px-6 lg:px-10 lg:pt-20">
      <section className="w-full pb-10 lg:pb-14 flex flex-col items-center gap-10 lg:gap-12">
        {/* Main Black Card */}
        <div className="w-full bg-black rounded-[20px] p-8 md:p-12 lg:px-16 lg:py-20 xl:px-20 xl:py-24 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-24 h-full">
            {/* Left Column: Branding & Trust */}
            <div className="flex flex-col justify-between h-full gap-10 lg:gap-14">
              <div className="space-y-8 md:space-y-10 lg:space-y-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] lg:leading-[1.2em] tracking-tight">
                  Designing Brands <br />
                  <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                    People Trust
                  </span>
                </h2>

                {/* Social Icons */}
                <div className="flex items-center gap-3 md:gap-5">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      className="group transition-all"
                      aria-label={name}
                    >
                      <div className="p-3 md:p-3.5 rounded-full border border-white/10 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className="text-white group-hover:scale-110 transition-transform md:w-5 md:h-5"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-sm leading-relaxed font-medium">
                Brands built on trust, <br className="hidden sm:block" /> chosen
                by people.
              </p>
            </div>

            {/* Right Column: Newsletter & Links */}
            <div className="flex flex-col justify-between h-full gap-12 lg:gap-16">
              {/* Newsletter Section */}
              <div className="space-y-6">
                <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">
                  Newsletter
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative flex-1 w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-full px-5 py-3.5 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#2F85EA]/50 transition-all placeholder:text-zinc-700 text-sm md:text-base"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-white text-black hover:bg-linear-to-r hover:from-[#3445E7] hover:to-[#07D6F3] hover:text-white px-7 lg:px-8 py-3.5 md:py-4 rounded-full cursor-pointer text-sm md:text-base font-medium transition-all whitespace-nowrap shadow-lg active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10">
                <div className="space-y-6 md:space-y-8">
                  <h3 className="text-white text-base md:text-lg font-bold">
                    Company
                  </h3>
                  <ul className="space-y-4 md:space-y-5 text-zinc-300 text-sm md:text-base">
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
                          className="hover:text-white transition-colors cursor-pointer py-2 inline-block min-w-[48px]"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <h3 className="text-white text-base md:text-lg font-bold">
                    Quick Links
                  </h3>
                  <ul className="space-y-4 md:space-y-5 text-zinc-300 text-sm md:text-base">
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="hover:text-white transition-colors py-2 inline-block min-w-[48px]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms-and-conditions"
                        className="hover:text-white transition-colors py-2 inline-block min-w-[48px]"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand & Copyright Bar */}
        <div className="flex w-full flex-col md:flex-row items-center justify-between px-4 lg:px-5 gap-6 md:gap-8">
          <div className="relative h-9 w-44 md:h-12 md:w-48">
            <Image
              src="/logo.svg"
              alt="SoftEx Edge Logo"
              fill
              className="object-contain object-center md:object-left"
            />
          </div>
          <p className="text-zinc-700 font-medium text-xs md:text-sm lg:text-base text-center md:text-right">
            Copyright © 2026 SoftEXedge Inc. <br className="sm:hidden" /> All
            rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
