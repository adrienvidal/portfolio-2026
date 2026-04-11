'use client'

import Link from 'next/link'
import { useState } from 'react'
import { nav } from '../../data/content'
import './Nav.scss'

function NavLink({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void }) {
  if (href.startsWith('/')) {
    return <Link href={href} className={className} onClick={onClick}>{children}</Link>
  }
  return <a href={href} className={className} onClick={onClick}>{children}</a>
}

export default function Nav({ page = false, dark = false }: { page?: boolean; dark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const links = page ? nav.links.filter(l => !l.href.startsWith('#')) : nav.links
  const ctaHref = page ? '/#reservation' : nav.cta.href

  const close = () => setIsOpen(false)

  return (
    <>
      <nav className={`nav${dark ? ' nav--dark' : ''}`}>
        <Link href="/" className="nav__logo">{nav.logo}</Link>
        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}><NavLink href={link.href} className={link.className}>{link.label}</NavLink></li>
          ))}
          <li><NavLink href={ctaHref} className="nav__cta">{nav.cta.label}</NavLink></li>
        </ul>
        <button
          className="nav__burger"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {isOpen && (
        <div className={`nav-drawer${dark ? ' nav-drawer--dark' : ''}`}>
          <button className="nav-drawer__close" onClick={close} aria-label="Fermer le menu">✕</button>
          <ul className="nav-drawer__links">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} className={link.className} onClick={close}>{link.label}</NavLink>
              </li>
            ))}
            <li>
              <NavLink href={ctaHref} className="nav__cta" onClick={close}>{nav.cta.label}</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
