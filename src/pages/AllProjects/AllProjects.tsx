import { Link } from 'react-router-dom'
import { projects } from '../../data/content'
import ProjectCard from '../../components/Projects/ProjectCard'
import './AllProjects.scss'

export default function AllProjects() {
  return (
    <div className="all-projects">
      <div className="all-projects__inner">
        <Link to="/" className="all-projects__back">{projects.backLabel}</Link>
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
      </div>
    </div>
  )
}
