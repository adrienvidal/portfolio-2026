interface ProjectCardProps {
  title: string
  role: string
  result: string
  roleLabel: string
  resultLabel: string
}

export default function ProjectCard({ title, role, result, roleLabel, resultLabel }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__line"><strong>{roleLabel}</strong> {role}</p>
      <p className="project-card__line">
        <strong>{resultLabel}</strong> <span className="project-card__result-val">{result}</span>
      </p>
    </div>
  )
}
