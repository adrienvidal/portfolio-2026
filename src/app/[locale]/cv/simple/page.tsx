import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CVSimple } from './CVSimple'
import type { CVSimpleData } from './CVSimple'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cvSimple' })
  return { title: `${t('name')} — CV Simple` }
}

export default async function CVSimplePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('cvSimple')

  const data: CVSimpleData = {
    downloadPdf: t('downloadPdf'),
    name: t('name'),
    role: t('role'),
    contact: {
      location: t('contact.location'),
      email: t('contact.email'),
      phone: t('contact.phone'),
      websiteLabel: t('contact.websiteLabel'),
      websiteUrl: t('contact.websiteUrl'),
      githubLabel: t('contact.githubLabel'),
      githubUrl: t('contact.githubUrl'),
    },
    sections: {
      experience: t('sections.experience'),
      projects: t('sections.projects'),
      skills: t('sections.skills'),
      educationLanguages: t('sections.educationLanguages'),
    },
    accroche: t('accroche'),
    experiences: t.raw('experiences') as CVSimpleData['experiences'],
    experienceNote: t('experienceNote'),
    projects: t.raw('projects') as CVSimpleData['projects'],
    skills: t.raw('skills') as CVSimpleData['skills'],
    educationDegree: t('educationDegree'),
    educationSub: t('educationSub'),
    languageLine: t('languageLine'),
    fontVars: inter.variable,
  }

  return <CVSimple data={data} />
}
