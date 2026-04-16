import { PrintButton } from './PrintButton'
import './CVDesign.scss'

type Skill = { cat: string; val: string }
type Language = { name: string; level: string }
type Education = { degree: string; school: string; year: string }
type Experience = { company: string; date: string; role: string; bullets: string[]; tags: string }
type Project = { name: string; date: string; role: string; bullets: string[]; tags: string }

export type CVDesignData = {
  downloadPdf: string
  name: string
  role: string
  contact: {
    location: string
    email: string
    phone: string
    websiteLabel: string
    websiteUrl: string
    githubLabel: string
    githubUrl: string
  }
  sections: {
    contact: string
    skills: string
    languages: string
    education: string
    experience: string
    projects: string
  }
  accroche: string
  skills: Skill[]
  languages: Language[]
  education: Education[]
  experiences: Experience[]
  experienceNote: string
  projects: Project[]
  fontVars: string
}

export function CVDesign({ data }: { data: CVDesignData }) {
  const roleLines = data.role.split('\n')

  return (
    <div className={`cv-design ${data.fontVars}`}>
      <aside className="cv-design__sidebar">
        <div>
          <div className="cv-design__name">{data.name}</div>
          <div className="cv-design__role">
            {roleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < roleLines.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>

        <div className="cv-design__sidebar-section">
          <div className="cv-design__sidebar-title">{data.sections.contact}</div>
          <div className="cv-design__contact-item">{data.contact.location}</div>
          <div className="cv-design__contact-item">{data.contact.email}</div>
          <div className="cv-design__contact-item">{data.contact.phone}</div>
          <div className="cv-design__contact-item">
            <a href={data.contact.websiteUrl}>{data.contact.websiteLabel}</a>
          </div>
          <div className="cv-design__contact-item">
            <a href={data.contact.githubUrl}>{data.contact.githubLabel}</a>
          </div>
        </div>

        <div className="cv-design__sidebar-section">
          <div className="cv-design__sidebar-title">{data.sections.skills}</div>
          {data.skills.map((s) => (
            <div className="cv-design__skill-group" key={s.cat}>
              <div className="cv-design__skill-cat">{s.cat}</div>
              <div className="cv-design__skill-val">{s.val}</div>
            </div>
          ))}
        </div>

        <div className="cv-design__sidebar-section">
          <div className="cv-design__sidebar-title">{data.sections.languages}</div>
          {data.languages.map((l) => (
            <div className="cv-design__lang" key={l.name}>
              <strong>{l.name}</strong> — {l.level}
            </div>
          ))}
        </div>

        <div className="cv-design__sidebar-section">
          <div className="cv-design__sidebar-title">{data.sections.education}</div>
          {data.education.map((e, i) => (
            <div key={i} style={i > 0 ? { marginTop: '3mm' } : undefined}>
              <div className="cv-design__contact-item cv-design__contact-item--light">{e.degree}</div>
              <div className="cv-design__contact-item">{e.school} — {e.year}</div>
            </div>
          ))}
        </div>
      </aside>

      <main className="cv-design__main">
        <p className="cv-design__accroche">{data.accroche}</p>

        <div className="cv-design__section">
          <div className="cv-design__section-title">{data.sections.experience}</div>
          {data.experiences.map((exp, i) => (
            <div className="cv-design__exp" key={i}>
              <div className="cv-design__exp-header">
                <span className="cv-design__exp-company">{exp.company}</span>
                {exp.date && <span className="cv-design__exp-date">{exp.date}</span>}
              </div>
              <div className="cv-design__exp-role">{exp.role}</div>
              <ul className="cv-design__exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="cv-design__exp-tags">{exp.tags}</div>
            </div>
          ))}
          <p className="cv-design__small-note">{data.experienceNote}</p>
        </div>

        <div className="cv-design__section">
          <div className="cv-design__section-title">{data.sections.projects}</div>
          {data.projects.map((p, i) => (
            <div className="cv-design__exp" key={i}>
              <div className="cv-design__exp-header">
                <span className="cv-design__exp-company">{p.name}</span>
                {p.date && <span className="cv-design__exp-date">{p.date}</span>}
              </div>
              <div className="cv-design__exp-role">{p.role}</div>
              <ul className="cv-design__exp-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="cv-design__exp-tags">{p.tags}</div>
            </div>
          ))}
        </div>
      </main>

      <PrintButton label={data.downloadPdf} />
    </div>
  )
}
