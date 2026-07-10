import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Terms & Conditions | Sinan MC",
    description: "Terms and Conditions for using the Sinan MC website.",
    alternates: {
        canonical: "https://sinanmcmalappuram.in/terms-conditions",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-dark pt-32 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl relative z-10">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Content Container */}
                <div className="glass-card bg-dark-100/40 p-6 sm:p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

                    <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none">
                        <p>
                            Welcome to <strong>Sinan MC Malappuram</strong>!
                        </p>
                        <p>
                            These terms and conditions outline the rules and regulations for the use of Sinan MC Malappuram's Website, located at <Link href="/" className="text-primary hover:underline">sinanmcmalappuram.in</Link>.
                        </p>
                        <p>
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use Sinan MC Malappuram if you do not agree to take all of the terms and conditions stated on this page.
                        </p>

                        <h2>Cookies</h2>
                        <p>
                            We employ the use of cookies. By accessing Sinan MC Malappuram, you agreed to use cookies in agreement with the Sinan MC Malappuram's Privacy Policy.
                        </p>
                        <p>
                            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                        </p>

                        <h2>License</h2>
                        <p>
                            Unless otherwise stated, Sinan MC Malappuram and/or its licensors own the intellectual property rights for all material on Sinan MC Malappuram. All intellectual property rights are reserved. You may access this from Sinan MC Malappuram for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                        <p>You must not:</p>
                        <ul>
                            <li>Republish material from Sinan MC Malappuram</li>
                            <li>Sell, rent or sub-license material from Sinan MC Malappuram</li>
                            <li>Reproduce, duplicate or copy material from Sinan MC Malappuram</li>
                            <li>Redistribute content from Sinan MC Malappuram</li>
                        </ul>

                        <h2>Service Agreements</h2>
                        <p>
                            For clients embarking on software development, marketing, or consultation projects, separate and detailed Service Agreements or Contracts will be provided and signed before work commences. These Terms & Conditions govern general website usage only.
                        </p>

                        <h2>Hyperlinking to our Content</h2>
                        <p>
                            The following organizations may link to our Website without prior written approval:
                        </p>
                        <ul>
                            <li>Government agencies;</li>
                            <li>Search engines;</li>
                            <li>News organizations;</li>
                            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</li>
                        </ul>

                        <h2>iFrames</h2>
                        <p>
                            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                        </p>

                        <h2>Content Liability</h2>
                        <p>
                            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                        </p>

                        <h2>Contact Information</h2>
                        <p>
                            If you have any questions regarding our Terms and Conditions, please contact us:
                        </p>
                        <div className="p-6 mt-6 bg-dark-200/50 rounded-2xl border border-white/5">
                            <p className="m-0 font-medium text-white mb-2">Sinan MC Malappuram</p>
                            <p className="m-0 text-gray-400 mb-2">Malappuram, Kerala, India</p>
                            <p className="m-0">
                                <a href="https://wa.me/917510477475" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                                    Phone / WhatsApp: +91 7510 477 475
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
