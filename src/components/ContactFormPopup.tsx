"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { SendHorizontal, X } from "lucide-react";

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormPopup = ({ isOpen, onClose }: ContactFormPopupProps) => {
  const router = useRouter();
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      formType: "Popup Contact Form",
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      website: formData.get("website") || "N/A", // Optional field check
      phoneNumber: formData.get("phoneNumber"),
      service: service || "Not Selected",
      timestamp: new Date().toLocaleString(),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzSj-Aq7HibWvjSDPIPgCN8yFKJOegEsbRAzF3R5xwtgs1rZj9x-8BUFTwH-XPdSfFy4Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        },
      );
      onClose();
      (e.target as HTMLFormElement).reset();
      setService("");
      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-[32px] p-8 lg:p-10 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                  Let&apos;s Talk<span className="text-[#2F85EA]">.</span>
                </h2>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="relative group">
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all"
                  />
                  <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all"
                  />
                  <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                    Email
                  </label>
                </div>

                <div className="relative group">
                  {/* WEBSITE URL: Optional (no required attribute) */}
                  <input
                    name="website"
                    type="url"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all"
                  />
                  <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                    Website URL (optional)
                  </label>
                </div>

                <div className="relative group">
                  <input
                    name="phoneNumber"
                    type="tel"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all"
                  />
                  <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                    Phone Number
                  </label>
                </div>

                <div className="relative group">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer"
                  >
                    <option value="" disabled hidden></option>
                    <option value="crm">Shopify Development</option>
                    <option value="software">Custom Website </option>
                  </select>
                  <label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 ${service ? "-top-5 text-[11px] text-[#2F85EA] font-bold" : "top-2.5 text-gray-400 text-[15px]"}`}
                  >
                    How can we help?
                  </label>
                  <IoIosArrowDown className="absolute right-0 top-3 text-gray-300" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-3 w-full border border-gray-300 py-4 rounded-full text-[15px] font-medium text-gray-900 hover:bg-linear-to-r hover:from-[#3445E7] hover:to-[#07D6F3] hover:text-white cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <span className="tracking-tight">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting && <SendHorizontal size={16} />}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormPopup;
