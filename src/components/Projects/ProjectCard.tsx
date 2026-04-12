'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import Lightbox, { type MediaItem } from '@/components/Lightbox/Lightbox'

interface ProjectCardProps {
  title: string
  tags: string[]
  role: string
  result: string
  images: string[]
  mobileImages?: string[]
  video?: string
  link: string | null
  roleLabel: string
  resultLabel: string
  linkLabel: string
}

function toAutoVideoBest(url: string) {
  return url.replace('/upload/', '/upload/f_auto,q_auto:best/')
}

export default function ProjectCard({ title, tags, role, result, images, mobileImages, video, link, roleLabel, resultLabel, linkLabel }: ProjectCardProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const media: MediaItem[] = [
    ...(video ? [{ type: 'video' as const, src: toAutoVideoBest(video) }] : []),
    ...(mobileImages ?? images).map(src => ({ type: 'image' as const, src })),
  ]

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevSlide = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + media.length) % media.length : 0), [media.length])
  const nextSlide = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % media.length : 0), [media.length])

  const coverContent = mobileImages ? (
    <div className="project-card__collage">
      {mobileImages.slice(0, 3).map((src, i) => (
        <div key={i} className="project-card__collage-item">
          <Image
            fill
            src={src}
            alt={`${title} — ${i + 1}`}
            className="project-card__collage-img"
            sizes="(max-width: 900px) 33vw, 11vw"
          />
        </div>
      ))}
    </div>
  ) : (
    <Image
      className="project-card__img"
      src={images[0]}
      alt={title}
      fill
      sizes="(max-width: 900px) 100vw, 33vw"
    />
  )

  return (
    <div className="project-card">
      <div
        className="project-card__img-wrap"
        onClick={() => setLightboxIndex(0)}
        style={{ cursor: 'zoom-in' }}
      >
        {coverContent}
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__line"><strong>{roleLabel}</strong> {role}</p>
        <p className="project-card__line">
          <strong>{resultLabel}</strong> <span className="project-card__result-val">{result}</span>
        </p>
        {link && (
          <a className="project-card__link" href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel}
          </a>
        )}
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
    </div>
  )
}
