import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Clients from '@/components/Clients/Clients'
import Services from '@/components/Services/Services'
import Process from '@/components/Process/Process'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Reservation from '@/components/Reservation/Reservation'
import Footer from '@/components/Footer/Footer'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })
  const title = t('title')
  const description = t('description')
  const canonical = locale === 'en' ? '/en' : '/'
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { fr: '/', en: '/en' },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Adrien Vidal',
      locale: locale === 'en' ? 'en_GB' : 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Nav />
      <Hero />
      <Clients />
      <Services />
      <Process />
      <About />
      <Projects />
      <Reservation />
      <Footer />
    </>
  )
}
