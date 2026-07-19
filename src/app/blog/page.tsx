import type { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
    title: "SEO & Web Development Blog — Sinan MC, Malappuram",
    description:
        "Expert articles on technical SEO, web development, AI automation, Core Web Vitals, and digital marketing from Sinan MC — a certified SEO consultant and web developer based in Malappuram, Kerala.",
    alternates: {
        canonical: "https://sinanmcmalappuram.in/blog",
    },
    openGraph: {
        title: "SEO & Web Development Blog — Sinan MC, Malappuram",
        description:
            "Practical insights on technical SEO, Next.js development, local SEO for Kerala businesses, AI automation, and Google ranking strategies.",
        siteName: "Sinan MC",
        url: "https://sinanmcmalappuram.in/blog",
        images: ["/freelance-web-developer-SEO-specialist-Malappuram.webp"],
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-dark pt-32 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                        SEO and Web Development <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FFC107] to-accent">Blog</span>
                    </h1>
                    <span className="block text-lg sm:text-xl md:text-2xl text-gray-300 font-medium tracking-normal mb-6 sm:mb-8 border-b border-primary/20 pb-3 sm:pb-4 inline-block mx-auto">
                        Sinan MC — Malappuram
                    </span>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                        Practical articles on technical SEO, modern web development, AI automation, and digital marketing strategies — written by Sinan MC, a certified SEO consultant and web developer based in Malappuram, Kerala. Learn how to rank higher on Google and grow your business online.
                    </p>
                </div>

                {/* Blog Grid Client Component */}
                <BlogGrid />
            </div>
        </main>
    );
}
