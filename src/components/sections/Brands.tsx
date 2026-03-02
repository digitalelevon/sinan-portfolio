"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import { Building2, Users, Trophy, TrendingUp } from "lucide-react";

const stats = [
    { label: "Websites Delivered", value: "15+", icon: Building2 },
    { label: "Client Satisfaction", value: "100%", icon: Users },
    { label: "Years Experience", value: "2+", icon: Trophy },
    { label: "SEO Results", value: "Proven", icon: TrendingUp },
];

const brands = [
    { id: 1, name: "Brand 1", src: "/brand-1.webp" },
    { id: 2, name: "Brand 2", src: "/brand-2.webp" },
    { id: 3, name: "Brand 3", src: "/brand-3.webp" },
    { id: 4, name: "Brand 4", src: "/brand-4.webp" },
    { id: 5, name: "Brand 5", src: "/brand-5.webp" },
    { id: 6, name: "Brand 6", src: "/brand-6.webp" }
];

export default function Brands() {
    return (
        <LazyMotion features={domAnimation}>
            <section
                className="border-y border-white/[0.05] bg-gradient-to-b from-[#0A0A0A] to-[#141414] py-[60px] md:py-[100px] relative overflow-hidden"
                aria-label="Trusted by Brands and Businesses in Malappuram"
            >
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-sm md:text-base font-medium tracking-[0.2em] text-white/50 uppercase mb-4">
                            Trusted by industry leaders
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                            Brands That Trust{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Sinan MC
                            </span>
                        </h2>
                    </div>

                    {/* Brands Container */}
                    <div className="mb-20 overflow-hidden relative group w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#141414] to-transparent z-10" />

                        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex gap-12 md:gap-24 px-6 md:px-12 items-center flex-nowrap">
                                    {[...brands, ...brands].map((brand, idx) => (
                                        <div key={`brand-${setIndex}-${idx}`} className="flex items-center justify-center shrink-0">
                                            <Image
                                                src={brand.src}
                                                alt={brand.name}
                                                width={160}
                                                height={70}
                                                className="w-24 md:w-32 xl:w-40 object-contain opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-500 brightness-0 invert cursor-pointer"
                                                priority={setIndex === 0 && idx < 6}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-16 lg:mt-24 border-t border-white/[0.05] pt-12 md:pt-16">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="relative bg-[#0a0a0a]/50 backdrop-blur-xl p-5 sm:p-7 rounded-2xl border border-white/[0.06] hover:border-primary/40 transition-all duration-500 group text-center overflow-hidden cursor-default shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(255,215,0,0.12)] hover:-translate-y-2 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl z-0" />
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}

// Force Turbopack cache invalidation
