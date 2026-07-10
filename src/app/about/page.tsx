import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
    title: "About | Best Freelance Web Developer & SEO Specialist in Malappuram",
    description:
        "Learn about Sinan MC — a B.Com graduate and certified digital marketing expert. Recognized as the Best SEO Specialist in Malappuram and best Freelance Web Developer in Malappuram, helping businesses rank #1.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Sinan MC | Best Freelance Web Developer & SEO Specialist in Malappuram",
        description:
            "Sinan MC is a B.Com graduate and certified digital marketing specialist from Malappuram, Kerala. He helps businesses get found on Google and grow online through expert web development. Hire the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala.",
        url: "https://sinanmcmalappuram.in/about",
        images: ["/freelance-web-developer-SEO-specialist-Malappuram.webp"],
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
