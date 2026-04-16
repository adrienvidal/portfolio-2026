import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { CVDesign } from './CVDesign'
import type { CVDesignData } from './CVDesign'

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
  const td = await getTranslations({ locale, namespace: 'cvData' })
  return { title: `${td('name')} — CV Design` }
}

export default async function CVDesignPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('cvDesign')
  const td = await getTranslations('cvData')

  const data: CVDesignData = {
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
      contact: t('sections.contact'),
      skills: t('sections.skills'),
      languages: t('sections.languages'),
      education: t('sections.education'),
      experience: t('sections.experience'),
      projects: t('sections.projects'),
    },
    accroche: td('accroche'),
    skills: td.raw('skills') as CVDesignData['skills'],
    languages: td.raw('languages') as CVDesignData['languages'],
    education: td.raw('education') as CVDesignData['education'],
    experiences: td.raw('experiences') as CVDesignData['experiences'],
    experienceNote: td('experienceNote'),
    projects: td.raw('projects') as CVDesignData['projects'],
    fontVars: `${dmSerif.variable} ${dmSans.variable}`,
  }

  return <CVDesign data={data} />
}
