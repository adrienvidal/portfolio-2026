interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  items: string[]
  delay: string
  proof: string
  delayLabel: string
}

export default function ServiceCard({ icon, title, items, delay, proof, delayLabel }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-card__icon-wrap">
        <svg className="service-card__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {icon}
        </svg>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <ul className="service-card__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="service-card__footer">
        <div className="service-card__delay">
          <strong>{delayLabel}</strong> <span>{delay}</span>
        </div>
        <div className="service-card__proof">{proof}</div>
      </div>
    </div>
  )
}
