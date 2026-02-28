export type ProjectCategory = "SEO Projects" | "Website Projects" | "SMM Projects" | "AI Automation";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    image: string;
    shortDescription: string;
    fullDescription: string;
    seoStrategy: string[];
    results: string[];
    technologies: string[];
    screenshots: string[];
    link?: string;
    imageAlt?: string;
}

export const portfolioProjects: Project[] = [
    {
        id: "digisinans-kerala",
        title: "Digisinans – Best AI Integrated Digital Marketing Agency in Kerala",
        category: "SEO Projects",
        image: "/digisinans-kerala-ranking-proof.webp",
        shortDescription: "Ranked Digisinans as the best AI integrated digital marketing agency in Kerala using advanced SEO strategy, technical optimisation, and AI-driven content optimisation.",
        fullDescription: "A comprehensive SEO campaign to establish Digisinans as the premier AI-integrated digital marketing agency across Kerala. The project involved deep technical audits, content restructuring using AI-driven insights, and building high-authority local citations.",
        seoStrategy: [
            "Advanced Keyword Research & Mapping",
            "Technical SEO & Core Web Vitals Optimisation",
            "AI-Driven Content Creation & Optimisation",
            "High-Authority Backlink Acquisition"
        ],
        results: [
            "Ranked #1 for 'Best AI Integrated Digital Marketing Agency in Kerala'",
            "300% increase in organic traffic within 4 months",
            "Significant boost in high-quality lead generation"
        ],
        technologies: ["Next.js", "SEMrush", "Ahrefs", "Google Search Console", "Surfer SEO"],
        screenshots: [
            "/digisinans-kerala-ranking-proof.webp",
            "/digisinans-kerala-ranking-proof-ai-result.webp"
        ]
    },
    {
        id: "digisinans-malappuram",
        title: "Digisinans – Best AI Integrated Digital Marketing Agency in Malappuram",
        category: "SEO Projects",
        image: "/digisinans-malappuram-ranking-proof.webp",
        shortDescription: "Achieved top ranking in Google for competitive local keywords in Malappuram through local SEO and on-page optimisation.",
        fullDescription: "Hyper-local SEO strategy tailored for Malappuram to dominate the local digital marketing niche. Focused heavily on Google Business Profile optimisation and localized content marketing.",
        seoStrategy: [
            "Local SEO & GBP Optimisation",
            "On-Page SEO for location-specific keywords",
            "Local Citation Link Building",
            "Schema Markup Implementation"
        ],
        results: [
            "Top 3 map pack ranking for digital marketing keywords in Malappuram",
            "Dominated local search results",
            "High conversion rate from localized traffic"
        ],
        technologies: ["Google Business Profile", "Local SEO Tracking", "Schema.org", "WordPress"],
        screenshots: [
            "/digisinans-malappuram-ranking-proof.webp"
        ]
    },
    {
        id: "digital-marketing-agency-tirur",
        title: "Best Digital Marketing Agency in Tirur, Malappuram",
        category: "SEO Projects",
        image: "/tirur-digital-marketing-ranking.webp",
        shortDescription: "Successfully ranked client in Tirur local search results.",
        fullDescription: "A targeted campaign to capture the local market in Tirur. By implementing precise on-page tweaks and local search optimizations, we established strong visibility for the client in their immediate service area.",
        seoStrategy: [
            "City-specific Landing Page Creation",
            "On-Page Optimisation",
            "Local Backlinks setup"
        ],
        results: [
            "Page 1 ranking for 'Best Digital Marketing Agency in Tirur'",
            "Increased local brand awareness",
            "Boosted qualified local inquiries"
        ],
        technologies: ["Google Analytics", "Ahrefs", "Technical SEO"],
        screenshots: [
            "/tirur-digital-marketing-ranking.webp"
        ]
    },
    {
        id: "ai-first-kannur",
        title: "AI First – Digital Marketing Expert in Kannur",
        category: "SEO Projects",
        image: "/ai-first-kannur-ranking.webp",
        shortDescription: "Optimised and ranked AI First website using modern SEO strategy.",
        fullDescription: "Complete SEO overhaul for 'AI First' targeting the Kannur region. The strategy involved restructuring their existing content, improving site speed, and securing niche-relevant backlinks.",
        seoStrategy: [
            "Competitor Analysis",
            "Site Speed & Performance Optimisation",
            "Content Gap Analysis & Implementation"
        ],
        results: [
            "Top placements for 'Digital Marketing Expert Kannur'",
            "Improved site health score to 95+",
            "Steady stream of inbound leads"
        ],
        technologies: ["Next.js", "Screaming Frog", "PageSpeed Insights"],
        screenshots: [
            "/ai-first-kannur-ranking.webp"
        ]
    },
    {
        id: "digisinans-website",
        title: "Digisinans Digital Marketing Agency Website",
        category: "Website Projects",
        image: "/digisinans-website.webp",
        shortDescription: "Designed and developed modern AI-powered agency website.",
        fullDescription: "A full-scale custom design and development project for Digisinans. Built from the ground up to reflect a premium, futuristic, and AI-first brand identity while maintaining lightning-fast performance.",
        seoStrategy: [
            "SEO-friendly architecture from day one",
            "Next.js Server-Side Rendering (SSR)",
            "Optimized Core Web Vitals"
        ],
        results: [
            "Sub-second page load times",
            "Perfect 100/100 Lighthouse scores",
            "High user engagement and reduced bounce rate"
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://digisinans.in/",
        screenshots: [
            "/digisinans-website.webp",
            "/website-speed-seo.webp"
        ]
    },
    {
        id: "ahmed-luthu-portfolio",
        title: "Ahmed Luthu Kannur Portfolio Website",
        category: "Website Projects",
        image: "/ahmed-luthu-portfolio.webp",
        shortDescription: "Built personal portfolio with modern UI and SEO optimisation.",
        fullDescription: "A sleek, personal portfolio tailored to showcase creative work and professional experience. Designed with a focus on fast navigation, minimalist aesthetics, and baked-in technical SEO.",
        seoStrategy: [
            "Semantic HTML5 Structure",
            "Image Lazy Loading & WebP format",
            "Dynamic Meta Tags for all pages"
        ],
        results: [
            "Fast loading beautiful portfolio",
            "Indexed by Google within 24 hours of launch",
            "Positive feedback from potential clients"
        ],
        technologies: ["React", "Tailwind CSS", "Next.js"],
        link: "https://ahmdluthukannur.in/",
        screenshots: [
            "/ahmed-luthu-portfolio.webp"
        ]
    },
    {
        id: "muswabbah-scheduling-system",
        title: "Muswabbah Speech Scheduling System",
        category: "Website Projects",
        image: "/muswabbah-system.webp",
        shortDescription: "Developed AI integrated speech scheduling and OTP verification system.",
        fullDescription: "A complex web application designed to handle speech scheduling seamlessly. Incorporated AI capabilities for slot recommendations and a robust OTP-based authentication system for high security.",
        seoStrategy: [
            "Technical indexation management (NoIndex for private routes)",
            "Clean URL structure"
        ],
        results: [
            "Streamlined scheduling process reducing admin time by 80%",
            "Zero security breaches thanks to strict OTP verification",
            "Highly scalable architecture"
        ],
        technologies: ["Next.js App Router", "Node.js", "MongoDB", "Twilio API"],
        screenshots: [
            "/muswabbah-system.webp"
        ]
    },
    {
        id: "qland-poster-design",
        title: "Social Media Advertising Poster Design in Photoshop - Qland",
        category: "SMM Projects",
        image: "/social-media-poster-1.webp",
        imageAlt: "best freelance graphic designer in tirur",
        shortDescription: "Designed high-converting social media advertising posters for Qland using advanced Photoshop techniques.",
        fullDescription: "A comprehensive social media design project for Qland. The primary focus was creating visually striking and highly engaging advertising posters tailored for social media platforms. By leveraging Adobe Photoshop, we crafted custom graphics with strong typography and compelling visual elements to maximize user engagement and ad performance.",
        seoStrategy: [
            "Visual Hierarchy & Typography",
            "High-Engagement Ad Creatives",
            "Brand Color Scheme Synchronization"
        ],
        results: [
            "Significantly increased click-through rate (CTR) on ads",
            "Enhanced overall brand aesthetic",
            "Boosted social media user engagement"
        ],
        technologies: ["Adobe Photoshop", "Graphic Design", "Social Media Marketing"],
        screenshots: [
            "/social-media-poster-1.webp",
            "/social-media-poster-2.webp",
            "/social-media-poster-3.webp"
        ]
    },
    {
        id: "ai-automation-web-chatbots",
        title: "AI automation web Chatbots",
        category: "AI Automation",
        image: "/ai-chatbot-1.webp",
        imageAlt: "ai frist digital marketer in kerala ",
        shortDescription: "Developed the fastest AI automation web chatbots using the Grooq API.",
        fullDescription: "Built an advanced AI automation web chatbot tailored for seamless online interaction. Utilizing the blazing fast Grooq API, this custom chatbot solution significantly reduces response times and enhances user engagement, providing instant support and automation capabilities directly on the website.",
        seoStrategy: [
            "Seamless Web Integration",
            "Conversational Flow Design",
            "High-Speed API Execution"
        ],
        results: [
            "Extremely fast conversational responses using Grooq API",
            "Improved website user support and automation",
            "Modern, engaging, and reactive chatbot UI"
        ],
        technologies: ["Grooq API", "AI Automation", "Web Chatbots"],
        screenshots: [
            "/ai-chatbot-1.webp",
            "/ai-chatbot-2.webp"
        ]
    }
];
