import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
    title: "Portfolio | Web Development & SEO Projects — Sinan MC, Malappuram",
    description: "Explore Sinan MC's portfolio — real client projects including high-ranking SEO campaigns, custom Next.js websites, AI automation systems, and social media marketing work across Kerala.",
    alternates: {
        canonical: "https://sinanmcmalappuram.in/portfolio",
    },
    openGraph: {
        title: "Portfolio | Web Development & SEO Projects — Sinan MC",
        description: "Browse a curated showcase of SEO ranking results, high-converting websites, AI automation projects, and digital marketing campaigns built for businesses across Malappuram and Kerala.",
        url: "https://sinanmcmalappuram.in/portfolio",
        images: [
            {
                url: "/freelance-web-developer-SEO-specialist-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC portfolio — web development and SEO projects in Kerala",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Web Development & SEO Projects — Sinan MC",
        description: "Browse SEO ranking results, high-converting websites, AI automation, and digital marketing campaigns built for Kerala businesses.",
        images: ["/freelance-web-developer-SEO-specialist-Malappuram.webp"],
    }
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
