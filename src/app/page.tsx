import dynamicImport from "next/dynamic";
import Script from "next/script";
import { faqs } from "@/data/faqData";

import Hero from "@/components/sections/Hero";

const About = dynamicImport(() => import("@/components/sections/About"));
const Brands = dynamicImport(() => import("@/components/sections/BrandsClient"));

const Services = dynamicImport(() => import("@/components/sections/Services"));

const CertificationsSection = dynamicImport(
    () => import("@/components/sections/CertificationsSection")
);

const WhyChooseSection = dynamicImport(
    () => import("@/components/sections/WhyChooseSection")
);

const WebSeoComboSection = dynamicImport(
    () => import("@/components/sections/WebSeoComboSection")
);

const TestimonialsSection = dynamicImport(
    () => import("@/components/sections/TestimonialsSection")
);

const FAQ = dynamicImport(() => import("@/components/sections/FAQ"));

const HomeContactCTA = dynamicImport(
    () => import("@/components/sections/HomeContactCTA")
);

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sinan MC",
    url: "https://sinanmcmalappuram.in",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export const dynamic = "force-static";

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
