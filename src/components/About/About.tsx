import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import './About.scss'

export default async function About() {
  const t = await getTranslations('about')

  return (
    <div className="section-bg" id="a-propos">
      <div className="section-bg-inner">
        <h2 className="section-title">{t('title')}</h2>
        <div className="section" style={{ paddingTop: 32, paddingBottom: 0 }}>
          <div className="about__layout">
            <div className="about__avatar">
              <Image
                src="/adrien-profil3.webp"
                alt="Portrait d'Adrien"
                width={200}
                height={200}
              />
            </div>
            <div className="about__text">
              <p className="about__bio">{t('bio')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
