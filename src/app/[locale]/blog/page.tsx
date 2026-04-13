import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { articles } from '@/data/articles'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import '../../blog/blog.scss'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.blog' })
  const title = t('title')
  const description = t('description')
  const canonical = locale === 'en' ? '/en/blog' : '/blog'
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { fr: '/blog', en: '/en/blog' },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Adrien Vidal',
      locale: locale === 'en' ? 'en_GB' : 'fr_FR',
      type: 'website',
      images: [{ url: '/thumbnail.webp', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: '/thumbnail.webp', width: 1200, height: 630 }],
    },
  }
}

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('blog')
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))
  const dateLocale = locale === 'fr' ? 'fr-FR' : 'en-GB'

  return (
    <>
      <Nav />
      <main className="blog">
        <div className="blog__inner">
          <Link href="/" className="blog__back">{t('back')}</Link>
          <h1 className="blog__title">{t('title')}</h1>
          <ul className="blog__list">
            {sorted.map((article) => (
              <li key={article.slug} className="blog__item">
                <Link href={`/blog/${article.slug}`} className="blog__link">
                  <time className="blog__date">
                    {new Date(article.date).toLocaleDateString(dateLocale, {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                  <h2 className="blog__item-title">{article.title}</h2>
                  <p className="blog__description">{article.description}</p>
                  {article.tags && (
                    <ul className="blog__tags">
                      {article.tags.map((tag) => (
                        <li key={tag} className="blog__tag">{tag}</li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
