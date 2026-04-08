import ProjectCard from './ProjectCard'
import './Projects.scss'

const projects = [
  {
    title: 'Landing e-commerce premium',
    role: 'Refonte front + optimisation CTA',
    result: 'Parcours plus fluide et expérience mobile premium',
  },
  {
    title: 'Tunnel média éditorial',
    role: 'Composants headless + performance',
    result: 'Meilleure vitesse et production plus rapide',
  },
  {
    title: 'Page acquisition React / Next',
    role: 'Wireframe IA + intégration front',
    result: 'Itérations marketing accélérées',
  },
]

export default function Projects() {
  return (
    <div className="section-bg" id="projets">
      <div className="section-bg-inner">
        <h2 className="section-title">Projets & Résultats</h2>
        <p className="section-sub"></p>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}
