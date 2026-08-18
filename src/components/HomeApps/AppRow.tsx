'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import Lightbox, { type MediaItem } from '@/components/Lightbox/Lightbox'

interface AppRowProps {
  title: string
  mission: string
  production: string
  tags: string[]
  images: string[]
  missionLabel: string
  productionLabel: string
  visualsLabel: string
}

export default function AppRow({
  title,
  mission,
  production,
  tags,
  images,
  missionLabel,
  productionLabel,
  visualsLabel
}: AppRowProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const media: MediaItem[] = images.map((src) => ({ type: 'image' as const, src }))

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevSlide = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + media.length) % media.length : 0)),
    [media.length]
  )
  const nextSlide = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % media.length : 0)),
    [media.length]
  )

  return (
    <article className="app-row">
      <button
        type="button"
        className="app-row__media"
        onClick={() => setLightboxIndex(0)}
        aria-label={`${title} — ${visualsLabel}`}
      >
        <Image
          className="app-row__img"
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
        />
        <span className="app-row__count">{visualsLabel}</span>
      </button>

      <div className="app-row__body">
        <h3 className="app-row__title">{title}</h3>

        <p className="app-row__line">
          <strong className="app-row__label">{missionLabel}</strong>
          {mission}
        </p>
        <p className="app-row__line">
          <strong className="app-row__label">{productionLabel}</strong>
          {production}
        </p>

        <ul className="app-row__tags">
          {tags.map((tag) => (
            <li key={tag} className="app-row__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          media={media}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      )}
    </article>
  )
}
