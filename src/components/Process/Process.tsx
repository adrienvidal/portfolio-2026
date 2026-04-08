import ProcessStep from './ProcessStep'
import './Process.scss'

const steps = [
  {
    label: 'Étape 1',
    title: 'Call découverte',
    desc: 'Compréhension du brief, des objectifs business et des contraintes produit.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  },
  {
    label: 'Étape 2',
    title: 'Prototype & proposition simple',
    desc: 'Structure de page, wireframe IA, composants et roadmap.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
  },
  {
    label: 'Étape 3',
    title: 'Production & itérations rapides',
    desc: 'Développement front, optimisations UX, retours et mise en ligne.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
]

export default function Process() {
  return (
    <div className="section" id="processus">
      <h2 className="section-title">Comment ça marche</h2>
      <p className="section-sub">Un processus simple en 3 étapes pour aller vite et bien.</p>
      <div className="process-grid">
        {steps.map((s) => <ProcessStep key={s.label} {...s} />)}
      </div>
    </div>
  )
}
