import Link from 'next/link'
import { nav } from '../../data/content'
import './Nav.scss'

function NavLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (href.startsWith('/')) {
    return <Link href={href} className={className}>{children}</Link>
  }
  return <a href={href} className={className}>{children}</a>
}

export default function Nav({ page = false, dark = false }: { page?: boolean; dark?: boolean }) {
  const links = page ? nav.links.filter(l => !l.href.startsWith('#')) : nav.links
  const ctaHref = page ? '/#reservation' : nav.cta.href

  return (
    <nav className={`nav${dark ? ' nav--dark' : ''}`}>
      <Link href="/" className="nav__logo">{nav.logo}</Link>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.href}><NavLink href={link.href} className={link.className}>{link.label}</NavLink></li>
        ))}
        <li><NavLink href={ctaHref} className="nav__cta">{nav.cta.label}</NavLink></li>
      </ul>
    </nav>
  )
}
