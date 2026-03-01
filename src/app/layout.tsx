import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/components/layout/GlobalProviders";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
    variable: "--font-inter",
});

export const viewport: Viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://sinanmcmalappuram.in"),

    title: {
        default:
            "Best Freelance Web Developer & SEO Specialist in Malappuram",
        template: "%s | Sinan MC",
    },

    description:
        "Looking for the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala? Sinan MC delivers #1 Google rankings and high-converting websites.",

    keywords: [
        "Freelance Web Developer Malappuram",
        "SEO Specialist Malappuram",
        "Web Designer Kerala",
        "Sinan MC",
    ],

    category: "technology",

    creator: "Sinan MC",

    publisher: "Sinan MC",

    authors: [
        {
            name: "Sinan MC",
            url: "https://sinanmcmalappuram.in",
        },
    ],

    alternates: {
        canonical: "/",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",
        url: "/",
        title:
            "Best Freelance Web Developer & SEO Specialist in Malappuram",

        description:
            "Professional Web Development and SEO services in Malappuram, Kerala.",

        siteName: "Sinan MC",

        locale: "en_IN",

        images: [
            {
                url: "/freelance-web-developer-SEO-specialist-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC Freelance Web Developer Malappuram",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Best Freelance Web Developer & SEO Specialist in Malappuram",

        description:
            "Professional Web Development and SEO services in Kerala.",

        creator: "@sinanmc",

        images: [
            "/freelance-web-developer-SEO-specialist-Malappuram.webp",
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`dark scroll-smooth ${inter.variable}`}
        >
            <body
                className={`${inter.className} antialiased bg-black text-white`}
            >
                <GlobalProviders>{children}</GlobalProviders>
                <SpeedInsights />
            </body>
        </html>
    );
}
