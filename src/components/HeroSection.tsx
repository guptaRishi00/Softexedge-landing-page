"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MoveRight, SendHorizontal } from "lucide-react";

const HeroSection = () => {
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      formType: "Hero Section Contact Form",
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      website: formData.get("website") || "N/A",
      phoneNumber: formData.get("phoneNumber"),
      service: service || "Not Selected",
      timestamp: new Date().toLocaleString(),
    };

    try {
      // Using the Google Apps Script Web App URL provided
      await fetch(
        "https://script.google.com/macros/s/AKfycbzSj-Aq7HibWvjSDPIPgCN8yFKJOegEsbRAzF3R5xwtgs1rZj9x-8BUFTwH-XPdSfFy4Q/exec",
        {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script web apps
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      alert("Message sent successfully! We will get back to you soon.");
      (e.target as HTMLFormElement).reset();
      setService("");
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
      className="relative w-full bg-white py-16 lg:py-35 px-6 lg:px-16 overflow-hidden lg:mt-0 mt-20"
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

            <h1 className="text-4xl md:text-6xl lg:text-[68px] leading-[0.95] font-extrabold text-gray-900 tracking-tighter">
              Building Websites <br />
              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
                That Convert
              </span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-gray-400 max-w-md leading-relaxed font-medium">
            We build high-performance websites on{" "}
            <span className="text-gray-900">
              Shopify, WordPress, and custom stacks
            </span>{" "}
            that drive growth.
          </p>

          <div className="pt-2">
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
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="w-full lg:w-[42%]">
          <div className="relative p-[1.5px] rounded-[32px] bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]">
            <div className="relative bg-white rounded-[30.5px] p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                  Let&apos;s Talk<span className="text-[#2F85EA]">.</span>
                </h2>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Full Name */}
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
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Email */}
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
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Website URL */}
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
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Phone Number */}
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
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Dropdown */}
                <div className="relative group">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer"
                  >
                    <option value="" disabled hidden></option>
                    <option value="shopify">Shopify Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="custom">Custom Website</option>
                  </select>

                  <label
                    className={`absolute left-0 pointer-events-none transition-all duration-300 
                    ${
                      service
                        ? "-top-5 text-[11px] text-[#2F85EA] font-bold"
                        : "top-2.5 text-gray-400 text-[15px] group-focus-within:-top-5 group-focus-within:text-[11px] group-focus-within:text-[#2F85EA] group-focus-within:font-bold"
                    }`}
                  >
                    How can we help?
                  </label>

                  <IoIosArrowDown className="absolute right-0 top-3 text-gray-300 group-focus-within:rotate-180 transition-transform" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-[#3445E7] to-[#07D6F3] group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Submit Button */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
