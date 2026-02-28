import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/components/layout/GlobalProviders";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://sinanmcmalappuram.in"),
    title: {
        default: "Best Freelance Web Developer & SEO Specialist in Malappuram",
        template: "%s | Sinan MC",
    },
    description:
        "Looking for the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala? Sinan MC delivers #1 Google rankings and high-converting websites.",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://sinanmcmalappuram.in",
        siteName: "Sinan MC Malappuram",
        title: "Best Freelance Web Developer & SEO Specialist in Malappuram",
        description: "Looking for the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala? Sinan MC delivers #1 Google rankings and high-converting websites.",
        images: [
            {
                url: "/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp",
                width: 1200,
                height: 630,
                alt: "Sinan MC Malappuram - Best Freelance Web Developer & SEO Specialist",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@sinanmc",
        creator: "@sinanmc",
        title: "Best Freelance Web Developer & SEO Specialist in Malappuram",
        description:
            "Looking for the best Freelance Web Developer & SEO Specialist in Malappuram, Kerala? Sinan MC delivers #1 Google rankings and high-converting websites.",
        images: ["/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Preconnect to Google Fonts origin (Inter is loaded via next/font, but this helps any 3rd-party fonts) */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* Preload hero LCP image — browser fetches it before parsing JS */}
                <link
                    rel="preload"
                    as="image"
                    href="/freelance-web-developer-SEO-specialist-Malappuram.webp"
                    type="image/webp"
                    fetchPriority="high"
                />
            </head>
            <body className={`${inter.variable} ${inter.className} antialiased`}>
                <GlobalProviders>
                    {children}
                </GlobalProviders>
            </body>
        </html>
    );
}
