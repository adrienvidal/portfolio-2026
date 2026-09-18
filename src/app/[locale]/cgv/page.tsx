import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import CgvContent from '@/legal/cgv.mdx'
import '../blog/[slug]/article.scss'
import './cgv.scss'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cgv' })
  const canonical = locale === 'en' ? '/en/cgv' : '/cgv'
  return {
    title: `${t('title')} — Adrien Vidal`,
    description: t('description'),
    alternates: {
      canonical,
      languages: { fr: '/cgv', en: '/en/cgv' },
    },
  }
}

export default async function CgvPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('cgv')

  return (
    <main className="article cgv">
      <div className="article__inner">
        <Link href="/" className="article__back">{t('back')}</Link>
        <h1 className="article__title">{t('title')}</h1>
        {/* Les CGV sont rédigées en français (art. 15.5) : la page EN affiche le texte français, précédé d'un avertissement. */}
        {locale === 'en' && <p className="cgv__notice">{t('notice')}</p>}
        <div className="article__body" lang="fr">
          <CgvContent />
        </div>
      </div>
    </main>
  )
}
