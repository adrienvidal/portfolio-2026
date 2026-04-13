import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import LabClient from './LabClient'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.lab' })
  const title = t('title')
  const description = t('description')
  const canonical = locale === 'en' ? '/en/lab' : '/lab'
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { fr: '/lab', en: '/en/lab' },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Adrien Vidal',
      locale: locale === 'en' ? 'en_GB' : 'fr_FR',
      type: 'website',
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

export default async function Lab({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <LabClient />
}
