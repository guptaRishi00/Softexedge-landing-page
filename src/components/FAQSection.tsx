"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQSectionProps {
  onOpenPopup: () => void;
}

const FAQSection = ({ onOpenPopup }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "How can you deliver a professional website in just 7 days?",
      answer:
        "We use an optimized development workflow and high-performance frameworks that allow us to skip the 'bloat' and focus immediately on your branding and content. For Shopify, we utilize proven conversion-optimized structures to get you selling as fast as possible.",
    },
    {
      id: 2,
      question: "Should I choose Shopify or a Custom Website for my business?",
      answer:
        "If you're focused on E-commerce and want easy inventory management, Shopify is the gold standard. For service-based businesses or unique web apps requiring maximum speed and specific features, a custom stack (like Next.js or WordPress) is often better. We’ll help you pick the right one.",
    },

    {
      id: 4,
      question: "Will my website be mobile-friendly and SEO-optimized?",
      answer:
        "Every site we build is 'Mobile-First.' We ensure fast loading speeds, clean code for Google indexing, and responsive layouts that look perfect on iPhones, tablets, and desktops alike.",
    },
    {
      id: 5,
      question: "Do you provide support after the website goes live?",
      answer:
        "Yes. We provide a walkthrough to show you how to manage your new site, plus 30 days of post-launch technical support to ensure everything is running smoothly as you start receiving traffic.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white px-6 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Modern Minimal Header */}
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2F85EA] animate-pulse" />
            <span className="text-[11px] font-bold text-[#2F85EA] uppercase tracking-[0.2em]">
              Support
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            Common <br className="hidden lg:block" />
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              Questions.
            </span>
          </h2>
        </div>

        {/* Minimalist Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`group transition-all duration-500 rounded-[24px] ${
                  isOpen
                    ? "bg-gray-50/50 p-6 lg:p-8"
                    : "bg-transparent p-6 lg:p-8  rounded-none hover:bg-gray-50/30"
                }`}
              >
                <button
                  className="flex items-start justify-between w-full text-left gap-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex gap-6">
                    {/* Active Gradient Indicator */}
                    <div className="mt-2 hidden lg:block">
                      <div
                        className={`w-1 h-8 rounded-full transition-all duration-500 ${
                          isOpen
                            ? "bg-linear-to-b from-[#3445E7] to-[#07D6F3] scale-y-100"
                            : "bg-gray-200 scale-y-50 opacity-0"
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${
                        isOpen ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Minimal Plus/Minus Toggle */}
                  <div className="mt-1">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border transition-colors ${
                        isOpen
                          ? "bg-[#04034C] border-[#04034C] text-white"
                          : "border-gray-200 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-600"
                      }`}
                    >
                      <Plus size={20} strokeWidth={2.5} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="lg:pl-10">
                        <p className="text-gray-800 text-base lg:text-lg mt-6 max-w-3xl leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for a modern touch */}
        {/* Gradient Border Wrapper */}
        <div className="mt-20 p-[1px] rounded-[32px] bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] ">
          {/* Inner Glass Container */}
          <div className="p-8 rounded-[31px] bg-white backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Subtle internal glow */}
            <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent pointer-events-none" />

            <p className="text-[#04034C] font-bold text-lg text-center lg:text-left relative z-10">
              Still have more questions about your project?
            </p>

            <button
              onClick={onOpenPopup}
              className="relative z-10 px-8 py-4 border text-gray-900 hover:border-white border-gray-900 hover:text-white rounded-full font-bold text-sm hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] cursor-pointer active:scale-95"
            >
              Schedule a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
