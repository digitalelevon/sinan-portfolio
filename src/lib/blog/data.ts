export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: React.ReactNode;
    featuredImage: string;
    imageAlt: string;
    date: string;
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "How to Choose the Best Freelance Web Developer in Malappuram",
        slug: "choose-web-developer-malappuram",
        excerpt: "Learn the critical criteria you must demand when evaluating and hiring your next freelance web developer to protect your business investment.",
        featuredImage: "/choose-web-developer-malappuram.webp",
        imageAlt: "How to Choose the Best Freelance Web Developer in Malappuram by Sinan MC Malappuram best Freelance Web Developer in Kerala",
        date: "February 25, 2026",
        author: "Sinan MC Malappuram",
        content: null,
    },
    {
        title: "AI in SEO – Future of Search Engine Optimisation",
        slug: "ai-in-seo",
        excerpt: "Discover how Artificial Intelligence is revolutionising Search Engine Optimisation, content strategy, and the future of Google's ranking algorithms.",
        featuredImage: "/ai-in-seo.webp",
        imageAlt: "AI in SEO by Sinan MC Malappuram Best SEO Specialist in Malappuram",
        date: "February 25, 2026",
        author: "Sinan MC Malappuram",
        content: null,
    },
    {
        title: "Website Speed Optimisation Guide – Improve Google Ranking",
        slug: "website-speed-seo",
        excerpt: "Discover why website speed is critical for SEO, how Core Web Vitals impact your Google rankings, and exact strategies to optimize your load times efficiently.",
        featuredImage: "/website-speed-seo.webp",
        imageAlt: "Website Speed Optimisation Guide by Sinan MC Malappuram Best Freelance Web Developer in Malappuram",
        date: "February 25, 2026",
        author: "Sinan MC Malappuram",
        content: null,
    },
    {
        title: "Local SEO Guide 2026 – How to Rank Your Business in Malappuram",
        slug: "local-seo-malappuram",
        excerpt: "Learn how to rank your Malappuram business on the first page of Google with this comprehensive Local SEO guide for 2026.",
        featuredImage: "/local-seo-malappuram.webp",
        imageAlt: "Local SEO Guide for Malappuram Businesses by Sinan MC Malappuram",
        date: "February 25, 2026",
        author: "Sinan MC Malappuram",
        content: null,
    },
    {
        title: "SEO New Rules in 2026 – Complete Guide for Higher Google Ranking",
        slug: "seo-new-rules-2026",
        excerpt: "Learn the latest SEO strategies for 2026, including Google AI ranking updates, Core Web Vitals, EEAT, and how to improve your website's visibility.",
        featuredImage: "/seo-new-rules.webp",
        imageAlt: "SEO New Rules 2026 by Sinan MC Malappuram Best SEO Specialist in Malappuram",
        date: "February 24, 2026",
        author: "Sinan MC Malappuram",
        content: null, // Will be populated in the page component to allow React components inside, or we can use strings and render them directly.
    },
    {
        title: "Why Every Business in Malappuram Needs a Professional Website in 2026",
        slug: "business-website-malappuram",
        excerpt: "Discover why a professional website is crucial for businesses in Malappuram in 2026 to generate leads, build trust, and boost Google visibility.",
        featuredImage: "/web-development-malappuram.webp",
        imageAlt: "Web Development in Malappuram by Sinan MC Malappuram",
        date: "February 24, 2026",
        author: "Sinan MC Malappuram",
        content: null,
    }
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
