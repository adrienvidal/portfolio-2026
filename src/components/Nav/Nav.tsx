import './Nav.scss'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">Adrien</a>
      <ul className="nav__links">
        <li><a href="#services">Services</a></li>
        <li><a href="#processus">Processus</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#a-propos">À propos</a></li>
        <li><a href="#reservation" className="nav__cta">Parlons de votre projet</a></li>
      </ul>
    </nav>
  )
}
