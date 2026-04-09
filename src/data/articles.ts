export interface ArticleMeta {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
}

// Ajouter chaque nouvel article ici
export const articles: ArticleMeta[] = [
  {
    slug: 'pourquoi-vos-landing-pages-ne-convertissent-pas',
    title: 'Pourquoi vos landing pages ne convertissent pas',
    date: '2026-04-09',
    description: 'Les erreurs les plus courantes sur les landing pages marketing, et comment les corriger avec des exemples concrets.',
    tags: ['conversion', 'ux', 'marketing'],
  },
]
