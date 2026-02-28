import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog/data";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { SeoRules2026 } from "@/components/blog/content/SeoRules2026";
import { BusinessWebsiteMalappuram } from "@/components/blog/content/BusinessWebsiteMalappuram";
import { LocalSeoMalappuram } from "@/components/blog/content/LocalSeoMalappuram";
import { WebsiteSpeedSeo } from "@/components/blog/content/WebsiteSpeedSeo";
import { AiInSeo } from "@/components/blog/content/AiInSeo";
import { ChooseWebDeveloperMalappuram } from "@/components/blog/content/ChooseWebDeveloperMalappuram";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const p = await params;
    const post = getBlogPost(p.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    const url = `https://sinanmcmalappuram.in/blog/${post.slug}`;

    return {
        title: `${post.title} | Sinan MC Malappuram`,
        description: post.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            siteName: "Sinan MC Malappuram",
            images: [
                {
                    url: post.featuredImage,
                    alt: post.imageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.featuredImage],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const p = await params;
    const post = getBlogPost(p.slug);

    if (!post) {
        notFound();
    }

    const renderContent = () => {
        if (post.slug === 'choose-web-developer-malappuram') return <ChooseWebDeveloperMalappuram />;
        if (post.slug === 'ai-in-seo') return <AiInSeo />;
        if (post.slug === 'website-speed-seo') return <WebsiteSpeedSeo />;
        if (post.slug === 'local-seo-malappuram') return <LocalSeoMalappuram />;
        if (post.slug === 'seo-new-rules-2026') return <SeoRules2026 />;
        if (post.slug === 'business-website-malappuram') return <BusinessWebsiteMalappuram />;
        return <p className="text-white">Content coming soon...</p>;
    };

    return (
        <main className="min-h-screen bg-dark pt-32 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl relative z-10">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-gray-400 hover:text-primary transition-colors duration-300 mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base font-medium group"
                >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                {/* Header Section */}
                <header className="mb-10 sm:mb-16">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-5 sm:mb-6">
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-dark-100 border border-white/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                            <span className="text-primary font-semibold">SEO & Web Dev</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/70" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/70" />
                            <span>{post.author}</span>
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.15] font-bold text-white tracking-tight leading-tight mb-6 sm:mb-8">
                        {post.title}
                    </h1>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <Image
                            src={post.featuredImage}
                            alt={post.imageAlt}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-100/60 to-transparent pointer-events-none" />
                    </div>
                </header>

                {/* Main Content */}
                <div className="bg-dark-100/30 border border-white/5 rounded-[1.5rem] sm:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-14 backdrop-blur-sm mb-12 sm:mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    {renderContent()}
                </div>

                {/* CTA Section */}
                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-3xl bg-gradient-to-r from-dark-100 to-dark border border-primary/20 p-6 sm:p-8 md:p-12 text-center shadow-[0_8px_32px_rgba(255,215,0,0.05)] text-left sm:text-center flex flex-col items-start sm:items-center">
                    <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-accent/10 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none" />

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        Ready to Transform Your Online Presence?
                    </h3>
                    <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                        Work With the <strong className="text-white font-medium">Best Freelance Web Developer & SEO Specialist in Malappuram</strong>. Let&apos;s build a website that drives real results for your business.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold bg-gradient-to-r from-primary via-[#FFC107] to-accent text-black hover:opacity-90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                        Contact Me Today
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
