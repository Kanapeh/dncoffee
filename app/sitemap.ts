import { MetadataRoute } from 'next'

// Blog post slugs from the blog page
const blogPosts = [
  'specialty-coffee-guide',
  'brewing-methods',
  'coffee-origins',
  'sustainability',
  'coffee-roasting',
  'coffee-flavors',
  'coffee-storage',
  'coffee-processing',
  'arabica-vs-robusta',
  'cold-brew-coffee',
  'coffee-grinding',
  'colombia-gesha-spirits',
  'ethiopia-goro-bedessa',
  'ethiopia-guji-alaka',
  'colombia-juicy-blend',
  'ethiopia-kochere',
  'colombia-condor-decaf',
  'colombia-bourbon-koji',
  'nicaragua-finca-bethania',
  'ethiopia-yirgacheffe-haru',
  'ecuador-hacienda-santa-gertrudis',
  'bolivia-los-rodriguez',
  'colombia-san-adolfo',
  'colombia-manantiales-del-frontio',
  'colombia-valle-del-cauca',
  'ethiopia-adado',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dncoffee.cafe'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Blog post routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes]
}

