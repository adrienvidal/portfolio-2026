'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, useRouter, usePathname } from '@/i18n/navigation'
import './Nav.scss'

function NavLink({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void }) {
  if (href.startsWith('/')) {
    return <Link href={href} className={className} onClick={onClick}>{children}</Link>
  }
  return <a href={href} className={className} onClick={onClick}>{children}</a>
}

export default function Nav({ dark = false }: { dark?: boolean }) {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Sans ce verrou, la page defilait derriere le tiroir plein ecran : on
  // ouvrait le menu, on faisait glisser par reflexe, et on se retrouvait
  // ailleurs en refermant.
  useEffect(() => {
    if (!isOpen) return
    // On verrouille `documentElement` autant que `body` : c'est lui l'element
    // qui defile, et ne poser la regle que sur `body` la laisse dependre de la
    // propagation d'overflow, qui varie selon les navigateurs.
    const root = document.documentElement
    const previous = { root: root.style.overflow, body: document.body.style.overflow }
    root.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      root.style.overflow = previous.root
      document.body.style.overflow = previous.body
    }
  }, [isOpen])

  const isHome = pathname === '/'
  const anchor = (hash: string) => isHome ? hash : `/${hash}`

  const links = [
    { label: t('links.services'), href: anchor('#services') },
    { label: t('links.processus'), href: anchor('#processus') },
    { label: t('links.apropos'), href: anchor('#a-propos') },
    { label: t('links.projets'), href: anchor('#projets') },
    { label: t('links.blog'), href: '/blog', className: 'nav__page' },
    { label: t('links.lab'), href: '/lab', className: 'nav__lab' },
  ]

  const ctaHref = anchor('#reservation')

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === 'fr' ? 'en' : 'fr' })
  }

  const close = () => setIsOpen(false)

  return (
    <>
      <nav className={`nav${dark ? ' nav--dark' : ''}`}>
        <div className="nav__left">
          <Link href="/" className="nav__logo">Adrien Vidal</Link>
          <button className="nav__lang" onClick={switchLocale} aria-label={`Switch to ${locale === 'fr' ? 'English' : 'Français'}`}>
            {locale === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}><NavLink href={link.href} className={link.className}>{link.label}</NavLink></li>
          ))}
          <li><NavLink href={ctaHref} className="nav__cta">{t('cta')}</NavLink></li>
        </ul>
        <button
          className="nav__burger"
          onClick={() => setIsOpen(true)}
          aria-label={t('openMenu')}
        >
          <span /><span /><span />
        </button>
      </nav>

      {isOpen && (
        <div className={`nav-drawer${dark ? ' nav-drawer--dark' : ''}`}>
          <div className="nav-drawer__top">
            <button className="nav__lang" onClick={() => { switchLocale(); close() }} aria-label={`Switch to ${locale === 'fr' ? 'English' : 'Français'}`}>
              {locale === 'fr' ? 'EN' : 'FR'}
            </button>
            <button className="nav-drawer__close" onClick={close} aria-label={t('closeMenu')}>✕</button>
          </div>
          <ul className="nav-drawer__links">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} className={link.className} onClick={close}>{link.label}</NavLink>
              </li>
            ))}
            <li>
              <NavLink href={ctaHref} className="nav__cta" onClick={close}>{t('cta')}</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
