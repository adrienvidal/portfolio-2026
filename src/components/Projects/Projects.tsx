import { projects } from '../../data/content'
import ProjectCard from './ProjectCard'
import './Projects.scss'

export default function Projects() {
  return (
    <div className="section-bg" id="projets">
      <div className="section-bg-inner">
        <h2 className="section-title">{projects.title}</h2>
        <p className="section-sub"></p>
        <div className="projects-grid">
          {projects.items.map((p) => (
            <ProjectCard key={p.title} {...p} roleLabel={projects.roleLabel} resultLabel={projects.resultLabel} linkLabel={projects.linkLabel} />
          ))}
        </div>
      </div>
    </div>
  )
}
