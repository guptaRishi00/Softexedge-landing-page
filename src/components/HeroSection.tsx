"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { MoveRight, SendHorizontal, Globe, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SchedulePicker from "./SchedulePicker";

const HeroSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scheduledDateTime, setScheduledDateTime] = useState({ date: "", time: "" });

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

    const eventId = "lead_hero_" + Date.now();

    const payload = {
      formType: "Hero Section Contact Form",
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
      utm_campaign: searchParams.get("utm_campaign") || "N/A",
      utm_content: searchParams.get("utm_content") || "N/A",
      utm_term: searchParams.get("utm_term") || "N/A",
    };

    try {
      // Fire and forget - Google Apps Script is slow and mode: "no-cors" means we can't reliably read the response anyway
      fetch(
        "https://script.google.com/macros/s/AKfycbzSj-Aq7HibWvjSDPIPgCN8yFKJOegEsbRAzF3R5xwtgs1rZj9x-8BUFTwH-XPdSfFy4Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        },
      ).catch(err => console.error("GAS Submission Background Error:", err));

      // Immediate UI transition
      (e.target as HTMLFormElement).reset();
      setService("");
      setScheduledDateTime({ date: "", time: "" });
      setStep(1);
      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-white pt-6 pb-16 lg:pt-8 lg:pb-35 px-6 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-310 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* LEFT: CONTENT */}
        <div className="flex flex-col gap-8 w-full lg:w-[55%]">
          <div className="space-y-5">
            <div className="flex items-center gap-2 bg-white rounded-full px-3.5 py-1 border-gray-300 border w-fit">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F85EA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F85EA]"></span>
              </div>
              <span className="text-[11px] font-bold bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent uppercase tracking-widest">
                Crafting Digital Experiences
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[50px] leading-[1.1] font-extrabold text-gray-900 tracking-tighter">
              Get a professional website <br className="hidden md:block" />{" "}
              <span className="inline-block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent pr-2">
                within 7 days
              </span>{" "}
              at less than{" "}
              <span className="inline-block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent pr-2">
                35K
              </span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-gray-900 max-w-md leading-relaxed font-medium">
            We build high-performance websites on{" "}
            <span className="text-gray-900 font-semibold">
              Shopify, WordPress, and custom stacks
            </span>{" "}
            that drive growth.
          </p>

          {/* --- PARTNERS LOGO SECTION --- */}
          <div className="space-y-5">
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">
              Trusted Platform Partners
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 transition-all duration-500">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg"
                alt="Shopify"
                width={100}
                height={20}
                className="h-5 w-auto"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                alt="Meta"
                width={80}
                height={16}
                className="h-4 w-auto"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                width={80}
                height={24}
                className="h-6 w-auto"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/WordPress_Logotype_Alternative.svg/500px-WordPress_Logotype_Alternative.svg.png"
                alt="WordPress"
                width={120}
                height={28}
                className="h-7 w-auto"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg"
                alt="Wix.com"
                width={60}
                height={16}
                className="h-4 w-auto"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Image
                src="https://imgs.search.brave.com/3I_6IBC_d0AMoHikTIGgtbzy0OZn1CbUmP5f0UrvTD8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRjb2xvci5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTAvYW1hem9uLWFk/cy1sb2dvLTMwMHgx/MDcucG5n"
                alt="Amazon Ads"
                width={100}
                height={40}
                className="h-10 w-auto"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* <div className="pt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 bg-transparent cursor-pointer border border-gray-300 px-8 py-4 rounded-full text-[15px] font-medium text-gray-900  hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:border-white hover:text-white hover:scale-[1.02] active:scale-95"
            >
              <span>View our services</span>
              <MoveRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div> */}
        </div>

        {/* RIGHT: 2-STEP FORM */}
        <div className="w-full lg:w-[42%]">
          <div className="relative p-[1.5px] rounded-[32px] bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]">
            <div className="relative bg-white rounded-[30.5px] p-8 lg:p-10 min-h-[500px] flex flex-col justify-center overflow-hidden">
              <AnimatePresence mode="wait">

                {/* STEP 1: SCHEDULING UI */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                    <SchedulePicker
                      selectedDate={scheduledDateTime.date}
                      selectedTime={scheduledDateTime.time}
                      onSelect={(date, time) => setScheduledDateTime({ date, time })}
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-gray-100 gap-4">
                      <div className="flex items-center gap-2 text-[14px] text-gray-600 font-medium w-full sm:w-auto">
                        <Globe size={16} /> Asia/Calcutta (GMT+5:30)
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!scheduledDateTime.date || !scheduledDateTime.time}
                        className={`w-full sm:w-auto px-8 py-3 rounded-full text-[15px] font-bold transition-all cursor-pointer active:scale-95 ${scheduledDateTime.date && scheduledDateTime.time
                          ? "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white border border-white hover:brightness-110"
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
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mb-8 flex flex-col gap-2">
                      <button type="button" onClick={() => setStep(1)} className="flex items-center gap-1 text-gray-400 hover:text-[#2F85EA] text-sm font-bold transition-colors w-fit mb-2 cursor-pointer">
                        <ArrowLeft size={14} /> Back to Schedule
                      </button>
                      <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-none">
                        Your Details<span className="text-[#2F85EA]">.</span>
                      </h2>
                      <p className="text-sm font-medium text-gray-600">
                        Booking for {scheduledDateTime.date} at {scheduledDateTime.time}
                      </p>
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
                        <label className="absolute left-0 top-2.5 text-gray-600 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                          Full Name
                        </label>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <div className="relative group">
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder=" "
                          className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all"
                        />
                        <label className="absolute left-0 top-2.5 text-gray-600 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                          Email
                        </label>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <div className="relative group">
                        <input
                          name="website"
                          type="text"
                          placeholder=" "
                          className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all"
                        />
                        <label className="absolute left-0 top-2.5 text-gray-600 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                          Website URL (optional)
                        </label>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <div className="relative group">
                        <input
                          name="phoneNumber"
                          type="tel"
                          required
                          placeholder=" "
                          className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] focus:outline-none focus:border-[#2F85EA] transition-all"
                        />
                        <label className="absolute left-0 top-2.5 text-gray-600 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#2F85EA] peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[11px]">
                          Phone Number
                        </label>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
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
                          className={`absolute left-0 pointer-events-none transition-all duration-300 
                          ${service
                              ? "-top-5 text-[11px] text-[#2F85EA] font-bold"
                              : "top-2.5 text-gray-600 text-[15px] group-focus-within:-top-5 group-focus-within:text-[11px] group-focus-within:text-[#2F85EA] group-focus-within:font-bold"
                            }`}
                        >
                          How can we help?
                        </label>

                        <IoIosArrowDown className="absolute right-0 top-3 text-gray-300 group-focus-within:rotate-180 transition-transform" />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center justify-center gap-3 w-full bg-transparent border border-gray-300 py-4 rounded-full text-[15px] font-medium text-gray-900 hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:border-white cursor-pointer hover:text-white hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="tracking-tight">
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        {!isSubmitting && (
                          <SendHorizontal
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
