"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import AnimatedLine from "@/components/ui/AnimatedLine";

// --- Types ---
interface Certificate {
    id: number;
    title: string;
    provider: string;
    image: string;
    alt: string;
}

// --- Data ---
const certificates: Certificate[] = [
    {
        id: 1,
        title: "HP LIFE MARKETING STRATEGY",
        provider: "HP FOUNDATION",
        image: "/sinanmc-hp-digital-business-certification.webp",
        alt: "Best Freelance Web Developer and SEO Specialist in Malappuram - HP LIFE Marketing Strategy Certificate",
    },
    {
        id: 2,
        title: "SEMRUSH SEO TOOLKIT",
        provider: "SEMRUSH ACADEMY",
        image: "/sinanmc-semrush.webp",
        alt: "Best Freelance Web Developer and SEO Specialist in Malappuram - Semrush SEO Toolkit Certificate",
    },
    {
        id: 3,
        title: "DIGITAL MARKETING",
        provider: "HUBSPOT ACADEMY",
        image: "/sinanmc-digital-marketing-HubSpot.webp",
        alt: "Best Freelance Web Developer and SEO Specialist in Malappuram - HubSpot Digital Marketing Certificate",
    },
    {
        id: 4,
        title: "SOCIAL MEDIA MARKETING",
        provider: "HUBSPOT ACADEMY",
        image: "/sinanmc-social-media-HubSpot.webp",
        alt: "Best Freelance Web Developer and SEO Specialist in Malappuram - HubSpot Social Media Marketing Certificate",
    },
    {
        id: 5,
        title: "WEB DEVELOPMENT BOOTCAMP",
        provider: "UDEMY",
        image: "/sinanmc-udemy.webp",
        alt: "Best Freelance Web Developer and SEO Specialist in Malappuram - Udemy Web Development Bootcamp Certificate",
    },
    {
        id: 6,
        title: "AI PROMPT ENGINEERING",
        provider: "DUBAI CERTIFICATION",
        image: "/sinan-mc-ai-prompt-engineering-certificate-dubai.webp",
        alt: "Best Freelance Web Developer and SEO Specialist in Malappuram - AI Prompt Engineering Certificate Dubai",
    },
];

const CertificationsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, handleNext]);

    // Helper to get relative index for circular display
    const getIndex = (offset: number) => {
        return (currentIndex + offset + certificates.length) % certificates.length;
    };

    return (
        <section
            id="certifications"
            aria-label="Certifications of Sinan MC - Freelance Web Developer and SEO Specialist"
            className="relative w-full py-20 md:py-24 lg:py-28 xl:py-32 bg-dark overflow-hidden flex flex-col items-center justify-center"
        >

            {/* Decorative Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="container mx-auto px-4 flex flex-col items-center relative z-10">

                {/* --- Header --- */}
                <div className="text-center mb-10 md:mb-16 lg:mb-20 xl:mb-24 relative">
                    <span className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm font-bold block mb-3 md:mb-4 animate-pulse-slow">
                        Sinan mc
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-white tracking-tighter">
                        Certifications
                    </h2>
                    <AnimatedLine className="max-w-[150px] mx-auto mt-6" />
                </div>

                {/* --- Carousel Container --- */}
                <div
                    className="relative w-full max-w-[1200px] h-[260px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center perspective-[1000px] mb-8 md:mb-10 lg:mb-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons (Absolute) */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-1 md:left-4 lg:-left-4 xl:-left-12 w-10 h-10 md:w-12 lg:w-14 rounded-full bg-dark-100/80 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-dark hover:scale-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] z-50 backdrop-blur-sm group"
                        aria-label="Previous Certificate"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 lg:w-8 group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-1 md:right-4 lg:-right-4 xl:-right-12 w-10 h-10 md:w-12 lg:w-14 rounded-full bg-dark-100/80 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-dark hover:scale-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] z-50 backdrop-blur-sm group"
                        aria-label="Next Certificate"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 lg:w-8 group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Carousel Items */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="popLayout" custom={currentIndex}>

                            {/* Left Card (Hidden on Mobile) */}
                            <motion.div
                                key={`left-${getIndex(-1)}`}
                                className="absolute left-[5%] md:left-[8%] lg:left-[10%] w-[60%] md:w-[45%] lg:w-[40%] aspect-[4/3] hidden md:flex items-center justify-center"
                                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                animate={{
                                    opacity: 0.4,
                                    x: "-50%", // Shift left
                                    scale: 0.85,
                                    filter: "blur(4px)",
                                    zIndex: 10
                                }}
                                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-200/50 border border-white/5">
                                    <Image
                                        src={certificates[getIndex(-1)].image}
                                        alt={certificates[getIndex(-1)].alt}
                                        fill
                                        className="object-cover opacity-60"
                                        sizes="(max-width: 768px) 0px, 40vw"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Card (Hidden on Mobile) */}
                            <motion.div
                                key={`right-${getIndex(1)}`}
                                className="absolute right-[5%] md:right-[8%] lg:right-[10%] w-[60%] md:w-[45%] lg:w-[40%] aspect-[4/3] hidden md:flex items-center justify-center"
                                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                animate={{
                                    opacity: 0.4,
                                    x: "50%", // Shift right
                                    scale: 0.85,
                                    filter: "blur(4px)",
                                    zIndex: 10
                                }}
                                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-200/50 border border-white/5">
                                    <Image
                                        src={certificates[getIndex(1)].image}
                                        alt={certificates[getIndex(1)].alt}
                                        fill
                                        className="object-cover opacity-60"
                                        sizes="(max-width: 768px) 0px, 40vw"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                            {/* Center Card (Main) */}
                            <motion.div
                                key={`center-${currentIndex}`}
                                className="absolute z-20 w-[80%] md:w-[60%] lg:w-[50%] aspect-[4/3] md:aspect-video lg:aspect-[4/3] max-w-[800px] bg-dark-100/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-1 md:p-3 border border-primary/40 shadow-[0_10px_50px_rgba(255,215,0,0.25)] flex items-center justify-center transition-all duration-500 hover:border-primary/60 hover:shadow-[0_15px_60px_rgba(255,215,0,0.35)]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    filter: "blur(0px)",
                                    zIndex: 30,
                                    x: 0
                                }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                layout
                            >
                                {/* Premium Glow */}
                                <div className="absolute inset-0 bg-primary/15 blur-[60px] md:blur-[120px] rounded-full -z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-100"></div>

                                {/* Image Container */}
                                <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden group/img bg-black/60 shadow-inner">
                                    <Image
                                        src={certificates[currentIndex].image}
                                        alt={certificates[currentIndex].alt}
                                        fill
                                        className="object-contain md:object-cover transition-transform duration-1000 ease-out group-hover/img:scale-110 group-hover/img:rotate-1"
                                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
                                        loading="lazy"
                                        quality={85}
                                    />

                                    {/* Shine Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                </div>
                            </motion.div>

                        </AnimatePresence>
                    </div>
                </div>

                {/* --- Text Info (Animated) --- */}
                <div className="relative z-20 h-20 md:h-24 flex items-center justify-center px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-center"
                        >
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 uppercase tracking-wide">
                                {certificates[currentIndex].title}
                            </h3>
                            <p className="text-primary text-xs md:text-sm tracking-[0.2em] font-semibold uppercase">
                                {certificates[currentIndex].provider}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- SEO: Hidden Content & Schema --- */}
                <div className="sr-only">
                    <ul>
                        {certificates.map((cert) => (
                            <li key={`seo-${cert.id}`}>
                                <h4>{cert.title}</h4>
                                <p>Provider: {cert.provider}</p>
                                <img src={cert.image} alt={cert.alt} />
                            </li>
                        ))}
                    </ul>
                </div>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "itemListElement": certificates.map((cert, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "name": cert.title,
                                "description": `Certificate from ${cert.provider}`,
                                "image": cert.image
                            }))
                        })
                    }}
                />
            </div>
        </section>
    );
};

export default CertificationsSection;
