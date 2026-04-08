import { ctaFinal } from '../../data/content'
import './CtaFinal.scss'

export default function CtaFinal() {
  return (
    <div className="cta-final">
      <div className="cta-final__inner">
        <h2 className="cta-final__title">{ctaFinal.title}</h2>
        <p className="cta-final__sub">{ctaFinal.sub}</p>
        <a href={ctaFinal.cta.href} className="btn-blue" style={{ fontSize: 16, padding: '15px 32px' }}>
          {ctaFinal.cta.label}
        </a>
      </div>
    </div>
  )
}
