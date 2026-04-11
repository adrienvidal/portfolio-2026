import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { lab } from '../../data/content'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import LabLightbox, { type MediaItem } from './LabLightbox'
import './Lab.scss'

function LabCover({ item }: { item: typeof lab.items[number] }) {
  if ('video' in item && item.video) {
    return (
      <video
        className="lab__cover-video"
        src={item.video}
        autoPlay
        loop
        muted
        playsInline
      />
    )
  }
  if ('images' in item && item.images && item.images.length > 0) {
    return (
      <div className="lab__cover-collage">
        {item.images.slice(0, 3).map((src, i) => (
          <img key={i} src={src} alt={`${item.title} screen ${i + 1}`} className="lab__cover-collage-img" />
        ))}
      </div>
    )
  }
  return <div className="lab__cover-placeholder" />
}

export default function Lab() {
  const [lightbox, setLightbox] = useState<{ media: MediaItem[]; index: number } | null>(null)

  const openLightbox = useCallback((media: MediaItem[], index = 0) => {
    setLightbox({ media, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.media.length) % lb.media.length } : lb)
  }, [])

  const next = useCallback(() => {
    setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.media.length } : lb)
  }, [])

  return (
    <>
      <Nav page dark />
      <div className="lab">
        <div className="lab__inner">
          <Link to="/" className="lab__back">{lab.backLabel}</Link>
          <header className="lab__header">
            <h1 className="lab__title">{lab.title}</h1>
            <p className="lab__sub">{lab.sub}</p>
          </header>
          <ul className="lab__list">
            {lab.items.map((item) => {
              const media: MediaItem[] = [
                ...('video' in item && item.video ? [{ type: 'video' as const, src: item.video }] : []),
                ...('images' in item && item.images ? item.images.map(src => ({ type: 'image' as const, src })) : []),
              ]
              const hasLightbox = media.length > 0

              return (
                <li key={item.title} className="lab__item">
                  <div
                    className={`lab__cover${hasLightbox ? ' lab__cover--clickable' : ''}`}
                    onClick={hasLightbox ? () => openLightbox(media) : undefined}
                  >
                    <LabCover item={item} />
                    {hasLightbox && (
                      <div className="lab__cover-hint">
                        <span>{media.length} visuels</span>
                      </div>
                    )}
                  </div>
                  <div className="lab__item-body">
                    <div className="lab__item-top">
                      <div className="lab__item-meta">
                        <span className={`lab__status lab__status--${item.status}`}>
                          {lab.statusLabels[item.status]}
                        </span>
                        <div className="lab__tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className="lab__tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      {item.link && (
                        <a className="lab__link" href={item.link} target="_blank" rel="noopener noreferrer">
                          GitHub →
                        </a>
                      )}
                    </div>
                    <h2 className="lab__item-title">{item.title}</h2>
                    <p className="lab__item-desc">{item.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer />

      {lightbox && (
        <LabLightbox
          media={lightbox.media}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
