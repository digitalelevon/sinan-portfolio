import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
    title: "About Sinan MC | Web Developer & SEO Consultant in Malappuram, Kerala",
    description:
        "Meet Sinan MC — B.Com graduate, Oxdu-certified digital marketing professional, and the best freelance web developer in Malappuram with 50+ completed projects. Helping Kerala businesses rank on Google since 2024.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Sinan MC | Certified Web Developer & SEO Specialist",
        description:
            "Sinan MC holds a B.Com from IGNOU and a professional digital marketing certification from Oxdu, Kondotty. With 50+ projects across Malappuram, Calicut, and Kerala, he specialises in high-performance websites, technical SEO, and measurable Google rankings.",
        url: "https://sinanmcmalappuram.in/about",
        images: ["/freelance-web-developer-SEO-specialist-Malappuram.webp"],
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
