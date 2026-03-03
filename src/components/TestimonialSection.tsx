"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "SoftEXedge built us a custom Shopify store that completely transformed our online sales. Within the first month, our conversion rate jumped by 40% and the site loads faster than ever.",
    author: "Nitin Pamnani",
    role: "Authentica",
    image: "/authentica.png",
    rating: "4.5",
  },
  {
    quote:
      "Our WordPress website was outdated and slow. SoftEXedge redesigned it from the ground up — it’s now mobile-first, blazing fast, and our organic traffic has doubled in three months.",
    author: "Suchita A Mukerji",
    role: "Neuralinq",
    image: "/neuralinq.png",
    rating: "4.7",
  },
  {
    quote:
      "We needed a custom web application for our gifting platform, and SoftEXedge delivered beyond expectations. The checkout flow they built contributed to a 35% revenue increase during our peak season.",
    author: "Varun Todi",
    role: "Bloomvest",
    image: "/bloomvest.svg",
    rating: "4.8",
  },
  {
    quote:
      "SoftEXedge revamped our e-commerce product pages with a focus on speed and UX. Their ability to blend design with performance truly transformed our online store and boosted our sales.",
    author: "Sachin Darbarwar",
    role: "Casino Scan",
    image: "/casino.png",
    rating: "4.9",
  },
];

// Array of distinct avatar images for the header
const headerAvatars = [
  "/casino.png",
  "/neuralinq.png",
  "/authentica.png",
  "/bloomvest.svg",
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#F3F4F6] py-20 lg:py-28 px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Avatar Group with Distinct Images */}
        <div className="flex justify-center -space-x-3 mb-6">
          {headerAvatars.map((src, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden bg-gray-200 shadow-sm"
            >
              <Image
                src={src}
                width={48}
                height={48}
                alt={`Client ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Optional "plus" indicator for extra flair */}
          <div className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden bg-[#04034C] flex items-center justify-center shadow-sm">
            <span className="text-[10px] font-bold text-white">+100</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tighter">
          <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
            100+
          </span>{" "}
          Happy Clients
        </h2>
        <p className="text-gray-500 font-medium mb-16 text-lg">
          Trusted by businesses worldwide for high-performance web development
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl  flex flex-col justify-between text-left transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 border border-transparent hover:border-blue-100/50"
            >
              <div className="mb-8">
                {/* Visual Quote Icon for style */}
                <span className="text-4xl font-serif text-blue-100 block h-6 leading-none select-none">
                  “
                </span>
                <p className="text-gray-600 leading-relaxed text-[15px] italic">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 ring-2 ring-gray-50">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50/60 px-2 py-1 rounded-lg border border-amber-100/50">
                  <span className="text-[11px] font-bold text-amber-700">
                    {item.rating}
                  </span>
                  <span className="text-amber-400 text-[10px]">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
