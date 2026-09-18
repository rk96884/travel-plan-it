import type { MetadataRoute } from 'next';

const baseUrl = 'https://mytravelplanit.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/why-us/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/inspiration/`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/khanom/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/inspiration/palawan/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/inspiration/nihi-sumba/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/plan-my-trip/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms/`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
