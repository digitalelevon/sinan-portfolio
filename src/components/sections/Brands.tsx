"use client";

import { motion } from "framer-motion";
import { Building2, Users, Trophy, TrendingUp } from "lucide-react";

const stats = [
    { label: "Websites Delivered", value: "15+", icon: Building2 },
    { label: "Client Satisfaction", value: "100%", icon: Users },
    { label: "Years Experience", value: "2+", icon: Trophy },
    { label: "SEO Results", value: "Proven", icon: TrendingUp },
];

const brands = [
    { name: "Brand One", logo: "" },
    { name: "Brand Two", logo: "" },
    { name: "Brand Three", logo: "" },
    { name: "Brand Four", logo: "" },
    { name: "Brand Five", logo: "" },
    { name: "Brand Six", logo: "" },
];

export default function Brands() {
    return (
        <section
            className="py-16 sm:py-20 md:py-24 bg-dark-100 relative overflow-hidden"
            aria-label="Trusted by Brands and Businesses in Malappuram"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,215,0,0.06),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="block w-6 h-px bg-primary/60 rounded-full" />
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                            Trusted By
                        </span>
                        <span className="block w-6 h-px bg-primary/60 rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                        Brands and Businesses That Trust{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Sinan MC Malappuram
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                        Sinan MC Malappuram works with startups, local businesses, and growing companies, providing expert web development and SEO services.
                    </p>
                </motion.div>

                {/* Brands Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16 sm:mb-20 items-center"
                >
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                            className="relative h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 cursor-pointer bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-primary/40 hover:bg-primary/5 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="text-gray-500 text-sm font-semibold group-hover:text-white transition-colors duration-500 relative z-10 tracking-widest uppercase">{brand.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="relative bg-[#0a0a0a]/50 backdrop-blur-xl p-5 sm:p-7 rounded-2xl border border-white/[0.06] hover:border-primary/40 transition-all duration-500 group text-center overflow-hidden cursor-default shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(255,215,0,0.12)]"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl z-0" />

                            {/* Animated Bottom Highlight */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-700 ease-out z-10" />

                            <div className="inline-flex p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 text-primary mb-4 sm:mb-5 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
                                <stat.icon size={24} className="group-hover:-rotate-6 transition-transform duration-500" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-yellow-300 transition-all duration-500 relative z-10 tracking-tight">
                                {stat.value}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-[0.2em] relative z-10 group-hover:text-gray-300 transition-colors duration-500">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
