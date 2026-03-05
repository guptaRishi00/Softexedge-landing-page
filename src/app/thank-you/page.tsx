"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-white to-[#e8f0fe] px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-lg"
            >
                {/* Animated Checkmark */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#3445E7] to-[#07D6F3] flex items-center justify-center shadow-lg shadow-[#2F85EA]/30"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                    >
                        <CheckCircle className="w-12 h-12 text-white" strokeWidth={2} />
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-extrabold text-[#04034C] tracking-tight mb-4"
                >
                    Thank You<span className="text-[#2F85EA]">!</span>
                </motion.h1>

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10"
                >
                    Your message has been received. Our team will get back to you shortly.
                </motion.p>

                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 border border-gray-300 px-8 py-4 rounded-full text-[15px] font-medium text-gray-900 hover:bg-gradient-to-r hover:from-[#3445E7] hover:to-[#07D6F3] hover:text-white hover:border-transparent transition-all duration-300 active:scale-95"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform group-hover:-translate-x-1"
                        />
                        <span className="tracking-tight">Back to Home</span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
