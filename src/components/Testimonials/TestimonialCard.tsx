interface TestimonialCardProps {
  quote: string
  name: string
  role: string
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="testi-card">
      <svg className="testi-card__quote-icon" viewBox="0 0 32 24" fill="currentColor">
        <path d="M0 24V14.4C0 6.08 4.32 1.28 12.96 0l1.44 2.88C10.08 4.16 7.84 6.72 7.2 10.4H12V24H0zm20 0V14.4C20 6.08 24.32 1.28 32.96 0l1.44 2.88C30.08 4.16 27.84 6.72 27.2 10.4H32V24H20z" />
      </svg>
      <p className="testi-card__quote">&ldquo;{quote}&rdquo;</p>
      <div className="testi-card__author-name">{name}</div>
      <div className="testi-card__author-role">{role}</div>
    </div>
  )
}
