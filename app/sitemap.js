import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // שימוש במשתנה הסביבה שהגדרת ב-Vercel עם fallback לכתובת האתר שלך
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ironmind-frames.com';
  
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // הוספת נתיבים ממוקדי אזור (קיסריה וטבריה) לקידום הלידים
    {
      url: `${baseUrl}/fences-caesarea`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pergolas-tiberias`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/price-list`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  return routes;
}