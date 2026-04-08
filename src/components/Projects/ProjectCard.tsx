interface ProjectCardProps {
  title: string
  tags: string[]
  role: string
  result: string
  image: string
  link: string | null
  roleLabel: string
  resultLabel: string
  linkLabel: string
}

export default function ProjectCard({ title, tags, role, result, image, link, roleLabel, resultLabel, linkLabel }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__img-wrap">
        <img className="project-card__img" src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__line"><strong>{roleLabel}</strong> {role}</p>
        <p className="project-card__line">
          <strong>{resultLabel}</strong> <span className="project-card__result-val">{result}</span>
        </p>
        {link && (
          <a className="project-card__link" href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  )
}
