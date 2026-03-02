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
      "We were initially skeptical about the impact of just revamping our collection and product pages, but The Landing Page Company proved us wrong. The changes they implemented have led to a significant increase in our performance metrics.",
    author: "Nitin Pamnani",
    role: "Founder - Itokri",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww", // Replace with actual image paths
    rating: "5.0",
  },
  {
    quote:
      "Even with the challenging task of raising our product prices, The Landing Page Company managed to improve our conversion rate and average order value significantly. The numbers speak for themselves—our customers are more engaged.",
    author: "Suchita A Mukerji",
    role: "Founder - The Basic Women",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
    rating: "5.0",
  },
  {
    quote:
      "The CRO exercise we did with The Landing Page Company couldn't have come at a better time. Just a week before Mother's Day—a peak season for us—their work contributed to a substantial revenue increase.",
    author: "Varun Todi",
    role: "Founder - Oye Happy",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    rating: "5.0",
  },
  {
    quote:
      "Partnering with The Landing Page Company to revamp our top 9 product pages was one of the best decisions we've made. Their ability to blend aesthetics with functionality truly transformed our online presence.",
    author: "Sachin Darbarwar",
    role: "Founder - Zeroharm",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: "5.0",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#F3F4F6] py-20 lg:py-28 px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Avatar Group */}
        <div className="flex justify-center -space-x-2 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
            >
              <Image
                src={`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D`}
                width={200}
                height={200}
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Heading with your custom gradient */}
        <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-4">
          <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
            100+
          </span>{" "}
          Happy Clients
        </h2>
        <p className="text-gray-600 font-medium mb-14">
          Trusted by thousands of people
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between text-left"
            >
              <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
                {item.quote}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
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
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                  <span className="text-xs font-bold text-gray-700">
                    {item.rating}
                  </span>
                  <span className="text-orange-400 text-xs">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
