import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import '../../../blog/[slug]/article.scss'

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

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const meta = articles.find((a) => a.slug === slug)
  if (!meta) return {}
  const title = `${meta.title} — Adrien Vidal`
  const description = meta.description
  const canonical = locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { fr: `/blog/${slug}`, en: `/en/blog/${slug}` },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Adrien Vidal',
      locale: locale === 'en' ? 'en_GB' : 'fr_FR',
      type: 'article',
      publishedTime: meta.date,
      images: ['/thumbnail.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/thumbnail.webp'],
    },
  }
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const t = await getTranslations('blog')
  const meta = articles.find((a) => a.slug === slug)
  if (!meta) notFound()

  const loader = articleModules[slug]
  if (!loader) notFound()

  const { default: MDXContent } = await loader()
  const dateLocale = locale === 'fr' ? 'fr-FR' : 'en-GB'

  return (
    <main className="article">
      <div className="article__inner">
        <Link href="/blog" className="article__back">{t('articleBack')}</Link>
        <time className="article__date">
          {new Date(meta.date).toLocaleDateString(dateLocale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </time>
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
