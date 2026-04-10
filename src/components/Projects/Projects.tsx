import { Link } from 'react-router-dom'
import { projects, otherMissions } from '../../data/content'
import ProjectCard from './ProjectCard'
import './Projects.scss'

export default function Projects() {
  return (
    <div className="section" id="projets">
      <h2 className="section-title">{projects.title}</h2>
      <p className="section-sub"></p>
      <div className="projects-grid">
        {projects.homeOrder.map(i => projects.items[i]).map((p) => (
          <ProjectCard key={p.title} {...p} roleLabel={projects.roleLabel} resultLabel={projects.resultLabel} linkLabel={projects.linkLabel} />
        ))}
      </div>
      <div className="projects-show-more">
        <Link to={projects.seeAllHref} className="btn-white">{projects.seeAllLabel}</Link>
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

      <div className="projects-lab-teaser">
        <span>{projects.labTeaser.text}</span>
        <Link to={projects.labTeaser.href} className="projects-lab-teaser__link">
          {projects.labTeaser.cta}
        </Link>
      </div>
    </div>
  )
}
