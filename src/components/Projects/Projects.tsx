import Link from 'next/link'
import { projects, otherMissions } from '../../data/content'
import ProjectCard from './ProjectCard'
import OtherMissionItem from './OtherMissionItem'
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
        <Link href={projects.seeAllHref} className="btn-white">{projects.seeAllLabel}</Link>
      </div>

      <div className="other-missions">
        <div className="other-missions__header">
          <h3 className="other-missions__title">{otherMissions.title}</h3>
          <p className="other-missions__subtitle">{otherMissions.subtitle}</p>
        </div>
        <ul className="other-missions__list">
          {otherMissions.items.map((client) => (
            <OtherMissionItem
              key={client.name}
              name={client.name}
              description={client.description}
              tags={client.tags}
              link={client.link}
              site={client.site}
            />
          ))}
        </ul>
      </div>

      <div className="projects-lab-teaser">
        <span>{projects.labTeaser.text}</span>
        <Link href={projects.labTeaser.href} className="projects-lab-teaser__link">
          {projects.labTeaser.cta}
        </Link>
      </div>
    </div>
  )
}
