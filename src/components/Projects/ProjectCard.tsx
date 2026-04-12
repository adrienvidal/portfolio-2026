'use client'

import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'
import Lightbox, { type MediaItem } from '@/components/Lightbox/Lightbox'

interface ProjectCardProps {
  title: string
  tags: string[]
  role: string
  result: string
  images: string[]
  video?: string
  link: string | null
  roleLabel: string
  resultLabel: string
  linkLabel: string
}

function toAutoVideo(url: string) {
  return url.replace('/upload/', '/upload/f_auto,q_auto/')
}

export default function ProjectCard({ title, tags, role, result, images, video, link, roleLabel, resultLabel, linkLabel }: ProjectCardProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const media: MediaItem[] = [
    ...(video ? [{ type: 'video' as const, src: toAutoVideo(video) }] : []),
    ...images.map(src => ({ type: 'image' as const, src })),
  ]

  const handleMouseEnter = () => videoRef.current?.play()
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevSlide = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + media.length) % media.length : 0), [media.length])
  const nextSlide = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % media.length : 0), [media.length])

  return (
    <div className="project-card">
      <div
        className="project-card__img-wrap"
        onClick={() => setLightboxIndex(0)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'zoom-in' }}
      >
        {video ? (
          <video
            ref={videoRef}
            className="project-card__video"
            src={toAutoVideo(video)}
            poster={images[0]}
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            className="project-card__img"
            src={images[0]}
            alt={title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        )}
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
