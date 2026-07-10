import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Privacy Policy | Sinan MC",
    description: "Privacy Policy of Sinan MC website.",
    alternates: {
        canonical: "https://sinanmcmalappuram.in/privacy-policy",
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-dark pt-32 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl relative z-10">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Privacy Policy
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
                            At <strong>Sinan MC Malappuram</strong>, accessible from <Link href="/" className="text-primary hover:underline">sinanmcmalappuram.in</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Sinan MC Malappuram and how we use it.
                        </p>

                        <p>
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        </p>

                        <h2>Information We Collect</h2>
                        <p>
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        </p>
                        <p>
                            When you contact us directly through forms on our website or via direct message (such as WhatsApp), we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        </p>

                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect in various ways, including to:</p>
                        <ul>
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                            <li>Send you emails or direct messages</li>
                            <li>Find and prevent fraud</li>
                        </ul>

                        <h2>Log Files</h2>
                        <p>
                            Sinan MC Malappuram follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                        </p>

                        <h2>Cookies and Web Beacons</h2>
                        <p>
                            Like any other website, Sinan MC Malappuram uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                        </p>

                        <h2>Google Analytics</h2>
                        <p>
                            We may use third-party Service Providers like Google Analytics to monitor and analyze the use of our Service. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on.
                        </p>

                        <h2>Data Protection Rights (GDPR & CCPA)</h2>
                        <p>
                            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                        </p>
                        <ul>
                            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                            <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                            <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
                            <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                        </ul>

                        <h2>Contact Information</h2>
                        <p>
                            If you have any questions or suggestions about our Privacy Policy, please contact us:
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
