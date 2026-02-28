// Server Component — no "use client", no framer-motion.
// All animations are CSS-only (GPU composited transforms/opacity).
import Hero3DClient from "./Hero3DClient";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { KeywordMarquee } from "./KeywordMarquee";

export default function Hero() {
    return (
        <section
            className="relative bg-dark overflow-hidden"
            aria-label="Hero - Best Freelance Web Developer and SEO Specialist in Malappuram"
        >
            {/* ── 3D Canvas Background (decorative, aria-hidden, mobile-disabled) ── */}
            <Hero3DClient />

            {/* ── Deep Background Layers ── */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,215,0,0.12),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-accent/8 rounded-full blur-[140px] -z-10 pointer-events-none" />

            {/* ── Noise Texture Overlay ── */}
            <div className="absolute inset-0 opacity-[0.025] bg-noise pointer-events-none" />

            {/* ── Subtle Grid ── */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,215,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Main Hero Container */}
            <div className="min-h-screen flex flex-col justify-center">

                <div className="container mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center lg:items-end">

                    {/* LEFT SIDE — CSS animated, no JS */}
                    <div
                        className="flex flex-col items-center text-center lg:items-start lg:text-left lg:self-center animate-fade-in-left"
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/25 backdrop-blur-xl text-primary text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-[0_0_30px_rgba(255,215,0,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] animate-fade-in"
                            style={{ animationDelay: "0.05s" }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for Freelance Projects
                            <Sparkles className="w-3.5 h-3.5 opacity-70" />
                        </div>

                        {/* Heading - SEO Optimized & Fully Responsive */}
                        <h1
                            aria-label="Best Freelance Web Developer and SEO Specialist in Malappuram, Kerala"
                            className="text-[34px] sm:text-5xl md:text-6xl lg:text-5xl xl:text-[64px] font-bold leading-[1.15] sm:leading-tight lg:leading-[1.1] text-white mb-5 sm:mb-6 animate-fade-in-up"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span className="block text-lg sm:text-2xl md:text-3xl text-primary font-medium tracking-wide border-b border-primary/20 pb-2 sm:pb-3 w-fit mx-auto lg:mx-0 mb-3 sm:mb-4">
                                Freelance Web Developer
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#B8860B] animate-gradient-x pb-1">
                                &amp; SEO Specialist
                            </span>
                            <span className="block text-[32px] sm:text-[42px] md:text-5xl lg:text-[42px] xl:text-6xl mt-1 sm:mt-2">
                                in Malappuram, Kerala
                            </span>
                            <span className="block text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 text-gray-200 font-semibold">
                                – Sinan MC
                            </span>
                        </h1>

                        {/* Description */}
                        <h2
                            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-7 sm:mb-10 leading-relaxed mx-auto lg:mx-0 font-medium animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <span className="text-white font-semibold">Sinan MC</span>, Oxdu-trained freelance web developer and SEO specialist in Malappuram. Specialized in building fast, SEO-friendly websites that rank on Google and convert visitors.
                        </h2>

                        {/* Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <Link href="/contact" className="w-full sm:w-auto" title="Contact Sinan MC for Web Development & SEO">
                                <Button className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-7 sm:px-8 text-sm sm:text-base font-bold bg-gradient-to-r from-primary via-[#FFC107] to-accent text-black hover:opacity-90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.4),0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </Link>

                            <Link href="/portfolio" className="w-full sm:w-auto" title="View Portfolio of Freelance Web Developer in Kerala">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-7 sm:px-8 text-sm sm:text-base font-semibold border-white/10 bg-white/[0.03] text-white hover:bg-primary/10 hover:border-primary/40 backdrop-blur-xl transition-all hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                                >
                                    <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                    View Portfolio
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE — CSS animated */}
                    <div
                        className="relative flex justify-center lg:justify-end order-last animate-fade-in-scale"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] aspect-[4/5]">

                            {/* Multi-layer glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/25 to-accent/10 rounded-full blur-[100px] -z-10" />
                            <div className="absolute inset-10 bg-primary/20 rounded-full blur-[60px] -z-10 animate-pulse-slow" />

                            {/* Image */}
                            <Image
                                src="/freelance-web-developer-SEO-specialist-Malappuram.webp"
                                alt="Sinan MC Malappuram Freelance Web Developer"
                                fill
                                priority
                                fetchPriority="high"
                                sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 480px"
                                className="object-contain object-bottom drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                            />

                            {/* Floating Card 1 — Trophy */}
                            <div
                                className="absolute bottom-16 -left-2 sm:-left-6 hidden sm:block group animate-fade-in"
                                style={{ animationDelay: "0.6s" }}
                            >
                                <div className="bg-dark-100/70 backdrop-blur-2xl border border-primary/20 p-3 sm:p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,215,0,0.15)]">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                                            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-primary drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold text-white">
                                            Top Rated
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card 2 — Projects */}
                            <div
                                className="absolute top-1/4 -right-2 sm:-right-6 hidden sm:block animate-fade-in"
                                style={{ animationDelay: "0.7s" }}
                            >
                                <div className="bg-dark-100/70 backdrop-blur-2xl border border-primary/20 p-3 sm:p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,215,0,0.15)]">
                                    <div className="flex flex-col">
                                        <span className="text-xl sm:text-2xl font-bold text-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">50+</span>
                                        <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                                            Projects Done
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marquee Section */}
                <KeywordMarquee />

            </div>
        </section>
    );
}