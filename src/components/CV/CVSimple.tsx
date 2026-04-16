import { PrintButton } from './PrintButton'
import './CVSimple.scss'

type Skill = { cat: string; val: string }
type Experience = { company: string; date: string; role: string; bullets: string[]; tags: string }
type Project = { name: string; date: string; role: string; bullets: string[]; tags: string }

export type CVSimpleData = {
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
    experience: string
    projects: string
    skills: string
    educationLanguages: string
  }
  accroche: string
  experiences: Experience[]
  experienceNote: string
  projects: Project[]
  skills: Skill[]
  // "Front-End Developer — IFOCOP Paris (2013)"
  // bold part is before " — "
  educationDegree: string
  educationSub: string
  // "French — Native · English — Fluent"
  // name before " — " is bolded, parts split by " · "
  languageLine: string
  fontVars: string
}

function BoldBeforeDash({ text }: { text: string }) {
  const idx = text.indexOf(' — ')
  if (idx === -1) return <>{text}</>
  return <><strong>{text.slice(0, idx)}</strong>{text.slice(idx)}</>
}

function LanguageLine({ text }: { text: string }) {
  const parts = text.split(' · ')
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && ' · '}
          <BoldBeforeDash text={part} />
        </span>
      ))}
    </>
  )
}

export function CVSimple({ data }: { data: CVSimpleData }) {
  return (
    <div className={`cv-simple ${data.fontVars}`}>
      <div className="cv-simple__header">
        <div className="cv-simple__header-left">
          <h1>{data.name}</h1>
          <div className="cv-simple__role">{data.role}</div>
        </div>
        <div className="cv-simple__header-right">
          {data.contact.location} · {data.contact.email} · {data.contact.phone}<br />
          <a href={data.contact.websiteUrl}>{data.contact.websiteLabel}</a>
          {' · '}
          <a href={data.contact.githubUrl}>{data.contact.githubLabel}</a>
        </div>
      </div>

      <hr className="cv-simple__hr" />

      <p className="cv-simple__accroche">{data.accroche}</p>

      <div className="cv-simple__section">
        <div className="cv-simple__section-title">{data.sections.experience}</div>
        {data.experiences.map((exp, i) => (
          <div key={i}>
            <div className="cv-simple__exp">
              <div className="cv-simple__exp-header">
                <span className="cv-simple__exp-company">{exp.company}</span>
                {exp.date && <span className="cv-simple__exp-date">{exp.date}</span>}
              </div>
              <div className="cv-simple__exp-role">{exp.role}</div>
              <ul className="cv-simple__exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="cv-simple__exp-tags">{exp.tags}</div>
            </div>
            {i < data.experiences.length - 1 && <hr className="cv-simple__hr-light" />}
          </div>
        ))}
        <hr className="cv-simple__hr-light" />
        <p className="cv-simple__small">{data.experienceNote}</p>
      </div>

      <div className="cv-simple__section">
        <div className="cv-simple__section-title">{data.sections.projects}</div>
        {data.projects.map((p, i) => (
          <div key={i}>
            <div className="cv-simple__exp">
              <div className="cv-simple__exp-header">
                <span className="cv-simple__exp-company">{p.name}</span>
                {p.date && <span className="cv-simple__exp-date">{p.date}</span>}
              </div>
              <div className="cv-simple__exp-role">{p.role}</div>
              <ul className="cv-simple__exp-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="cv-simple__exp-tags">{p.tags}</div>
            </div>
            {i < data.projects.length - 1 && <hr className="cv-simple__hr-light" />}
          </div>
        ))}
      </div>

      <div className="cv-simple__section">
        <div className="cv-simple__section-title">{data.sections.skills}</div>
        <div className="cv-simple__skills-grid">
          {data.skills.map((s) => (
            <>
              <span className="cv-simple__skill-cat" key={`cat-${s.cat}`}>{s.cat}</span>
              <span className="cv-simple__skill-val" key={`val-${s.cat}`}>{s.val}</span>
            </>
          ))}
        </div>
      </div>

      <div className="cv-simple__section">
        <div className="cv-simple__section-title">{data.sections.educationLanguages}</div>
        <div className="cv-simple__footer-row">
          <div className="cv-simple__footer-col">
            <div className="cv-simple__formation-item">
              <BoldBeforeDash text={data.educationDegree} />
            </div>
            <div className="cv-simple__formation-sub">{data.educationSub}</div>
          </div>
          <div className="cv-simple__footer-col">
            <div className="cv-simple__formation-item">
              <LanguageLine text={data.languageLine} />
            </div>
          </div>
        </div>
      </div>

      <PrintButton label={data.downloadPdf} />
    </div>
  )
}
