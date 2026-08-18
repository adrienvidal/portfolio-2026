import { getTranslations } from 'next-intl/server'
import { labStaticData, HOME_APPS_ORDER } from '@/data/static'
import AppRow from './AppRow'
import './HomeApps.scss'

type TranslatedApp = { title: string; mission: string; production: string }

export default async function HomeApps() {
  const t = await getTranslations('homeApps')
  const translated = t.raw('items') as TranslatedApp[]

  // Appariement par index : `homeApps.items[n]` décrit `labStaticData[HOME_APPS_ORDER[n]]`.
  const apps = HOME_APPS_ORDER.map((labIndex, i) => ({
    ...translated[i],
    tags: labStaticData[labIndex].tags,
    images: labStaticData[labIndex].images ?? []
  })).filter((app) => app.images.length > 0)

  if (apps.length === 0) return null

  return (
    <section className="home-apps" aria-labelledby="home-apps-title">
      <h2 className="section-title" id="home-apps-title">{t('title')}</h2>
      <p className="section-sub">{t('sub')}</p>

      <div className="home-apps__list">
        {apps.map((app) => (
          <AppRow
            key={app.title}
            {...app}
            missionLabel={t('missionLabel')}
            productionLabel={t('productionLabel')}
            visualsLabel={t('visualsLabel', { count: app.images.length })}
          />
        ))}
      </div>
    </section>
  )
}
