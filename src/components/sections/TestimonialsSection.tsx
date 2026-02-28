"use client";

import { Star, Quote } from "lucide-react";
import AnimatedLine from "@/components/ui/AnimatedLine";

// ─── Testimonials Data ─────────────────────────────────────────────────────────
const testimonials = [
    {
        name: "Ahmed Luthu",
        company: "AI First Kannur",
        text: "Sinan MC is the best freelance web developer and SEO specialist in Malappuram, Kerala. He built a fast, modern website and implemented powerful SEO strategies. Within months, our website ranked on Google and started generating consistent business enquiries.",
    },
    {
        name: "Qland Team",
        company: "Qland Shirt Manufacturer, Malappuram",
        text: "We highly recommend Sinan MC for any business looking for the best freelance web developer in Malappuram. Our new website looks professional, loads fast, and ranks well on Google. Our sales and online visibility improved significantly.",
    },
    {
        name: "Sinan VK",
        company: "Digisinans Digital Marketing Agency",
        text: "Sinan MC has exceptional technical knowledge and SEO expertise. He is truly the best freelance SEO specialist in Malappuram. His SEO strategies helped improve rankings, traffic, and overall business growth.",
    },
    {
        name: "Rashid P",
        company: "Ecommerce Business Owner",
        text: "Our ecommerce website was completely transformed by Sinan MC. His web development and SEO work helped us rank higher and increase our online sales. He is the best freelance web developer and SEO specialist in Malappuram, Kerala.",
    },
    {
        name: "Nihal K",
        company: "Startup Founder",
        text: "If you want real results, Sinan MC is the best freelance web developer in Malappuram. He created a powerful website and optimized everything for Google ranking and performance.",
    },
    {
        name: "Faisal Rahman",
        company: "Local Service Business",
        text: "After working with Sinan MC, our business started getting more website traffic and leads. He is without doubt the best freelance SEO specialist in Malappuram.",
    },
];

// ─── Avatar Initials Helper ────────────────────────────────────────────────────
function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

// ─── Avatar Colors ─────────────────────────────────────────────────────────────
const avatarColors = [
    "from-amber-500 to-yellow-600",
    "from-yellow-600 to-amber-700",
    "from-amber-400 to-yellow-500",
    "from-yellow-500 to-amber-600",
    "from-amber-600 to-yellow-700",
    "from-yellow-400 to-amber-500",
];

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
    const firstRow = testimonials.slice(0, 3);
    const secondRow = testimonials.slice(3, 6);

    return (
        <section
            id="testimonials"
            aria-label="Client Testimonials - Sinan MC Best Freelance Web Developer SEO Specialist Malappuram"
            className="bg-dark py-16 sm:py-24 lg:py-32 overflow-hidden relative isolate"
        >
            {/* ── Decorative Background ── */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                {/* Top-center gold radial glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] bg-primary/[0.06] blur-[140px] rounded-full" />
                {/* Bottom accent glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/[0.04] blur-[100px] rounded-full" />
                {/* Subtle dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,215,0,0.6) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* ── Section Header ── */}
            <div className="max-w-4xl mx-auto px-5 sm:px-8 mb-14 sm:mb-18 lg:mb-20 text-center relative z-10">
                <div
                    className="animate-fade-in-up"
                >
                    {/* Small label */}
                    <span className="inline-flex items-center gap-2.5 text-primary uppercase tracking-[0.3em] text-[0.65rem] sm:text-xs font-bold mb-5">
                        <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary/80 inline-block" />
                        Client Testimonials
                        <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary/80 inline-block" />
                    </span>

                    <AnimatedLine className="max-w-[140px] mx-auto mb-5" />

                    {/* Main H2 */}
                    <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.1rem] font-extrabold text-white leading-[1.18] tracking-tight mt-1">
                        What Clients Say About the{" "}
                        <span className="bg-gradient-to-r from-primary via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                            Best Freelance Web Developer
                        </span>{" "}
                        and SEO Specialist in{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-primary bg-clip-text text-transparent">
                            Malappuram, Kerala
                        </span>
                    </h2>

                    {/* Supporting paragraph */}
                    <p className="text-gray-400 mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                        Real client success stories and feedback from businesses
                        that worked with Sinan MC. These testimonials prove why
                        he is recognized as the{" "}
                        <strong className="text-gray-300 font-medium">
                            best freelance web developer in Malappuram
                        </strong>{" "}
                        and the{" "}
                        <strong className="text-gray-300 font-medium">
                            best freelance SEO specialist in Malappuram
                        </strong>{" "}
                        delivering real ranking results, traffic growth, and
                        business success.
                    </p>
                </div>
            </div>

            {/* ── Infinite Marquee ── */}
            <div className="flex flex-col gap-5 sm:gap-7 relative">
                {/* Edge fades */}
                <div className="absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 lg:w-56 bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 lg:w-56 bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none" />

                {/* Row 1 — scrolls RIGHT (reverse) */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="flex gap-4 sm:gap-5 lg:gap-6 px-2 sm:px-3 py-3 shrink-0"
                            >
                                {firstRow.map((testimonial, idx) => (
                                    <TestimonialCard
                                        key={`r1-${i}-${idx}`}
                                        testimonial={testimonial}
                                        colorClass={avatarColors[idx % avatarColors.length]}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls LEFT */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="flex gap-4 sm:gap-5 lg:gap-6 px-2 sm:px-3 py-3 shrink-0"
                            >
                                {secondRow.map((testimonial, idx) => (
                                    <TestimonialCard
                                        key={`r2-${i}-${idx}`}
                                        testimonial={testimonial}
                                        colorClass={avatarColors[(idx + 3) % avatarColors.length]}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom Trust Statement ── */}
            <div
                className="relative z-10 mt-14 sm:mt-20 lg:mt-24 text-center px-5 animate-fade-in-up"
            >
                <div className="inline-flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-primary/25 bg-primary/[0.06] backdrop-blur-md shadow-[0_0_30px_rgba(255,215,0,0.04)]">
                    <span className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary"
                            />
                        ))}
                    </span>
                    <span className="text-primary font-semibold tracking-widest text-[0.65rem] sm:text-xs uppercase">
                        Trusted by businesses across Malappuram, Kerala for web
                        development and SEO success.
                    </span>
                </div>
            </div>
        </section>
    );
}

// ─── Testimonial Card ──────────────────────────────────────────────────────────
function TestimonialCard({
    testimonial,
    colorClass,
}: {
    testimonial: (typeof testimonials)[0];
    colorClass: string;
}) {
    return (
        <article
            className="
                w-[280px] sm:w-[380px] lg:w-[420px]
                whitespace-normal
                bg-[#0a0a0a]/60
                backdrop-blur-xl
                border border-white/[0.08]
                rounded-2xl sm:rounded-3xl
                p-5 sm:p-6 lg:p-7
                hover:border-primary/40
                hover:bg-white/[0.05]
                hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)]
                transition-all duration-500
                relative
                group
                shrink-0
                flex flex-col gap-4
                will-change-transform
                hover:-translate-y-1.5
            "
        >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/[0.1] via-transparent to-transparent" />

            {/* Top row: stars + quote icon */}
            <div className="relative z-10 flex items-start justify-between gap-2">
                <div
                    className="flex gap-0.5 sm:gap-1"
                    aria-label="5 star rating"
                    role="img"
                >
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary drop-shadow-[0_0_4px_rgba(255,215,0,0.5)]"
                        />
                    ))}
                </div>
                <Quote
                    aria-hidden="true"
                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-primary/[0.12] group-hover:text-primary/25 transition-colors duration-500 flex-shrink-0 -mt-0.5"
                    strokeWidth={1.5}
                />
            </div>

            {/* Quote text */}
            <blockquote className="relative z-10 text-gray-300/85 leading-[1.75] text-[0.82rem] sm:text-sm lg:text-[0.925rem] font-light italic flex-1">
                &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            {/* Divider + Author */}
            <div className="relative z-10 pt-4 border-t border-white/[0.07] flex items-center gap-3">
                {/* Avatar */}
                <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${colorClass} flex-shrink-0 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-2 ring-white/10`}
                    aria-hidden="true"
                >
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        {getInitials(testimonial.name)}
                    </span>
                </div>

                <div className="min-w-0">
                    <h4 className="text-white font-bold text-sm sm:text-[0.925rem] truncate leading-snug">
                        {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-[0.72rem] sm:text-xs truncate mt-0.5 leading-snug">
                        {testimonial.company}
                    </p>
                </div>
            </div>
        </article>
    );
}
