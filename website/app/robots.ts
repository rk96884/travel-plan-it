import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mytravelplanit.co.uk/sitemap.xml',
    host: 'https://mytravelplanit.co.uk',
  };
}
