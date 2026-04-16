import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { CVDesign } from '@/components/CV/CVDesign'
import type { CVDesignData } from '@/components/CV/CVDesign'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cvDesign' })
  return { title: `${t('name')} — CV Design` }
}

export default async function CVDesignPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('cvDesign')

  const data: CVDesignData = {
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
      contact: t('sections.contact'),
      skills: t('sections.skills'),
      languages: t('sections.languages'),
      education: t('sections.education'),
      experience: t('sections.experience'),
      projects: t('sections.projects'),
    },
    accroche: t('accroche'),
    skills: t.raw('skills') as CVDesignData['skills'],
    languages: t.raw('languages') as CVDesignData['languages'],
    education: t.raw('education') as CVDesignData['education'],
    experiences: t.raw('experiences') as CVDesignData['experiences'],
    experienceNote: t('experienceNote'),
    projects: t.raw('projects') as CVDesignData['projects'],
    fontVars: `${dmSerif.variable} ${dmSans.variable}`,
  }

  return <CVDesign data={data} />
}
