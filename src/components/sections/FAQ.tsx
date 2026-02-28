"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedLine from "@/components/ui/AnimatedLine";

/* ─────────────────────────────────────────
   FAQ Data
───────────────────────────────────────── */
const faqs = [
    {
        question:
            "Why should I choose Sinan MC as my freelance web developer in Malappuram?",
        answer:
            "Sinan MC is recognized as the best freelance web developer in Malappuram because he creates modern, fast, and SEO-optimized websites designed to rank on Google and generate real business results. Every website is built with performance, user experience, and conversion in mind.",
    },
    {
        question:
            "What makes Sinan MC the best freelance SEO specialist in Malappuram?",
        answer:
            "Sinan MC is the Best SEO Specialist in Malappuram, providing result-driven SEO services including keyword research, on-page SEO, technical SEO, and local SEO. His strategies help businesses rank higher on Google, increase website traffic, and generate more customers.",
    },
    {
        question:
            "Do you provide both website development and SEO services together?",
        answer:
            "Yes. Sinan MC offers complete web development and SEO combo services. This ensures your website not only looks professional but also ranks on Google and grows your business online.",
    },
    {
        question: "How long does it take to rank on Google?",
        answer:
            "SEO results usually take 1 to 3 months depending on your competition and industry. Sinan MC uses proven SEO strategies to achieve faster and long-term ranking improvements.",
    },
    {
        question: "Do you work with local businesses in Malappuram?",
        answer:
            "Yes. Sinan MC specializes in helping local businesses in Malappuram rank higher on Google using powerful local SEO strategies.",
    },
    {
        question: "Will my website be mobile-friendly and fast?",
        answer:
            "Yes. Every website built by Sinan MC is fully mobile responsive, fast loading, and optimized for performance and SEO.",
    },
];

/* ─────────────────────────────────────────
   FAQ Schema (JSON-LD)
───────────────────────────────────────── */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) =>
        setActiveIndex(activeIndex === index ? null : index);

    return (
        <>
            {/* ── FAQ Schema Structured Data ── */}
            <script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section
                id="faq"
                itemScope
                itemType="https://schema.org/FAQPage"
                aria-label="Frequently Asked Questions"
                className="relative bg-[#0A0A0A] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden"
            >
                {/* ── Background ambient glows ── */}
                <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[340px] sm:w-[560px] lg:w-[700px] h-[340px] sm:h-[420px] lg:h-[520px] bg-[#FFD700]/[0.055] rounded-full blur-[120px] lg:blur-[160px] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[220px] sm:w-[320px] lg:w-[420px] h-[220px] sm:h-[320px] lg:h-[420px] bg-[#FFD700]/[0.035] rounded-full blur-[90px] lg:blur-[120px] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[180px] sm:w-[260px] h-[180px] sm:h-[260px] bg-[#FFD700]/[0.025] rounded-full blur-[80px] -z-10 pointer-events-none" />

                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 -z-10 opacity-[0.013]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,215,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.5) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* ── Main container: narrow on mobile, capped on laptop ── */}
                <div className="max-w-[92%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">

                    {/* ── Section Header ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
                    >
                        {/* Label + animated line */}
                        <div className="flex flex-col items-center gap-3 mb-5 sm:mb-6">
                            <span className="text-[#FFD700] uppercase tracking-[0.32em] text-[10px] sm:text-xs lg:text-sm font-bold">
                                FAQ
                            </span>
                            <AnimatedLine className="max-w-[70px] sm:max-w-[90px]" />
                        </div>

                        {/* H2 */}
                        <h2 className="text-[1.45rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-5">
                            Frequently Asked{" "}
                            <span className="relative inline-block">
                                <span className="text-[#FFD700]">Questions</span>
                                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-[#FFD700]/70 to-transparent" />
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-[0.82rem] sm:text-sm md:text-base lg:text-[0.95rem] leading-relaxed font-light max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
                            Common questions about working with Sinan MC — a Malappuram-based freelance specialist
                            in web development and SEO, helping businesses build their online presence and rank on Google.
                        </p>
                    </motion.div>

                    {/* ── Accordion List ── */}
                    <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5">
                        {faqs.map((faq, index) => {
                            const isOpen = activeIndex === index;
                            const questionId = `faq-question-${index}`;
                            const answerId = `faq-answer-${index}`;

                            return (
                                <motion.div
                                    key={index}
                                    itemScope
                                    itemProp="mainEntity"
                                    itemType="https://schema.org/Question"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.42, delay: index * 0.065 }}
                                    viewport={{ once: true }}
                                    className={[
                                        "relative rounded-xl sm:rounded-2xl overflow-hidden",
                                        "border transition-all duration-500",
                                        "backdrop-blur-xl",
                                        isOpen
                                            ? "border-[#FFD700]/40 shadow-[0_8px_30px_rgba(255,215,0,0.15)] bg-[#0a0a0a]/80"
                                            : "border-white/[0.08] hover:border-[#FFD700]/30 hover:shadow-[0_4px_20px_rgba(255,215,0,0.08)] bg-[#0a0a0a]/50",
                                    ].join(" ")}
                                >
                                    {/* Left gold bar — visible when open */}
                                    <span
                                        className={`absolute left-0 top-0 bottom-0 w-[4px] rounded-l-xl bg-gradient-to-b from-[#FFD700] via-[#FFD700]/60 to-transparent transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
                                    />

                                    {/* Shimmer overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br from-[#FFD700]/[0.08] via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${isOpen ? "opacity-100" : "opacity-0"}`}
                                    />

                                    {/* Question Header & Button */}
                                    <h3 className="m-0 p-0 block w-full">
                                        <button
                                            id={questionId}
                                            onClick={() => toggle(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={answerId}
                                            className="flex items-center gap-3 sm:gap-4 w-full px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-5 text-left relative z-10 group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/50"
                                        >
                                            {/* Number badge */}
                                            <span
                                                className={[
                                                    "flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl",
                                                    "flex items-center justify-center",
                                                    "text-[10px] sm:text-xs font-extrabold tracking-wide",
                                                    "border transition-all duration-300",
                                                    isOpen
                                                        ? "bg-[#FFD700]/18 border-[#FFD700]/45 text-[#FFD700]"
                                                        : "bg-white/[0.05] border-white/10 text-gray-500 group-hover/btn:border-[#FFD700]/25 group-hover/btn:text-[#FFD700]/60",
                                                ].join(" ")}
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            {/* Question text */}
                                            <span
                                                itemProp="name"
                                                className={`flex-1 text-[0.82rem] sm:text-sm md:text-[0.95rem] lg:text-base font-semibold leading-snug transition-colors duration-300 pr-2 ${isOpen ? "text-[#FFD700]" : "text-white/90 group-hover/btn:text-[#FFD700]/75"}`}
                                            >
                                                {faq.question}
                                            </span>

                                            {/* ± Icon */}
                                            <span
                                                className={[
                                                    "flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl",
                                                    "flex items-center justify-center",
                                                    "border transition-all duration-300",
                                                    isOpen
                                                        ? "bg-[#FFD700]/15 border-[#FFD700]/40"
                                                        : "bg-white/[0.04] border-white/10 group-hover/btn:border-[#FFD700]/28",
                                                ].join(" ")}
                                            >
                                                <AnimatePresence mode="wait" initial={false}>
                                                    {isOpen ? (
                                                        <motion.span
                                                            key="minus"
                                                            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                                            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                                                            transition={{ duration: 0.18 }}
                                                            className="flex items-center justify-center"
                                                        >
                                                            <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD700]" />
                                                        </motion.span>
                                                    ) : (
                                                        <motion.span
                                                            key="plus"
                                                            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                                            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                                                            transition={{ duration: 0.18 }}
                                                            className="flex items-center justify-center"
                                                        >
                                                            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover/btn:text-[#FFD700]/65 transition-colors duration-300" />
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </span>
                                        </button>
                                    </h3>

                                    {/* Answer panel */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                id={answerId}
                                                role="region"
                                                aria-labelledby={questionId}
                                                itemScope
                                                itemProp="acceptedAnswer"
                                                itemType="https://schema.org/Answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                                                className="overflow-hidden relative z-10"
                                            >
                                                {/* Indent matches badge width: 28/32px + gap 12/16px + left padding */}
                                                <div className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-5 pt-0 pl-[3.25rem] sm:pl-[3.75rem]">
                                                    <div className="border-t border-[#FFD700]/12 pt-3 sm:pt-4">
                                                        <p itemProp="text" className="text-gray-400 text-[0.8rem] sm:text-sm lg:text-[0.9rem] leading-relaxed font-light">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── CTA Below FAQ ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="mt-12 sm:mt-14 md:mt-16 lg:mt-20"
                    >
                        {/* Glass CTA card */}
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#FFD700]/18 bg-white/[0.03] backdrop-blur-md px-5 py-9 sm:px-10 sm:py-12 lg:px-16 lg:py-14 text-center shadow-[0_0_60px_rgba(255,215,0,0.06)]">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/[0.06] via-transparent to-[#FFD700]/[0.03] pointer-events-none" />

                            {/* Decorative top line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-40 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />

                            {/* Divider dots */}
                            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-7 relative z-10">
                                <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#FFD700]/35" />
                                <div className="w-1 h-1 rounded-full bg-[#FFD700]/70" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                                <div className="w-1 h-1 rounded-full bg-[#FFD700]/70" />
                                <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#FFD700]/35" />
                            </div>

                            {/* Heading */}
                            <h3 className="text-[1.2rem] leading-[1.25] sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-white tracking-tight mb-5 sm:mb-6 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto relative z-10">
                                Ready to Work with the{" "}
                                <span className="text-[#FFD700]">Best Freelance Web Developer & SEO Specialist</span> in Malappuram?
                            </h3>

                            {/* Button */}
                            <Link
                                href="/contact"
                                className="group/cta relative inline-flex items-center gap-2.5 justify-center bg-[#FFD700] text-black px-7 sm:px-9 md:px-11 py-3.5 sm:py-4 rounded-full font-extrabold text-sm sm:text-[0.95rem] hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-[#FFD700]/25 overflow-hidden z-10"
                            >
                                {/* Shimmer sweep */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
                                <span className="relative z-10">Start Your Project</span>
                                <ArrowRight className="relative z-10 w-4 h-4 flex-shrink-0 group-hover/cta:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    );
}
