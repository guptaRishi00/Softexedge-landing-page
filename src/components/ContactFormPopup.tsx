"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { SendHorizontal, X } from "lucide-react";

interface ContactFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactFormPopup = ({ isOpen, onClose }: ContactFormPopupProps) => {
    const [service, setService] = useState("");

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
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="relative w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative bg-white rounded-[32px] p-8 lg:p-10 shadow-2xl">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all cursor-pointer"
                            >
                                <X size={16} />
                            </button>

                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                                    Let&apos;s Talk<span className="text-[#2F85EA]">.</span>
                                </h2>
                            </div>

                            {/* Form */}
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                {/* Full Name */}
                                <div className="relative group">
                                    <input
                                        type="text"
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
                                        type="email"
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
                                        type="tel"
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
                                        className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer"
                                    >
                                        <option value="" disabled hidden></option>
                                        <option value="shopify">Shopify Development</option>
                                        <option value="wordpress">WordPress Development</option>
                                        <option value="custom">Custom Website</option>
                                    </select>

                                    <label
                                        className={`absolute left-0 pointer-events-none transition-all duration-300 
                      ${service
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
                                    className="group flex items-center justify-center gap-3 w-full bg-transparent border border-gray-300 py-4 rounded-full text-[15px] font-medium text-gray-900 hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] hover:border-white cursor-pointer hover:text-white hover:scale-[1.01] active:scale-95"
                                >
                                    <span className="tracking-tight">Send Message</span>
                                    <SendHorizontal
                                        size={16}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
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
