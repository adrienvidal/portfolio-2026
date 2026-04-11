import type { Metadata } from 'next'
import Link from 'next/link'
import { projects, otherMissions } from '@/data/content'
import ProjectCard from '@/components/Projects/ProjectCard'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import '@/pages/AllProjects/AllProjects.scss'

export const metadata: Metadata = {
  title: 'Projets — Adrien Vidal',
  description: 'Tous mes projets : landing pages, refonte UX, MVPs — réalisés pour des équipes growth et marketing.',
}

export default function AllProjects() {
  return (
    <div className="all-projects">
      <Nav page />
      <div className="all-projects__inner">
        <Link href="/" className="all-projects__back">{projects.backLabel}</Link>
        <h1 className="all-projects__title">{projects.allProjectsTitle}</h1>
        <div className="all-projects__grid">
          {projects.items.map((p) => (
            <ProjectCard
              key={p.title}
              {...p}
              roleLabel={projects.roleLabel}
              resultLabel={projects.resultLabel}
              linkLabel={projects.linkLabel}
            />
          ))}
        </div>
        <div className="other-missions">
          <div className="other-missions__header">
            <h3 className="other-missions__title">{otherMissions.title}</h3>
            <p className="other-missions__subtitle">{otherMissions.subtitle}</p>
          </div>
          <ul className="other-missions__list">
            {otherMissions.items.map((client) => (
              <li key={client.name} className="other-missions__item">
                <span className="other-missions__name">{client.name}</span>
                <span className="other-missions__desc">{client.description}</span>
                <div className="other-missions__tags">
                  {client.tags.map((tag) => (
                    <span key={tag} className="other-missions__tag">{tag}</span>
                  ))}
                </div>
                <a className="other-missions__link" href={client.link} target="_blank" rel="noopener noreferrer">
                  {client.site}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
