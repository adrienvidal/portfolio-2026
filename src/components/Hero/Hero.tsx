import Image from 'next/image'
import { hero } from '../../data/content'
import './Hero.scss'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__sub">{hero.sub}</p>
        <div className="hero__btns">
          <a href={hero.ctaPrimary.href} className="btn-blue">{hero.ctaPrimary.label}</a>
          <a href={hero.ctaSecondary.href} className="btn-white">{hero.ctaSecondary.label}</a>
        </div>
      </div>
      <div className="hero__right">
        <Image
          className="hero__avatar"
          src={hero.avatarSrc}
          alt={hero.avatarAlt}
          width={340}
          height={340}
          priority
        />
      </div>
    </div>
  )
}
