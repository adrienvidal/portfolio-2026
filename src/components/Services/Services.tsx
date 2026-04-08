import { services } from '../../data/content'
import ServiceCard from './ServiceCard'
import './Services.scss'

export default function Services() {
  const row1 = services.items.slice(0, 3)
  const row2 = services.items.slice(3)

  return (
    <div className="section-bg" id="services">
      <div className="section-bg-inner">
        <h2 className="section-title">{services.title}</h2>
        <p className="section-sub">{services.sub}</p>

        <div className="services-grid">
          {row1.map((s) => <ServiceCard key={s.title} {...s} delayLabel={services.delayLabel} />)}
        </div>
        <div className="services-row2">
          {row2.map((s) => <ServiceCard key={s.title} {...s} delayLabel={services.delayLabel} />)}
        </div>
      </div>
    </div>
  )
}
