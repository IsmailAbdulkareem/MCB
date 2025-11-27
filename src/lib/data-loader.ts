import { services, Service } from '@/data/services';
import { projects, Project } from '@/data/projects';
import { blogPosts, BlogPost } from '@/data/blog';

// Service helpers
export function getAllServices(): Service[] {
    return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}

export function getFeaturedServices(count: number = 6): Service[] {
    return services.slice(0, count);
}

// Project helpers
export function getAllProjects(): Project[] {
    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(count: number = 6): Project[] {
    return projects.slice(0, count);
}

export function getRelatedProjects(currentSlug: string, category: string, count: number = 3): Project[] {
    return projects
        .filter(project => project.slug !== currentSlug && project.category === category)
        .slice(0, count);
}

// Blog helpers
export function getAllBlogPosts(): BlogPost[] {
    return blogPosts.sort((a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getRecentBlogPosts(count: number = 3): BlogPost[] {
    return getAllBlogPosts().slice(0, count);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    if (category === 'All Posts') return getAllBlogPosts();
    return blogPosts.filter(post => post.category === category);
}

export function getRelatedBlogPosts(currentSlug: string, category: string, count: number = 2): BlogPost[] {
    return blogPosts
        .filter(post => post.slug !== currentSlug && post.category === category)
        .slice(0, count);
}

// Utility function to generate slug from title
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}
