import './Hero.scss'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">Développeur front-end qui booste vos conversions</h1>
        <p className="hero__sub">
          Landing pages React / Next, UX premium et automatisation IA pour transformer
          vos briefs marketing en résultats.
        </p>
        <div className="hero__btns">
          <a href="#reservation" className="btn-blue">Parlons de votre projet</a>
          <a href="#services" className="btn-white">Voir mes services</a>
        </div>
      </div>
      <div className="hero__right">
        <div
          className="hero__avatar"
          role="img"
          aria-label="Portrait d'Adrien, développeur front-end freelance"
        >
          <span className="hero__avatar-letter">A</span>
        </div>
      </div>
    </div>
  )
}
