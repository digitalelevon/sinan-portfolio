import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://sinanmcmalappuram.in",
            lastModified: "2025-01-01",
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
