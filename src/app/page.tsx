import nextDynamic from "next/dynamic";
import Script from "next/script";
import { faqs } from "@/data/faqData";

import Hero from "@/components/sections/Hero";

const About = nextDynamic(() => import("@/components/sections/About"));
const Brands = nextDynamic(() => import("@/components/sections/BrandsClient"));

const Services = nextDynamic(() => import("@/components/sections/Services"));

const CertificationsSection = nextDynamic(
    () => import("@/components/sections/CertificationsSection")
);

const WhyChooseSection = nextDynamic(
    () => import("@/components/sections/WhyChooseSection")
);

const WebSeoComboSection = nextDynamic(
    () => import("@/components/sections/WebSeoComboSection")
);

const TestimonialsSection = nextDynamic(
    () => import("@/components/sections/TestimonialsSection")
);

const FAQ = nextDynamic(() => import("@/components/sections/FAQ"));

const HomeContactCTA = nextDynamic(
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
