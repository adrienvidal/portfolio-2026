import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import './Hero.scss'

export default async function Hero() {
  const t = await getTranslations('hero')

  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">{t('title')}</h1>
        <p className="hero__sub">{t('sub')}</p>
        <div className="hero__btns">
          <a href="#reservation" className="btn-blue">{t('ctaPrimary')}</a>
          <a href="#services" className="btn-white">{t('ctaSecondary')}</a>
        </div>
      </div>
      <div className="hero__right">
        <Image
          className="hero__avatar"
          src="/adrien-profil.webp"
          alt={t('avatarAlt')}
          width={340}
          height={340}
          priority
        />
      </div>
    </div>
  )
}
