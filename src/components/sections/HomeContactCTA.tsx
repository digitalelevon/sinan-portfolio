"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle2, Clock, Star, Zap, MessageCircle } from "lucide-react";

const stats = [
    { icon: CheckCircle2, label: "Projects Done", value: "50+" },
    { icon: Star, label: "Happy Clients", value: "40+" },
    { icon: Clock, label: "Avg. Response", value: "< 2h" },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

export default function HomeContactCTA() {
    return (
        <section
            id="contact-cta"
            aria-label="Contact Sinan MC - Best Freelance Web Developer & SEO Specialist in Malappuram"
            className="relative bg-dark py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
        >
            {/* ── Background Layers ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] opacity-50" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[120px] opacity-30" />
            </div>

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />

            {/* Top border line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">

                {/* ── Label ── */}
                <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-5">
                    <span className="block w-10 h-px bg-gradient-to-r from-transparent to-primary/60 rounded-full" />
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <Zap className="w-3 h-3 text-primary" />
                        <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">
                            Get In Touch
                        </span>
                    </div>
                    <span className="block w-10 h-px bg-gradient-to-l from-transparent to-primary/60 rounded-full" />
                </motion.div>

                {/* ── Heading ── */}
                <motion.h2
                    {...fadeUp(0.1)}
                    className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight"
                >
                    Have a Project{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">in Mind?</span>
                    <br className="hidden sm:block" />
                    <span className="text-white"> Let&apos;s Build It </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Together.</span>
                </motion.h2>

                {/* ── Sub paragraph ── */}
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-center text-gray-400 mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    I help businesses in Malappuram and across Kerala grow with modern websites,
                    SEO, and digital marketing. Let&apos;s discuss your project and create
                    something powerful.
                </motion.p>

                {/* ── Stats row ── */}
                <motion.div
                    {...fadeUp(0.28)}
                    className="mt-10 grid grid-cols-3 gap-3 sm:gap-5 max-w-xl mx-auto"
                >
                    {stats.map(({ icon: Icon, label, value }) => (
                        <div
                            key={label}
                            className="relative flex flex-col items-center gap-1 p-2.5 sm:p-4 rounded-2xl bg-[#0a0a0a]/50 border border-white/[0.08] backdrop-blur-xl min-w-0 hover:border-primary/40 transition-all duration-500 group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary mb-0.5 relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                            <span className="text-white font-bold text-base sm:text-2xl leading-none relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300">{value}</span>
                            <span className="text-gray-500 text-[9px] sm:text-xs text-center leading-tight relative z-10 group-hover:text-gray-300 transition-colors duration-300">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* ── CTA Card ── */}
                <motion.div
                    {...fadeUp(0.36)}
                    className="mt-8 sm:mt-10 rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl p-5 sm:p-8 md:p-10 xl:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
                >
                    {/* Card inner glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(255,215,0,0.04),transparent)] pointer-events-none rounded-3xl" />

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center relative z-10">

                        {/* Contact Me */}
                        <Link
                            href="/contact"
                            className="group relative overflow-hidden h-14 w-full sm:w-auto min-w-[180px] px-8 rounded-2xl bg-gradient-to-r from-primary via-[#FFC107] to-accent text-dark font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.04] shadow-[0_0_30px_rgba(255,215,0,0.4),0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6),0_4px_30px_rgba(0,0,0,0.4)]"
                        >
                            <Mail className="w-5 h-5 shrink-0" />
                            Contact Me
                            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                            {/* Shimmer */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Link>

                        {/* WhatsApp Me */}
                        <a
                            href="https://wa.me/917510477475?text=hi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group h-14 w-full sm:w-auto min-w-[180px] px-8 rounded-2xl border border-primary/40 bg-white/[0.03] text-primary font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary hover:text-dark hover:scale-[1.04] hover:border-primary hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] relative overflow-hidden"
                        >
                            <MessageCircle className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            WhatsApp Me
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </a>
                    </div>

                    {/* Trust line */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm relative z-10">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                        Usually responds within 2 hours &mdash; No spam, just results.
                    </div>
                </motion.div>

                {/* ── Bottom decorative line ── */}
                <motion.div {...fadeUp(0.44)} className="mt-12 flex items-center justify-center gap-3 opacity-30">
                    <span className="block h-px w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
                    <span className="text-primary text-xs tracking-widest uppercase">Malappuram · Kerala · India</span>
                    <span className="block h-px w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
                </motion.div>

            </div>

            {/* Bottom border line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </section>
    );
}
