'use client'

import Image from 'next/image'
import { useState } from 'react'

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

export default function ProjectCard({ title, tags, role, result, images, video, link, roleLabel, resultLabel, linkLabel }: ProjectCardProps) {
  const [current, setCurrent] = useState(0)

  const slides = video ? [null, ...images] : images
  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent((i) => (i + 1) % slides.length)

  return (
    <div className="project-card">
      <div className="project-card__img-wrap">
        {current === 0 && video ? (
          <video
            className="project-card__video"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            className="project-card__img"
            src={slides[current] as string}
            alt={`${title} — ${current + 1}`}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        )}
        {slides.length > 1 && (
          <>
            <button className="project-card__nav project-card__nav--prev" onClick={prev} aria-label="Image précédente">‹</button>
            <button className="project-card__nav project-card__nav--next" onClick={next} aria-label="Image suivante">›</button>
            <div className="project-card__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`project-card__dot${i === current ? ' project-card__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </>
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
    </div>
  )
}
