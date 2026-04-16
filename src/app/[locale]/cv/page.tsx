import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { Link } from '@/i18n/navigation'
import './cv-hub.scss'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cv' })
  return { title: `${t('title')} — Adrien Vidal` }
}

export default async function CvPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('cv')

  const cvs = ['design', 'simple'] as const

  return (
    <>
      <Nav />
      <main className="cv-hub">
        <div className="cv-hub__header">
          <h1 className="cv-hub__title">{t('title')}</h1>
          <p className="cv-hub__subtitle">{t('subtitle')}</p>
        </div>
        <div className="cv-hub__grid">
          {cvs.map((key) => (
            <Link
              key={key}
              href={`/cv/${key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-hub__card"
            >
              <div className="cv-hub__card-body">
                <span className="cv-hub__card-label">{t(`${key}.label`)}</span>
                <span className="cv-hub__card-desc">{t(`${key}.description`)}</span>
                <span className="cv-hub__card-cta">{t('open')} →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
