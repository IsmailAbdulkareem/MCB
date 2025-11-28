
import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.mustafabuilderanddeveloper.com.pk'
    const currentDate = new Date()

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ]

    // Service detail pages
    const servicePages = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Project detail pages
    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Blog post pages
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...servicePages, ...projectPages, ...blogPages]
}
