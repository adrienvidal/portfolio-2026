import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { projectsStaticData, otherMissionsStaticData } from '@/data/static'
import ProjectCard from '@/components/Projects/ProjectCard'
import OtherMissionItem from '@/components/Projects/OtherMissionItem'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import '../../projets/allProjects.scss'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.projects' })
  return { title: t('title'), description: t('description') }
}

type TranslatedItem = { title: string; role: string; result: string }
type TranslatedMission = { name: string; description: string }

export default async function AllProjects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('projects')
  const tMissions = await getTranslations('otherMissions')

  const translatedItems = t.raw('items') as TranslatedItem[]
  const items = projectsStaticData.map((item, i) => ({ ...item, ...translatedItems[i] }))

  const translatedMissions = tMissions.raw('items') as TranslatedMission[]
  const missions = otherMissionsStaticData.map((item, i) => ({ ...item, ...translatedMissions[i] }))

  return (
    <div className="all-projects">
      <Nav />
      <div className="all-projects__inner">
        <Link href="/" className="all-projects__back">{t('backLabel')}</Link>
        <h1 className="all-projects__title">{t('allProjectsTitle')}</h1>
        <div className="all-projects__grid">
          {items.map((p) => (
            <ProjectCard
              key={p.title}
              {...p}
              roleLabel={t('roleLabel')}
              resultLabel={t('resultLabel')}
              linkLabel={t('linkLabel')}
            />
          ))}
        </div>
        <div className="other-missions">
          <div className="other-missions__header">
            <h3 className="other-missions__title">{tMissions('title')}</h3>
            <p className="other-missions__subtitle">{tMissions('subtitle')}</p>
          </div>
          <ul className="other-missions__list">
            {missions.map((client) => (
              <OtherMissionItem
                key={client.name}
                name={client.name}
                description={client.description}
                tags={client.tags}
                link={client.link}
                site={client.site}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
