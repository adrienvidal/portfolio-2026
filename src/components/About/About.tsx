import { about } from '../../data/content'
import './About.scss'

export default function About() {
  return (
    <div className="section-bg" id="a-propos">
      <div className="section-bg-inner">
        <h2 className="section-title">{about.title}</h2>
        <div className="section" style={{ paddingTop: 32, paddingBottom: 0 }}>
          <div className="about__layout">
            <div className="about__avatar" role="img" aria-label="Portrait d'Adrien">
              <span className="about__avatar-letter">{about.avatarLetter}</span>
            </div>
            <div className="about__text">
              <p className="about__bio">{about.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
