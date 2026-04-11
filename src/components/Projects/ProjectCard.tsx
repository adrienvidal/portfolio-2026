'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  tags: string[]
  role: string
  result: string
  images: string[]
  link: string | null
  roleLabel: string
  resultLabel: string
  linkLabel: string
}

export default function ProjectCard({ title, tags, role, result, images, link, roleLabel, resultLabel, linkLabel }: ProjectCardProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrent((i) => (i + 1) % images.length)

  return (
    <div className="project-card">
      <div className="project-card__img-wrap">
        <Image className="project-card__img" src={images[current]} alt={`${title} — ${current + 1}`} fill sizes="(max-width: 900px) 100vw, 33vw" />
        {images.length > 1 && (
          <>
            <button className="project-card__nav project-card__nav--prev" onClick={prev} aria-label="Image précédente">‹</button>
            <button className="project-card__nav project-card__nav--next" onClick={next} aria-label="Image suivante">›</button>
            <div className="project-card__dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`project-card__dot${i === current ? ' project-card__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Image ${i + 1}`}
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
