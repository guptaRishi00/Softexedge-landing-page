"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();

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
    const fullName = (formData.get("fullName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phoneNumber = (formData.get("phoneNumber") as string) || "";

    // Split Full Name for Meta CAPI Advanced Matching
    const nameParts = fullName.trim().split(" ");
    const first_name = nameParts[0] || "";
    const last_name = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    // Safely Extract Meta Cookies
    const getCookie = (name: string) => {
      if (typeof document === "undefined") return undefined;
      const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)"),
      );
      return match ? decodeURIComponent(match[2]) : undefined;
    };

    const fbpCookie = getCookie("_fbp");
    const fbcCookie = getCookie("_fbc");
    const fbclid = searchParams.get("fbclid");

    // Construct fbc strictly according to Meta's requirements if cookie is missing
    const fbc =
      fbcCookie || (fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined);
    const fbp = fbpCookie || undefined;

    // 1️⃣ Create Event ID
    const eventId = "lead_popup_" + Date.now();

    // 2️⃣ Fire Browser-Side Meta Pixel Event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq(
        "track",
        "Lead",
        {
          content_category: "Popup Form",
          content_name: service || "Not Selected",
        },
        { eventID: eventId },
      );
    }

    const payload = {
      formType: "Popup Contact Form",
      fullName: fullName,
      email: email,
      website: formData.get("website") || "N/A",
      phoneNumber: phoneNumber,
      service: service || "Not Selected",
      timestamp: new Date().toLocaleString(),
      utm_source: searchParams.get("utm_source") || "N/A",
      utm_medium: searchParams.get("utm_medium") || "N/A",
      utm_campaign: searchParams.get("utm_campaign") || "N/A",
      utm_content: searchParams.get("utm_content") || "N/A",
      utm_term: searchParams.get("utm_term") || "N/A",
    };

    try {
      // 3️⃣ Google Sheets CRM
      await fetch(
        "https://script.google.com/macros/s/AKfycbzSj-Aq7HibWvjSDPIPgCN8yFKJOegEsbRAzF3R5xwtgs1rZj9x-8BUFTwH-XPdSfFy4Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        },
      );

      // 4️⃣ Server-Side Meta CAPI
      await fetch("/api/meta-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId,
          first_name,
          last_name,
          email,
          phone: phoneNumber,
          fbp,
          fbc,
          source: "Popup Contact Form",
          service: service || "Not Selected",
        }),
      });

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
                    <option value="software">Custom Website</option>
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
