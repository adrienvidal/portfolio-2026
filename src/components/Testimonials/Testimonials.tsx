import { getTranslations } from 'next-intl/server'
import TestimonialCard from './TestimonialCard'
import './Testimonials.scss'

type TestimonialItem = { quote: string; name: string; role: string }

export default async function Testimonials() {
  const t = await getTranslations('testimonials')
  const items = t.raw('items') as TestimonialItem[]

  return (
    <div className="section-bg">
      <div className="section-bg-inner">
        <h2 className="section-title">{t('title')}</h2>
        <p className="section-sub">{t('sub')}</p>
        <div className="testi-grid">
          {items.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
