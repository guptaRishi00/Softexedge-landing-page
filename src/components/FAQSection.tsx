"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "How long does a typical design project take?",
      answer:
        "Most of our branding and UI/UX projects are delivered within 4 to 8 weeks, depending on the complexity and scope of the brand strategy required.",
    },
    {
      id: 2,
      question: "Do you offer full-stack development services?",
      answer:
        "Yes, we combine world-class design with high-performance development to build scalable, secure, and fast-loading digital products.",
    },
    {
      id: 3,
      question: "How do you handle project communication?",
      answer:
        "We use a combination of Slack for real-time updates and weekly strategy calls to ensure full transparency throughout the project lifecycle.",
    },
    {
      id: 4,
      question: "Can you help with post-launch brand growth?",
      answer:
        "Absolutely. We provide strategic consulting and performance design updates to help your brand continue scaling long after the initial launch.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with SoftEXedge Typography */}
        <div className="mb-20">
          <p className="text-[#2F85EA] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#04034C] tracking-tight">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              Queries
            </span>
          </h2>
        </div>

        {/* Accordion List - No Links or Redirects */}
        <div className="flex flex-col w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="w-full border-b border-gray-100 py-10 last:border-none"
              >
                <button
                  className="flex items-center justify-between w-full text-left group transition-all duration-300"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-xl lg:text-3xl font-bold max-w-2xl transition-all duration-300 ${
                      isOpen
                        ? "text-[#2F85EA]"
                        : "text-[#04034C] group-hover:translate-x-2"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  {/* Arrow Container with Signature Gradient */}
                  <div
                    className={`border rounded-full p-2 lg:p-4 transition-all duration-500 ${
                      isOpen
                        ? "rotate-45 bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] border-transparent"
                        : "border-gray-200 bg-transparent group-hover:border-[#04034C]"
                    }`}
                  >
                    <MdArrowOutward
                      className={`text-xl lg:text-3xl transition-colors duration-500 ${
                        isOpen ? "text-white" : "text-[#04034C]/40"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-black/60 text-lg lg:text-xl mt-8 max-w-4xl leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
