import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

// ── Dynamic (code-split) ──────────────
const About = dynamic(() => import("@/components/sections/About"));
const Brands = dynamic(() => import("@/components/sections/Brands"));
const HomeContactCTA = dynamic(() => import("@/components/sections/HomeContactCTA"));
const Services = dynamic(() => import("@/components/sections/Services"));

const CertificationsSection = dynamic(
    () => import("@/components/sections/CertificationsSection")
);
const WhyChooseSection = dynamic(
    () => import("@/components/sections/WhyChooseSection")
);
const WebSeoComboSection = dynamic(
    () => import("@/components/sections/WebSeoComboSection")
);
const TestimonialsSection = dynamic(
    () => import("@/components/sections/TestimonialsSection")
);
const FAQ = dynamic(
    () => import("@/components/sections/FAQ")
);

export const metadata: Metadata = {
    title: "Best Freelance Web Developer & SEO Specialist in Malappuram",
    description:
        "Looking for the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala? Sinan MC delivers #1 Google rankings and high-converting websites.",
    keywords: [
        "best Freelance Web Developer & SEO Specialist in Malappuram",
        "best Freelance Web Developer & SEO Specialist in Malappuram, Kerala",
        "best Freelance Web Developer in Malappuram",
        "Best SEO Specialist in Malappuram",
        "Sinan MC Malappuram",
        "Web Development Kerala",
        "SEO Services Kerala",
    ],
    alternates: {
        canonical: "https://sinanmcmalappuram.in",
    },
    openGraph: {
        title: "Best Freelance Web Developer & SEO Specialist in Malappuram",
        description:
            "Looking for the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala? Sinan MC delivers #1 Google rankings and high-converting websites.",
        url: "https://sinanmcmalappuram.in",
        siteName: "Sinan MC Malappuram",
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC Malappuram - Best Freelance Web Developer & SEO Specialist in Malappuram, Kerala",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Freelance Web Developer & SEO Specialist in Malappuram",
        description:
            "Looking for the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala? Sinan MC delivers #1 Google rankings and high-converting websites.",
        images: ["/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp"],
    },
};

/* ── Structured Data: Person + LocalBusiness ── */
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sinan MC Malappuram",
    jobTitle: "Best Freelance Web Developer & SEO Specialist in Malappuram",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    description:
        "Sinan MC Malappuram is recognized as the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala, providing expert digital growth strategies.",
    url: "https://sinanmcmalappuram.in",
    sameAs: [
        "https://linkedin.com/in/sinanmc",
        "https://twitter.com/sinanmc",
        "https://instagram.com/sinanmc"
    ],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
    },
    knowsAbout: [
        "Web Development",
        "Search Engine Optimisation",
        "Local SEO",
        "Digital Marketing",
        "Social Media Marketing",
        "Google Ads",
        "AI Automation",
    ],
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sinan MC Malappuram — Best Freelance Web Developer & SEO Specialist",
    image: "https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp",
    description:
        "Providing the best freelance web development and SEO services in Malappuram, Kerala. Fast websites, proven Google rankings, and digital marketing strategies.",
    url: "https://sinanmcmalappuram.in",
    telephone: "+917510477475",
    priceRange: "₹₹",
    areaServed: {
        "@type": "Place",
        name: "Malappuram, Kerala, India",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
    },
    hasMap: "https://maps.google.com/?q=Malappuram,Kerala",
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [
        "https://linkedin.com/in/sinanmc",
        "https://twitter.com/sinanmc",
        "https://instagram.com/sinanmc"
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sinan MC Malappuram",
    url: "https://sinanmcmalappuram.in",
    description:
        "Portfolio and service website of Sinan MC, the best freelance web developer and SEO specialist in Malappuram, Kerala.",
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://sinanmcmalappuram.in/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

export const revalidate = 86400;

export default function Home() {
    return (
        <>
            {/* ── Structured Data ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />

            <main className="min-h-screen bg-black text-white">
                <Hero />
                <Brands />
                <About />
                <Services />
                <CertificationsSection />
                <WhyChooseSection />
                <WebSeoComboSection />
                <TestimonialsSection />
                <FAQ />
                <HomeContactCTA />
            </main>
        </>
    );
}
