"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 text-center flex flex-col items-center w-full max-w-2xl px-4"
            >
                {/* 404 Glitch-like or standard display */}
                <h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-primary via-[#FFC107] to-accent leading-none tracking-tighter mb-2 sm:mb-4 drop-shadow-[0_0_50px_rgba(255,215,0,0.2)]">
                    404
                </h1>

                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xs sm:max-w-md mx-auto leading-relaxed text-balance">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base font-bold text-dark bg-gradient-to-r from-primary via-[#FFC107] to-accent rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] w-full sm:w-auto"
                >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1.5 transition-transform duration-300" />
                    Back to Homepage
                    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
            </motion.div>
        </main>
    );
}
