// Server Component — no "use client", no JS sent to browser.
// The marquee animation is pure CSS (animate-marquee in globals.css).
import Image from "next/image";

const keywords = [
    "Best Web Developer in Malappuram",
    "SEO Expert Kerala",
    "Modern UI/UX Design",
    "High Speed Performance",
    "Google Ranking Specialist",
    "Custom Web Solutions",
    "Freelance Developer Malappuram",
    "E-commerce Specialist",
];

export const KeywordMarquee = () => {
    return (
        <section
            className="relative w-full h-20 sm:h-24 bg-dark/50 border-y border-accent/10 overflow-hidden group flex items-center backdrop-blur-sm"
            aria-label="Service Highlights Marquee"
        >
            {/* Premium Gradient Overlays for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div className="flex overflow-hidden select-none">
                <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
                    {[...Array(2)].map((_, setIndex) => (
                        <div key={setIndex} className="flex items-center shrink-0">
                            {keywords.map((text, i) => (
                                <div key={i} className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6">
                                    <span className="text-sm sm:text-base font-bold text-gray-500 hover:text-primary transition-colors duration-300 tracking-[0.15em] uppercase hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
                                        {text}
                                    </span>
                                    <div className="relative shrink-0">
                                        <Image
                                            src="/Star-1-1.svg"
                                            alt=""
                                            width={18}
                                            height={18}
                                            className="opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 brightness-110 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Hidden SEO Text for crawlers */}
            <div className="sr-only">
                <h2>Expert Web Development and SEO Services in Malappuram, Kerala</h2>
                <p>Providing high-performance web development, SEO optimization, and UI/UX design services to help businesses grow locally and globally.</p>
                <ul>
                    {keywords.map((k, i) => <li key={i}>{k}</li>)}
                </ul>
            </div>
        </section>
    );
};
