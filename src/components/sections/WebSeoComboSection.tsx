"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AnimatedLine from "@/components/ui/AnimatedLine";

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

export default function WebSeoComboSection() {
    return (
        <section
            className="relative bg-dark text-white py-16 md:py-24 lg:py-28 xl:py-32 overflow-hidden"
            aria-label="Web Development and SEO Combo Services by Sinan MC Malappuram"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.05),transparent_40%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(184,134,11,0.05),transparent_40%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24 lg:space-y-28 xl:space-y-32 relative z-10">

                {/* Main Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariant}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white leading-tight text-balance">
                        More About My <span className="bg-gradient-to-r from-primary via-yellow-200 to-secondary bg-clip-text text-transparent drop-shadow-sm">Web Development and SEO Combo</span> Services in Malappuram
                    </h2>
                    <AnimatedLine className="max-w-[150px] mx-auto mt-6 md:mt-8" />
                </motion.div>

                {/* BLOCK 1 — WEB DEVELOPMENT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center"
                >
                    {/* Image Left */}
                    <motion.div variants={fadeUpVariant} className="relative group order-first">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-100 aspect-[4/3]">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10 mix-blend-multiply" />
                            <Image
                                src="/web-development-seo-malappuram.webp"
                                alt="Best Freelance Web Developer & SEO Specialist in Malappuram, Kerala"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                loading="lazy"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Content Right */}
                    <motion.div variants={fadeUpVariant} className="space-y-6 md:space-y-8 relative lg:max-w-xl">
                        {/* Glass Backing for Mobile/Tablet consistency */}
                        <div className="absolute -inset-4 md:-inset-6 bg-white/[0.03] border border-white/5 rounded-3xl blur-xl -z-10 lg:hidden" />

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance">
                            Web Development by the Best <span className="text-primary">Freelance Web Developer</span> in Malappuram
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg text-balance">
                            I provide professional web development services as the best Freelance Web Developer & SEO Specialist in Malappuram, creating modern, fast-loading, mobile-responsive, and SEO-optimized websites designed to rank on Google and convert visitors into customers.
                        </p>
                        <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                            {[
                                "Custom Business Website Development",
                                "SEO-Optimized Structure for Google Ranking",
                                "Fast Loading and Mobile Responsive",
                                "Conversion-Focused Modern Design"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 md:gap-4 text-gray-200 group/item">
                                    <div className="mt-1 p-1 rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                    </div>
                                    <span className="text-base md:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* BLOCK 2 — SEO SERVICES */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center"
                >
                    {/* Content Left (Desktop) */}
                    <motion.div variants={fadeUpVariant} className="space-y-6 md:space-y-8 relative order-2 lg:order-1 lg:max-w-xl">
                        <div className="absolute -inset-4 md:-inset-6 bg-white/[0.03] border border-white/5 rounded-3xl blur-xl -z-10 lg:hidden" />
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance">
                            SEO Services by the Best <span className="text-primary">Freelance SEO Specialist</span> in Malappuram
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg text-balance">
                            As the best freelance SEO specialist in Malappuram, I help businesses rank higher on Google using proven search engine optimization strategies including keyword research, on-page SEO, technical SEO, and local SEO.
                        </p>
                        <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                            {[
                                "Local SEO for Malappuram Businesses",
                                "Google Ranking Optimization",
                                "Technical SEO and Website Optimization",
                                "Traffic Growth and Lead Generation"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 md:gap-4 text-gray-200 group/item">
                                    <div className="mt-1 p-1 rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                    </div>
                                    <span className="text-base md:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image Right (Desktop) */}
                    <motion.div variants={fadeUpVariant} className="relative group order-1 lg:order-2">
                        <div className="absolute -inset-1 bg-gradient-to-tl from-primary/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-100 aspect-[4/3]">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10 mix-blend-multiply" />
                            <Image
                                src="/seo-specialist-malappuram.webp"
                                alt="Best Freelance Web Developer and SEO Specialist in Malappuram, Kerala"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </motion.div>

                {/* BLOCK 3 — WEB + SEO COMBO */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-center"
                >
                    {/* Image Left */}
                    <motion.div variants={fadeUpVariant} className="relative group order-first">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-100 aspect-[4/3]">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10 mix-blend-multiply" />
                            <Image
                                src="/web-seo-combo-malappuram.webp"
                                alt="Best Freelance Web Developer and SEO Specialist in Malappuram"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Content Right */}
                    <motion.div variants={fadeUpVariant} className="space-y-6 md:space-y-8 relative lg:max-w-xl">
                        <div className="absolute -inset-4 md:-inset-6 bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-3xl -z-10 lg:hidden" />
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance group/heading cursor-default">
                            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 transition-all duration-500">Web Development and SEO Combo</span> Solution in Malappuram
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg text-balance">
                            I offer a complete web development and SEO combo service combining professional website creation with powerful search engine optimization. This ensures your website not only looks modern but also ranks on Google.
                        </p>
                        <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                            {[
                                "Website + SEO Complete Package",
                                "Google Ranking Focused Development",
                                "Business Growth Oriented Strategy",
                                "Long-Term SEO Success"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 md:gap-4 text-gray-200 group/item cursor-default">
                                    <div className="mt-1 p-1.5 rounded-xl bg-primary/10 border border-primary/20 group-hover/item:bg-primary/25 group-hover/item:border-primary/50 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-inner">
                                        <CheckCircle2 className="w-5 h-5 text-primary group-hover/item:text-white transition-colors" />
                                    </div>
                                    <span className="text-base md:text-lg font-medium group-hover/item:text-primary transition-colors duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
