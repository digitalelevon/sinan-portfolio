import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
    title: "Portfolio | Sinan MC Malappuram - Best Freelance Web Developer & SEO Specialist",
    description: "Explore a curated showcase of real client projects, high-ranking SEO results, futuristic AI automation systems, and high-converting websites by Sinan MC Malappuram.",
    alternates: {
        canonical: "https://sinanmcmalappuram.in/portfolio",
    },
    openGraph: {
        title: "Portfolio | Sinan MC Malappuram",
        description: "Explore a curated showcase of real client projects, high-ranking SEO results, futuristic AI automation systems, and high-converting websites.",
        url: "https://sinanmcmalappuram.in/portfolio",
        images: [
            {
                url: "/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC Malappuram Portfolio"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Sinan MC Malappuram",
        description: "Explore a curated showcase of real client projects, high-ranking SEO results, futuristic AI automation systems, and high-converting websites.",
        images: ["/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp"],
    }
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
