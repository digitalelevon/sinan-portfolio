"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Search, Share2, Target, Cpu, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
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
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const services = [
    {
        id: "01",
        title: "Web Development",
        description: "Custom, fast-loading, mobile-responsive, and SEO-optimized websites designed by the best freelance web developer in Malappuram to rank higher and convert visitors into customers.",
        icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
        keywords: ["Custom", "Fast-loading", "Responsive"]
    },
    {
        id: "02",
        title: "Search Engine Optimization (SEO)",
        description: "Advanced SEO services by the best freelance SEO specialist in Malappuram including keyword research, on-page SEO, technical SEO, and Google ranking optimization.",
        icon: <Search className="w-8 h-8 md:w-10 md:h-10" />,
        keywords: ["On-page", "Technical", "Ranking"]
    },
    {
        id: "03",
        title: "Social Media Marketing (SMM)",
        description: "Strategic social media marketing to increase brand awareness, engagement, and generate quality leads from Instagram, Facebook, and other platforms.",
        icon: <Share2 className="w-8 h-8 md:w-10 md:h-10" />,
        keywords: ["Awareness", "Engagement", "Leads"]
    },
    {
        id: "04",
        title: "Search Engine Marketing (SEM)",
        description: "High-converting Google Ads campaigns designed to generate instant traffic, leads, and sales for your business.",
        icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
        keywords: ["Google Ads", "Instant Traffic", "Sales"]
    },
    {
        id: "05",
        title: "AI Automation",
        description: "Smart AI automation solutions including chatbots, automated workflows, and business automation to improve efficiency and growth.",
        icon: <Cpu className="w-8 h-8 md:w-10 md:h-10" />,
        keywords: ["Chatbots", "Workflows", "Efficiency"]
    },
    {
        id: "06",
        title: "Branding",
        description: "Professional branding services including brand identity, logo design, and digital presence creation to build trust and authority.",
        icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
        keywords: ["Identity", "Logo Design", "Trust"]
    }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    return (
        <motion.div
            variants={fadeUpVariant}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-6 md:p-8 xl:p-10 rounded-3xl xl:rounded-[2.5rem] bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(255,215,0,0.12)]"
        >
            {/* CSS-only spotlight — no JS motion values */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl xl:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 z-0 bg-[radial-gradient(600px_circle_at_center,rgba(255,215,0,0.12),transparent_80%)]" />

            {/* Background Index Number */}
            <span className="absolute -top-4 -right-2 text-7xl md:text-8xl xl:text-9xl font-black text-white/[0.03] group-hover:text-primary/[0.08] group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-700 pointer-events-none select-none italic z-0">
                {service.id}
            </span>

            {/* Icon Wrapper */}
            <div className="relative mb-8 md:mb-10 text-primary group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-3 origin-left z-10">
                <div className="absolute -inset-6 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="relative drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                    {service.icon}
                </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col h-full z-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-yellow-200 transition-all duration-500 tracking-tight">
                    {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 flex-grow text-balance opacity-80 group-hover:opacity-100 group-hover:text-gray-300 transition-all duration-500">
                    {service.description}
                </p>

                {/* Keywords/Tags */}
                <div className="flex flex-wrap gap-2 md:gap-2.5 mt-auto">
                    {service.keywords.map((kw, i) => (
                        <span
                            key={i}
                            className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] text-gray-500 border border-white/10 bg-white/[0.03] px-3 py-1.5 md:px-4 md:py-2 rounded-full group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-500 hover:scale-105 cursor-default backdrop-blur-sm"
                        >
                            {kw}
                        </span>
                    ))}
                </div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none z-0" />

            {/* Animated Border Bottom */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-yellow-200 to-accent group-hover:w-full transition-all duration-700 ease-out z-10" />
        </motion.div>
    );
}

export default function Services() {
    return (
        <section
            id="services"
            aria-label="Web Development and SEO Services by Sinan MC Malappuram"
            className="relative bg-dark text-white py-16 md:py-24 lg:py-32 xl:py-36 overflow-hidden"
        >
            {/* Advanced Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.04),transparent_60%)] pointer-events-none translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_bottom_left,rgba(184,134,11,0.03),transparent_60%)] pointer-events-none -translate-x-1/4 translate-y-1/4" />

            {/* Animated floating blurs */}
            {/* Animated floating blur — replaced with static CSS gradient (no RAF) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.02),transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 lg:mb-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUpVariant}
                    >
                        <span className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-sm font-medium tracking-widest uppercase mb-6 md:mb-8 text-balance">
                            Premium Solutions
                        </span>
                        <AnimatedLine className="max-w-[150px] mx-auto mb-10" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-10 leading-[1.1] tracking-tight text-balance">
                            Expert <span className="bg-gradient-to-r from-primary via-yellow-200 to-secondary bg-clip-text text-transparent">Web Development & SEO</span> Services in Malappuram, Kerala
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg lg:text-xl md:leading-relaxed max-w-3xl mx-auto text-balance font-light">
                            I&apos;m Sinan MC, recognized as the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala. I use cutting-edge websites and tried-and-true SEO techniques to help businesses rank higher on Google, produce quality leads, and expand more quickly.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    className="mt-16 md:mt-28 text-center"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 md:gap-4 bg-primary hover:bg-yellow-400 text-black font-extrabold px-8 py-4 md:px-12 md:py-6 rounded-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,215,0,0.3)] group relative overflow-hidden"
                    >
                        <span className="relative z-10 text-sm md:text-base">Discover All Services</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform duration-500 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
