"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactPreview() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-dark">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.15),transparent_70%)] rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(255,215,0,0.12)] hover:border-primary/40 rounded-3xl p-10 sm:p-14 lg:p-20 overflow-hidden transition-all duration-700"
                >
                    {/* Inner Shimmers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-12 pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-white relative z-10">
                        Ready to start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">project?</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed relative z-10">
                        Let&apos;s collaborate to build something amazing. Reach out today and let&apos;s discuss your vision.
                    </p>
                    <Link href="/contact" className="relative z-10 inline-block">
                        <Button size="lg" className="group rounded-full text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10 bg-gradient-to-r from-primary via-yellow-400 to-accent text-black font-extrabold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                            <span className="relative z-10 flex items-center">
                                Get in Touch <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                            </span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

