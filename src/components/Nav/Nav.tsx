import { nav } from '../../data/content'
import './Nav.scss'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">{nav.logo}</a>
      <ul className="nav__links">
        {nav.links.map((link) => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
        <li><a href={nav.cta.href} className="nav__cta">{nav.cta.label}</a></li>
      </ul>
    </nav>
  )
}
