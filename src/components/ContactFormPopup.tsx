"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { SendHorizontal, X, Globe, ArrowLeft } from "lucide-react";
import SchedulePicker from "./SchedulePicker";

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormPopup = ({ isOpen, onClose }: ContactFormPopupProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // New Step State (1 = Calendar, 2 = Form Details)
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scheduledDateTime, setScheduledDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep(1); // Reset to step 1 every time it opens
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("fullName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phoneNumber = (formData.get("phoneNumber") as string) || "";

    const nameParts = fullName.trim().split(" ");
    const first_name = nameParts[0] || "";
    const last_name = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    const getCookie = (name: string) => {
      if (typeof document === "undefined") return undefined;
      const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      return match ? decodeURIComponent(match[2]) : undefined;
    };

    const fbpCookie = getCookie("_fbp");
    const fbcCookie = getCookie("_fbc");
    const fbclid = searchParams.get("fbclid");
    const fbc = fbcCookie || (fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined);
    const fbp = fbpCookie || undefined;

    const eventId = "lead_popup_" + Date.now();

    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_category: "Popup Form",
        content_name: service || "Not Selected",
      }, { eventID: eventId });
    }

    const payload = {
      formType: "Popup Contact Form",
      fullName: fullName,
      email: email,
      website: formData.get("website") || "N/A",
      phoneNumber: phoneNumber,
      service: service || "Not Selected",
      scheduledDate: scheduledDateTime.date || "N/A",
      scheduledTime: scheduledDateTime.time || "N/A",
      timestamp: new Date().toLocaleString(),
      utm_source: searchParams.get("utm_source") || "N/A",
      utm_medium: searchParams.get("utm_medium") || "N/A",
      utm_campaign: searchParams.get("utm_campaign") || "N/A"
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzSj-Aq7HibWvjSDPIPgCN8yFKJOegEsbRAzF3R5xwtgs1rZj9x-8BUFTwH-XPdSfFy4Q/exec", {
        method: "POST", mode: "no-cors", body: JSON.stringify(payload), headers: { "Content-Type": "application/json" },
      });

      await fetch("/api/meta-event", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, first_name, last_name, email, phone: phoneNumber, fbp, fbc, source: "Popup Contact Form", service: service || "Not Selected" }),
      });

      onClose();
      (e.target as HTMLFormElement).reset();
      setScheduledDateTime({ date: "", time: "" });
      setService("");
      setStep(1);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
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
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm overflow-y-auto no-scrollbar"
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center p-4 py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[28px] p-7 lg:p-9 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={onClose} className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 transition-all cursor-pointer bg-white">
                <X size={18} />
              </button>

              {/* STEP 1: SCHEDULING UI */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="pt-6">
                  <SchedulePicker
                    selectedDate={scheduledDateTime.date}
                    selectedTime={scheduledDateTime.time}
                    onSelect={(date, time) => setScheduledDateTime({ date, time })}
                  />

                  {/* Timezone and Confirm Button Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-gray-100 gap-4">
                    <div className="flex items-center gap-2 text-[14px] text-gray-600 font-medium w-full sm:w-auto">
                      <Globe size={16} /> Asia/Calcutta (GMT+5:30)
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!scheduledDateTime.date || !scheduledDateTime.time}
                      className={`w-full sm:w-auto px-8 py-3 rounded-full text-[15px] font-bold transition-all cursor-pointer active:scale-95 ${scheduledDateTime.date && scheduledDateTime.time
                          ? "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white border border-white shadow-lg shadow-blue-500/20 hover:brightness-110"
                          : "bg-transparent border border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        }`}
                    >
                      Confirm details
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: USER DETAILS FORM */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>

                  <div className="mb-6 pr-12 flex flex-col gap-2">
                    <button type="button" onClick={() => setStep(1)} className="flex items-center gap-1 text-gray-400 hover:text-[#2F85EA] text-sm font-bold transition-colors w-fit mb-2 cursor-pointer">
                      <ArrowLeft size={14} /> Back to Schedule
                    </button>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-none">
                      Your Details<span className="text-[#2F85EA]">.</span>
                    </h2>
                    <p className="text-sm font-medium text-gray-500">
                      Booking for {scheduledDateTime.date} at {scheduledDateTime.time}
                    </p>
                  </div>

                  <form className="space-y-5 lg:space-y-6" onSubmit={handleSubmit}>
                    <div className="relative group">
                      <input name="fullName" type="text" required placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all" />
                      <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">Full Name</label>
                    </div>

                    <div className="relative group">
                      <input name="email" type="email" required placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all" />
                      <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">Email</label>
                    </div>

                    <div className="relative group">
                      <input name="website" type="url" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all" />
                      <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">Website URL (optional)</label>
                    </div>

                    <div className="relative group">
                      <input name="phoneNumber" type="tel" required placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all" />
                      <label className="absolute left-0 top-2.5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">Phone Number</label>
                    </div>

                    <div className="relative group">
                      <select value={service} onChange={(e) => setService(e.target.value)} required className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer">
                        <option value="" disabled hidden></option>
                        <option value="crm">Shopify Development</option>
                        <option value="software">Custom Website</option>
                      </select>
                      <label className={`absolute left-0 pointer-events-none transition-all duration-300 ${service ? "-top-5 text-[11px] text-[#2F85EA] font-bold" : "top-2.5 text-gray-400 text-[15px]"}`}>How can we help?</label>
                      <IoIosArrowDown className="absolute right-0 top-3 text-gray-300" />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="group flex items-center justify-center gap-3 w-full border border-transparent bg-linear-to-r from-[#3445E7] to-[#07D6F3] py-3.5 rounded-full text-[15px] font-bold text-white hover:brightness-110 cursor-pointer active:scale-95 disabled:opacity-50 mt-6 shadow-lg shadow-blue-500/20">
                      <span className="tracking-tight">{isSubmitting ? "Scheduling..." : "Schedule Event"}</span>
                      {!isSubmitting && <SendHorizontal size={16} />}
                    </button>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormPopup;
