import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import './article.scss'

// Static map: add one entry per article in src/articles/
const articleModules: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'ce-que-chanel-ma-appris-sur-les-interfaces-premium': () =>
    import('@/articles/chanel-interfaces-premium.mdx'),
  'freelance-vs-agence-comment-choisir': () =>
    import('@/articles/freelance-vs-agence.mdx'),
  'comment-j-utilise-l-ia-pour-livrer-plus-vite': () =>
    import('@/articles/ia-workflow-freelance.mdx'),
  'pourquoi-vos-landing-pages-ne-convertissent-pas': () =>
    import('@/articles/pourquoi-vos-landing-pages-ne-convertissent-pas.mdx'),
  'utiliser-claude-comme-co-developpeur': () =>
    import('@/articles/claude-co-developpeur.mdx'),
  'un-quiz-peut-il-vraiment-vendre-un-parfum': () =>
    import('@/articles/quiz-vendre-parfum.mdx'),
  'landing-page-vs-experience-interactive': () =>
    import('@/articles/landing-page-vs-experience-interactive.mdx'),
  'lia-va-t-elle-remplacer-les-developpeurs': () =>
    import('@/articles/ia-va-t-elle-remplacer-developpeurs.mdx'),
  'construire-app-fitness-avec-claude-code': () =>
    import('@/articles/app-fitness-claude-code.mdx'),
  'freelance-nomade-outils-concrets': () =>
    import('@/articles/freelance-nomade-outils.mdx')
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const meta = articles.find((a) => a.slug === slug)
  if (!meta) return {}
  return { title: `${meta.title} — Adrien Vidal`, description: meta.description }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = articles.find((a) => a.slug === slug)
  if (!meta) notFound()

  const loader = articleModules[slug]
  if (!loader) notFound()

  const { default: MDXContent } = await loader()

  return (
    <main className="article">
      <div className="article__inner">
        <Link href="/blog" className="article__back">← Blog</Link>
        <time className="article__date">{new Date(meta.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
        <h1 className="article__title">{meta.title}</h1>
        {meta.tags && (
          <ul className="article__tags">
            {meta.tags.map((tag) => (
              <li key={tag} className="article__tag">{tag}</li>
            ))}
          </ul>
        )}
        <div className="article__body">
          <MDXContent />
        </div>
      </div>
    </main>
  )
}
