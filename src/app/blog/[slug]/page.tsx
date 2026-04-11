import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import './article.scss'

// Static map: add one entry per article in src/articles/
const articleModules: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'pourquoi-vos-landing-pages-ne-convertissent-pas': () =>
    import('@/articles/pourquoi-vos-landing-pages-ne-convertissent-pas.mdx'),
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
        <time className="article__date">{meta.date}</time>
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
