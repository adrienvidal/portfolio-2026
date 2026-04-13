import type { MetadataRoute } from 'next'
import { articles } from '@/data/articles'

const BASE = 'https://adrienvidal.com'

const staticRoutes = ['/', '/projets', '/blog', '/lab']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        fr: `${BASE}${path}`,
        en: `${BASE}/en${path === '/' ? '' : path}`,
      },
    },
  }))

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    alternates: {
      languages: {
        fr: `${BASE}/blog/${a.slug}`,
        en: `${BASE}/en/blog/${a.slug}`,
      },
    },
  }))

  return [...staticEntries, ...articleEntries]
}
