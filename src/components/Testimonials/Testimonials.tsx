import { testimonials } from '../../data/content'
import TestimonialCard from './TestimonialCard'
import './Testimonials.scss'

export default function Testimonials() {
  return (
    <div className="section">
      <h2 className="section-title">{testimonials.title}</h2>
      <p className="section-sub">{testimonials.sub}</p>
      <div className="testi-grid">
        {testimonials.items.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  )
}
