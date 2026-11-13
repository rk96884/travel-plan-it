import type { MetadataRoute } from 'next';

const baseUrl = 'https://mytravelplanit.co.uk';
// Do not report an estimated lastModified date. Add one only when it reflects
// a verified, substantial content change to the individual page.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/travel-planning`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/why-us`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/press`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tailor-made-holidays`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/inspiration`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/singapore-batam-johor-three-country`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/luang-prabang-vientiane-twin-centre`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/hanoi-ho-chi-minh-city-twin-centre`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/phnom-penh-siem-reap-twin-centre`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/bangkok-phuket-twin-centre`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/inspiration/khanom`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/inspiration/palawan`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/inspiration/nihi-sumba`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/plan-my-trip`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/travel-insurance`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
