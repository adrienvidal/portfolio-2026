import { getTranslations } from 'next-intl/server'
import { serviceIcons } from '@/data/static'
import ServiceCard from './ServiceCard'
import './Services.scss'

type ServiceItem = { title: string; items: string[]; proof: string }

export default async function Services() {
  const t = await getTranslations('services')
  const items = (t.raw('items') as ServiceItem[]).map((item, i) => ({
    ...item,
    icon: serviceIcons[i]
  }))

  const row1 = items.slice(0, 3)
  const row2 = items.slice(3)

  return (
    <div className="section-bg" id="services">
      <div className="section-bg-inner">
        <h2 className="section-title">{t('title')}</h2>
        <p className="section-sub">{t('sub')}</p>
        <div className="services-grid">
          {row1.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
        <div className="services-row2">
          {row2.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </div>
  )
}
