import { Link } from 'react-router-dom'
import { nav } from '../../data/content'
import './Nav.scss'

function NavLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (href.startsWith('/')) {
    return <Link to={href} className={className}>{children}</Link>
  }
  return <a href={href} className={className}>{children}</a>
}

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">{nav.logo}</a>
      <ul className="nav__links">
        {nav.links.map((link) => (
          <li key={link.href}><NavLink href={link.href} className={link.className}>{link.label}</NavLink></li>
        ))}
        <li><NavLink href={nav.cta.href} className="nav__cta">{nav.cta.label}</NavLink></li>
      </ul>
    </nav>
  )
}
