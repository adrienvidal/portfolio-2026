import TestimonialCard from './TestimonialCard'
import './Testimonials.scss'

// TODO: Replace with real LinkedIn recommendations
const items = [
  { quote: 'Adrien transforme très vite un brief flou en page claire et performante.', name: 'Responsable acquisition', role: 'E-commerce — mode premium' },
  { quote: 'Excellente rigueur front, très fort sur la qualité perçue mobile.', name: 'Head of Product', role: 'Groupe média digital' },
  { quote: 'Une vraie capacité à relier marketing, UX et exécution technique.', name: 'Growth Manager', role: 'SaaS B2B' },
]

export default function Testimonials() {
  return (
    <div className="section">
      <h2 className="section-title">Ils m&apos;ont fait confiance</h2>
      <p className="section-sub">Des équipes marketing, e-commerce et médias avec qui j&apos;ai travaillé.</p>
      <div className="testi-grid">
        {items.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  )
}
