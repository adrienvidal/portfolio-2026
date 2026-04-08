import ServiceCard from './ServiceCard'
import './Services.scss'

const services = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    title: 'Landing pages premium',
    items: ['Structure optimisée conversion', 'Composants réutilisables', 'Responsive mobile premium', 'Performance Core Web Vitals'],
    delay: '5 à 10 jours',
    proof: 'Pages pensées pour acquisition et ROAS',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    title: 'Refonte UX orientée conversion',
    items: ['Audit rapide', 'Simplification du parcours', 'Hiérarchie visuelle', 'Optimisation CTA'],
    delay: '3 à 7 jours',
    proof: 'Meilleure lisibilité et friction réduite',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
    title: 'A/B tests visuels & variantes IA',
    items: ['Variantes de sections', 'Wireframes IA', 'Hypothèses UX', 'Tests rapides'],
    delay: '2 à 5 jours',
    proof: 'Itérations accélérées sans surcharge produit',
  },
  // {
  //   icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />,
  //   title: 'Industrialisation front CMS / headless',
  //   items: ['Composants modulaires', 'Design system léger', 'Intégration CMS headless', 'Documentation auto-rédigée'],
  //   delay: '1 à 2 semaines',
  //   proof: 'Scaling rapide des équipes marketing',
  // },
  // {
  //   icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  //   title: 'QA front + automatisation IA',
  //   items: ['Checklists QA', 'Prompts de recette', 'Documentation Jira / Notion', "Détection rapide d'anomalies"],
  //   delay: '2 à 4 jours',
  //   proof: 'Production plus fiable et plus rapide',
  // },
]

export default function Services() {
  const row1 = services.slice(0, 3)
  const row2 = services.slice(3)

  return (
    <div className="section-bg" id="services">
      <div className="section-bg-inner">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">Des prestations ciblées pour maximiser l'impact de votre front-end.</p>

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
