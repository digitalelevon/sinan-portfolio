// Pure CSS implementation — no "use client", no framer-motion.
// This runs zero client-side JavaScript and is a Server Component.
export default function AnimatedLine({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div
            className={`relative w-full h-[2px] bg-dark-200 overflow-hidden rounded-full ${className}`}
        >
            {/* Shimmer sweep 1 — CSS animation, GPU composited */}
            <div
                className="absolute top-0 left-0 h-full w-[140px] bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ animation: "shimmerSweep 2.5s linear infinite" }}
            />
            {/* Shimmer sweep 2 — offset reverse */}
            <div
                className="absolute top-0 right-0 h-full w-[80px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"
                style={{ animation: "shimmerSweep 3.5s linear infinite reverse" }}
            />
        </div>
    );
}
