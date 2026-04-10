import { Link } from 'react-router-dom'
import { projects } from '../../data/content'
import ProjectCard from './ProjectCard'
import './Projects.scss'

export default function Projects() {
  return (
    <div className="section" id="projets">
      <h2 className="section-title">{projects.title}</h2>
      <p className="section-sub"></p>
      <div className="projects-grid">
        {projects.items.slice(0, 6).map((p) => (
          <ProjectCard key={p.title} {...p} roleLabel={projects.roleLabel} resultLabel={projects.resultLabel} linkLabel={projects.linkLabel} />
        ))}
      </div>
      <div className="projects-show-more">
        <Link to={projects.seeAllHref} className="btn-white">{projects.seeAllLabel}</Link>
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
