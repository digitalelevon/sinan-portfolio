"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedLine from "@/components/ui/AnimatedLine";

const features = [
    {
        title: "Proven SEO Ranking Expertise",
        description: "Helping websites rank higher on Google with proven SEO strategies.",
    },
    {
        title: "Modern High-Performance Websites",
        description: "Fast, responsive, and conversion-focused website development.",
    },
    {
        title: "Complete Web + SEO Solution",
        description: "Combined web development and SEO for maximum business growth.",
    },
    {
        title: "Local Market Expertise",
        description: "Deep understanding of Malappuram business and local SEO.",
    },
    {
        title: "Result-Driven Strategy",
        description: "Focus on traffic, leads, and real business results.",
    },
    {
        title: "Ongoing Support and Optimization",
        description: "Continuous improvements to maintain rankings and performance.",
    },
];

const WhyChooseSection = () => {
    return (
        <section
            id="why-choose"
            className="bg-dark py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden relative"
        >
            {/* ── Background Layers ── */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(255,215,0,0.07),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(184,134,11,0.05),transparent)] pointer-events-none" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,215,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* ── 1. Heading Block ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center w-full mb-10 sm:mb-12 md:mb-14"
                >
                    {/* Label */}
                    <div className="flex flex-col items-center gap-3 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary uppercase tracking-[0.35em] text-xs font-bold">
                                WHY CHOOSE ME
                            </span>
                        </div>
                        <AnimatedLine className="max-w-[100px]" />
                    </div>

                    {/* H2 */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5 md:mb-6 max-w-3xl mx-auto">
                        Why Businesses in Malappuram{" "}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Choose Sinan MC</span>
                            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary/70 to-transparent" />
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
                        My work goes beyond building websites. I help local businesses grow online through a
                        combination of high-performance web development and data-driven SEO strategies,
                        delivering real rankings, more traffic, and measurable growth.
                    </p>
                </motion.div>

                {/* ── 2. Image ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.93, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.95, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative group w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-12 sm:mb-14 md:mb-16"
                >
                    {/* Multi-layer ambient glow */}
                    <div className="absolute -inset-4 md:-inset-8 bg-primary/12 blur-[70px] md:blur-[130px] rounded-full opacity-60 z-0" />
                    <div className="absolute -inset-1 md:-inset-3 bg-gradient-to-b from-primary/20 to-transparent blur-[40px] rounded-[28px] opacity-40 z-0" />

                    {/* Corner accent lines */}
                    <div className="hidden sm:block absolute -top-5 -left-5 w-24 h-24 md:w-32 md:h-32 border-l-2 border-t-2 border-primary/25 rounded-tl-3xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-700" />
                    <div className="hidden sm:block absolute -bottom-5 -right-5 w-24 h-24 md:w-32 md:h-32 border-r-2 border-b-2 border-primary/25 rounded-br-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />

                    {/* Image card */}
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-white/8 group-hover:border-primary/35 transition-all duration-700">
                        <div className="relative w-full h-[280px] xs:h-[340px] sm:h-[420px] md:h-[480px]">
                            <Image
                                src="/SEO-Specialist-Malappuram-Kerala.webp"
                                alt="Best Freelance Web Developer & SEO Specialist in Malappuram, Kerala"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
                                className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                                loading="lazy"
                            />
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/15 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Shimmer on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                        {/* Bottom badge */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark/80 backdrop-blur-xl border border-primary/30 rounded-full px-5 py-2 flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,215,0,0.15)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.25)] transition-all duration-500">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                            <span className="text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                                Malappuram&apos;s #1 Choice
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* ── 3. Feature Cards ── */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.08 * index, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            viewport={{ once: true }}
                            className="relative group/card bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden hover:border-primary/40 transition-all duration-500 cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.12)]"
                        >
                            {/* Hover glow background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl z-0" />
                            {/* Bottom glow line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-gradient-to-r from-primary via-yellow-200 to-accent group-hover/card:w-full transition-all duration-700 ease-out z-10" />

                            {/* Corner dot */}
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 group-hover/card:bg-primary group-hover/card:shadow-[0_0_12px_rgba(255,215,0,0.8)] transition-all duration-500 z-10" />

                            <div className="flex items-start gap-4 lg:gap-5 relative z-10">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover/card:bg-primary/25 group-hover/card:border-primary/50 group-hover/card:-rotate-6 transition-all duration-500 shadow-inner group-hover/card:drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover/card:text-white transition-colors duration-500" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-white text-base sm:text-lg font-bold leading-snug group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-primary group-hover/card:to-yellow-200 transition-all duration-500 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light group-hover/card:text-gray-300 transition-colors duration-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── 4. CTA Button ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.25 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-12 w-full flex justify-center"
                >
                    <Link
                        href="/contact"
                        className="group/btn relative inline-flex items-center gap-3 justify-center bg-gradient-to-r from-primary via-[#FFC107] to-accent text-dark h-13 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.04] shadow-[0_0_30px_rgba(255,215,0,0.3),0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5),0_4px_30px_rgba(0,0,0,0.5)] active:scale-95 overflow-hidden"
                    >
                        {/* Shimmer sweep */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10 leading-tight text-center">
                            Let&apos;s Grow Your Business — Get in Touch
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 flex-shrink-0 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseSection;
