import './About.scss'

export default function About() {
  return (
    <div className="section-bg" id="a-propos">
      <div className="section-bg-inner">
        <h2 className="section-title">À propos</h2>
        <div className="section" style={{ paddingTop: 32, paddingBottom: 0 }}>
          <div className="about__layout">
            <div className="about__avatar" role="img" aria-label="Portrait d'Adrien">
              <span className="about__avatar-letter">A</span>
            </div>
            <div className="about__text">
              <p className="about__bio">
                Adrien aide les marques, e-commerces et médias à concevoir des expériences web
                plus performantes grâce à un front-end premium, une UX claire et l'accélération IA.
                Son expertise combine intégration React / Next, optimisation des parcours, composants
                réutilisables et vision produit. Fort d'expériences sur des environnements exigeants
                comme Chanel, Fnac Darty ou Prisma, il transforme des briefs marketing en pages
                rapides, élégantes et conçues pour convertir. Son approche relie technologie, business
                et exécution rapide pour offrir des livrables fiables à fort impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
