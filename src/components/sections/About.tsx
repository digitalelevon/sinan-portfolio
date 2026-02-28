"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedLine from "@/components/ui/AnimatedLine";

export default function About() {
    const highlights = [
        "SEO-Optimised Website Development",
        "Local SEO and Digital Marketing in Malappuram",
        "Fast, Secure and Mobile-Responsive Websites",
        "Result-Driven Growth and Ranking Strategies",
    ];

    return (
        <section
            id="about"
            aria-label="About Sinan MC - Freelance Web Developer and SEO Specialist Malappuram"
            className="py-20 sm:py-24 md:py-28 bg-gradient-to-b from-dark to-dark-100 relative overflow-hidden border-t border-white/5"
        >
            {/* ── Background Layers ── */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,rgba(255,215,0,0.06),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_0%_100%,rgba(184,134,11,0.05),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="order-2 lg:order-1"
                    >
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/12 to-accent/8 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-[0_0_20px_rgba(255,215,0,0.08)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            About Sinan MC
                        </div>

                        <AnimatedLine className="max-w-[120px] mb-7" />

                        <h2 className="text-[34px] md:text-4xl lg:text-[40px] xl:text-[46px] font-bold mb-6 lg:mb-8 text-white leading-tight tracking-tight flex flex-col gap-3 lg:gap-4">
                            <span className="flex flex-col lg:flex-row lg:flex-wrap lg:items-baseline gap-1 lg:gap-x-3">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Your Digital Growth Partner</span>
                                <span>in Malappuram, Kerala</span>
                            </span>
                            <span className="flex flex-col lg:flex-row lg:flex-wrap lg:items-baseline gap-1 lg:gap-x-3 mt-1 lg:mt-0">
                                <span>Building Websites That</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative w-fit pb-1">
                                    Rank & Convert
                                    <svg className="absolute w-full h-2 bottom-0 left-0 text-primary opacity-30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                            </span>
                        </h2>

                        <p className="text-gray-400 text-base sm:text-lg mb-5 leading-relaxed">
                            I am Sinan MC, recognized as the{" "}
                            <Link href="/about" className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 transition-colors">
                                best Freelance Web Developer in Malappuram
                            </Link>
                            , professionally trained at{" "}
                            <a href="https://oxdu.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 transition-colors">
                                Oxdu Training Institute, Kondotty
                            </a>
                            , I specialise in building fast, modern websites and implementing powerful digital marketing strategies that help businesses across Malappuram, Calicut, and Kerala rank higher on Google and grow faster online.
                        </p>

                        <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                            My focus goes beyond development. As the{" "}
                            <span className="text-white font-medium">Best SEO Specialist in Malappuram</span>
                            {", "}I create conversion-focused digital solutions that generate real business results. Whether you need a new{" "}
                            <Link href="/portfolio" className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 transition-colors">
                                professional website
                            </Link>
                            {" "}or want to improve your Google rankings,{" "}
                            <Link href="/contact" className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 transition-colors">
                                let&apos;s talk
                            </Link>
                            .
                        </p>

                        {/* Highlights */}
                        <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                            {highlights.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.08 * index }}
                                    className="flex items-start gap-3 group p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                                >
                                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/about">
                                <Button size="lg" className="rounded-full text-base font-bold bg-gradient-to-r from-primary to-accent text-black hover:opacity-90 transition-all duration-300 shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] hover:scale-[1.03] relative overflow-hidden group">
                                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                    Learn More About Me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.93, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto group perspective-1000">
                            {/* Multi-layer decorative borders */}
                            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 transition-all duration-700 ease-out group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]" />
                            <div className="absolute -top-6 -right-6 w-full h-full border border-primary/10 rounded-2xl -z-20 transition-all duration-700 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:border-primary/30" />
                            <div className="absolute -bottom-3 -left-3 w-full h-full bg-dark-200/80 rounded-2xl -z-10 transition-all duration-700 ease-out group-hover:-translate-x-5 group-hover:translate-y-5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 group-hover:border-primary/10" />

                            {/* Glow */}
                            <div className="absolute -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-dark-200 group-hover:border-primary/30 transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] block z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-70 z-10 transition-opacity duration-500 group-hover:opacity-50" />

                                <Image
                                    src="/freelance-web-developer-SEO-specialist-Malappuram.webp"
                                    alt="Sinan MC working on web development and SEO projects in Malappuram, Kerala"
                                    fill
                                    className="object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-1 will-change-transform z-0"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                    loading="lazy"
                                />

                                {/* Hover Badge */}
                                <div className="absolute bottom-6 left-6 right-6 z-20 bg-dark/80 backdrop-blur-2xl border border-primary/30 p-5 rounded-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150 shadow-[0_10px_30px_rgba(255,215,0,0.2)]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl pointer-events-none" />
                                    <p className="text-white font-bold text-base tracking-wide flex items-center justify-between">
                                        Certified Expert
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                        </span>
                                    </p>
                                    <p className="text-primary/90 text-sm mt-1 font-medium">Web Development &amp; SEO</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
