import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { projectsStaticData, otherMissionsStaticData, HOME_ORDER, PROJECTS_SEE_ALL_HREF, LAB_HREF } from '@/data/static'
import ProjectCard from './ProjectCard'
import OtherMissionItem from './OtherMissionItem'
import './Projects.scss'

type TranslatedItem = { title: string; role: string; result: string }
type TranslatedMission = { name: string; description: string }

export default async function Projects() {
  const t = await getTranslations('projects')
  const tMissions = await getTranslations('otherMissions')

  const translatedItems = t.raw('items') as TranslatedItem[]
  const items = projectsStaticData.map((item, i) => ({ ...item, ...translatedItems[i] }))

  const translatedMissions = tMissions.raw('items') as TranslatedMission[]
  const missions = otherMissionsStaticData.map((item, i) => ({ ...item, ...translatedMissions[i] }))

  return (
    <div className="section" id="projets">
      <h2 className="section-title">{t('title')}</h2>
      <p className="section-sub"></p>
      <div className="projects-grid">
        {HOME_ORDER.map(i => items[i]).map((p) => (
          <ProjectCard
            key={p.title}
            {...p}
            roleLabel={t('roleLabel')}
            resultLabel={t('resultLabel')}
            linkLabel={t('linkLabel')}
          />
        ))}
      </div>
      <div className="projects-show-more">
        <Link href={PROJECTS_SEE_ALL_HREF} className="btn-white">{t('seeAllLabel')}</Link>
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

      <div className="projects-lab-teaser">
        <span>{t('labTeaserText')}</span>
        <Link href={LAB_HREF} className="projects-lab-teaser__link">
          {t('labTeaserCta')}
        </Link>
      </div>
    </div>
  )
}
