import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog/data';
import { portfolioProjects } from '@/data/portfolio';

const baseUrl = 'https://sinanmcmalappuram.in';

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Core static pages
    const routes = [
        '',
        '/about',
        '/portfolio',
        '/blog',
        '/contact'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
        priority: route === '' ? 1.0 : route === '/portfolio' ? 0.9 : 0.8,
    }));

    // 2. Dynamic Blog Posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        // Use post date if parsing logic is available, else current date
        lastModified: new Date(post.date).toISOString().includes('NaN')
            ? new Date().toISOString()
            : new Date(post.date).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // 3. Dynamic Portfolio Projects
    const portfolioRoutes = portfolioProjects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.id}`,
        lastModified: new Date().toISOString(), // Portfolio data in this repo doesn't have a date by default
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...routes, ...blogRoutes, ...portfolioRoutes];
}
