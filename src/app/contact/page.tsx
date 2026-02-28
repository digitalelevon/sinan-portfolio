import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Sinan MC Malappuram | Best Freelance Web Developer & SEO Specialist',
    description: 'Get in touch with Sinan MC Malappuram, the best freelance web developer & SEO specialist in Malappuram, Kerala. Contact for professional website development, SEO services, AI automation, and digital marketing solutions to grow your business online.',
    alternates: {
        canonical: 'https://sinanmcmalappuram.in/contact',
    },
    openGraph: {
        title: 'Contact Sinan MC Malappuram | Best Freelance Web Developer & SEO Specialist',
        description: 'Get in touch with Sinan MC Malappuram, the best freelance web developer & SEO specialist in Malappuram, Kerala.',
        url: 'https://sinanmcmalappuram.in/contact',
        siteName: 'Sinan MC Malappuram',
        images: [
            {
                url: '/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp',
                width: 1200,
                height: 630,
                alt: 'Contact Sinan MC Malappuram',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Contact Sinan MC Malappuram | Best Freelance Web Developer & SEO Specialist',
        description: 'Get in touch with Sinan MC Malappuram, the best freelance web developer & SEO specialist in Malappuram, Kerala.',
        images: ['/images/best-freelance-web-developer-SEO-specialist-in-Malappuram.webp'],
    },
};

export default function ContactPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Sinan MC Malappuram',
        description: 'Best freelance web developer & SEO specialist in Malappuram, Kerala.',
        url: 'https://sinanmcmalappuram.in/contact',
        telephone: '+917510477475',
        image: 'https://sinanmcmalappuram.in/freelance-web-developer-SEO-specialist-Malappuram.webp',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Malappuram',
            addressRegion: 'Kerala',
            addressCountry: 'IN',
        },
        sameAs: [
            'https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1',
            'https://www.linkedin.com/in/mhd-sinan-mc',
            'https://www.facebook.com/share/1KaYZRrGny/',
            'https://x.com/mc_sinan3229',
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContactClient />
        </>
    );
}
