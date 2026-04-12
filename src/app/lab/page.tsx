'use client'

import Image from 'next/image'
import { useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { lab } from '@/data/content'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import Lightbox, { type MediaItem } from '@/components/Lightbox/Lightbox'
import './lab.scss'

function toAutoVideo(url: string) {
  return url.replace('/upload/', '/upload/f_auto,q_auto/')
}

function LabCover({ item, poster }: { item: typeof lab.items[number]; poster?: string }) {
  if ('videoDesk' in item && item.videoDesk && 'videoMob' in item && item.videoMob) {
    return (
      <>
        <video className="lab__cover-video lab__cover-video--desk" src={toAutoVideo(item.videoDesk)} poster={poster} loop muted playsInline />
        <video className="lab__cover-video lab__cover-video--mob" src={toAutoVideo(item.videoMob)} poster={poster} loop muted playsInline />
      </>
    )
  }
  if ('video' in item && item.video) {
    return (
      <video
        className="lab__cover-video"
        src={toAutoVideo(item.video as string)}
        poster={poster}
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
          <div key={i} className="lab__cover-collage-item">
            <Image fill src={src} alt={`${item.title} screen ${i + 1}`} className="lab__cover-collage-img" sizes="(max-width: 900px) 33vw, 17vw" />
          </div>
        ))}
      </div>
    )
  }
  return <div className="lab__cover-placeholder" />
}

function LabItem({ item, openLightbox }: { item: typeof lab.items[number]; openLightbox: (media: MediaItem[], index?: number) => void }) {
  const coverRef = useRef<HTMLDivElement>(null)

  const videoSrc = 'videoDesk' in item && item.videoDesk && 'videoMob' in item && item.videoMob
    ? (typeof window !== 'undefined' && window.innerWidth <= 900 ? item.videoMob : item.videoDesk)
    : ('video' in item && item.video ? item.video : null)
  const media: MediaItem[] = [
    ...(videoSrc ? [{ type: 'video' as const, src: toAutoVideo(videoSrc as string) }] : []),
    ...('images' in item && item.images ? item.images.map(src => ({ type: 'image' as const, src })) : []),
  ]
  const hasLightbox = media.length > 0
  const poster = 'images' in item && item.images && item.images.length > 0 ? item.images[0] : undefined

  const handleMouseEnter = () => {
    coverRef.current?.querySelectorAll('video').forEach(v => v.play())
  }
  const handleMouseLeave = () => {
    coverRef.current?.querySelectorAll('video').forEach(v => {
      v.pause()
      v.currentTime = 0
    })
  }

  return (
    <li className="lab__item">
      <div
        ref={coverRef}
        className={`lab__cover${hasLightbox ? ' lab__cover--clickable' : ''}`}
        onClick={hasLightbox ? () => openLightbox(media) : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <LabCover item={item} poster={poster} />
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
          <Link href="/" className="lab__back">{lab.backLabel}</Link>
          <header className="lab__header">
            <h1 className="lab__title">{lab.title}</h1>
            <p className="lab__sub">{lab.sub}</p>
          </header>
          <ul className="lab__list">
            {lab.items.map((item) => (
              <LabItem key={item.title} item={item} openLightbox={openLightbox} />
            ))}
          </ul>
        </div>
      </div>
      <Footer />

      {lightbox && (
        <Lightbox
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
