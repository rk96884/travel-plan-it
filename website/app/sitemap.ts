import type { MetadataRoute } from 'next';

const baseUrl = 'https://mytravelplanit.co.uk';
const lastModified = new Date('2026-09-27');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/travel-planning/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/why-us/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/press/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/inspiration/`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/khanom/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/inspiration/palawan/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/inspiration/nihi-sumba/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/plan-my-trip/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/travel-insurance/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
