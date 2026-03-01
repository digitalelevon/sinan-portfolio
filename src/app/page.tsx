import dynamic from "next/dynamic";
import Script from "next/script";

import Hero from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About"));
const Brands = dynamic(() => import("@/components/sections/BrandsClient"));

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

const FAQ = dynamic(() => import("@/components/sections/FAQ"));

const HomeContactCTA = dynamic(
    () => import("@/components/sections/HomeContactCTA")
);

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sinan MC",
    url: "https://sinanmcmalappuram.in",
};

export default function Home() {
    return (
        <>
            <Script
                id="person-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />

            <main role="main">
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
