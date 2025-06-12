// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mustafabuilderanddeveloper.com.pk/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://mustafabuilderanddeveloper.com.pk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mustafabuilderanddeveloper.com.pk/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://mustafabuilderanddeveloper.com.pk/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://mustafabuilderanddeveloper.com.pk/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
        url: 'https://mustafabuilderanddeveloper.com.pk/faq',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
  ];
}
