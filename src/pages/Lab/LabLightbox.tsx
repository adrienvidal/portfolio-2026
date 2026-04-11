import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './LabLightbox.scss'

export interface MediaItem {
  type: 'image' | 'video'
  src: string
}

interface Props {
  media: MediaItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function LabLightbox({ media, index, onClose, onPrev, onNext }: Props) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const current = media[index]

  return createPortal(
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Fermer">✕</button>

      {media.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Précédent"
        >
          ←
        </button>
      )}

      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        {current.type === 'video' ? (
          <video
            key={current.src}
            src={current.src}
            className="lightbox__img"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={`Visuel ${index + 1}`}
            className="lightbox__img"
          />
        )}
      </div>

      {media.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Suivant"
        >
          →
        </button>
      )}

      {media.length > 1 && (
        <div className="lightbox__dots">
          {media.map((_, i) => (
            <button
              key={i}
              className={`lightbox__dot${i === index ? ' lightbox__dot--active' : ''}`}
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              aria-label={`Visuel ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  )
}
