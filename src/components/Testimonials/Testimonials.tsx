import TestimonialCard from './TestimonialCard'
import './Testimonials.scss'

const testimonials = [
  {
    quote: 'Adrien transforme très vite un brief flou en page claire et performante.',
    name: 'Client 1',
    role: 'À remplacer par recommandation LinkedIn',
  },
  {
    quote: 'Excellente rigueur front, très fort sur la qualité perçue mobile.',
    name: 'Client 2',
    role: 'À remplacer par recommandation LinkedIn',
  },
  {
    quote: 'Une vraie capacité à relier marketing, UX et exécution technique.',
    name: 'Client 3',
    role: 'À remplacer par recommandation LinkedIn',
  },
]

export default function Testimonials() {
  return (
    <div className="section">
      <h2 className="section-title">Ce qu'on dit de moi</h2>
      <p className="section-sub">À remplacer par vos recommandations LinkedIn</p>
      <div className="testi-grid">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  )
}
