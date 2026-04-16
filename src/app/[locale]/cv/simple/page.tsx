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
  const td = await getTranslations({ locale, namespace: 'cvData' })
  return { title: `${td('name')} — CV Simple` }
}

export default async function CVSimplePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('cvSimple')
  const td = await getTranslations('cvData')

  const data: CVSimpleData = {
    downloadPdf: td('downloadPdf'),
    name: td('name'),
    role: td('role'),
    contact: {
      location: td('contact.location'),
      email: td('contact.email'),
      phone: td('contact.phone'),
      websiteLabel: td('contact.websiteLabel'),
      websiteUrl: td('contact.websiteUrl'),
      githubLabel: td('contact.githubLabel'),
      githubUrl: td('contact.githubUrl'),
    },
    sections: {
      experience: t('sections.experience'),
      projects: t('sections.projects'),
      skills: t('sections.skills'),
      educationLanguages: t('sections.educationLanguages'),
    },
    accroche: td('accroche'),
    experiences: td.raw('experiences') as CVSimpleData['experiences'],
    experienceNote: td('experienceNote'),
    projects: td.raw('projects') as CVSimpleData['projects'],
    skills: td.raw('skills') as CVSimpleData['skills'],
    educationDegree: td('educationDegree'),
    educationSub: td('educationSub'),
    languageLine: td('languageLine'),
    fontVars: inter.variable,
  }

  return <CVSimple data={data} />
}
