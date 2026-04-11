import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './LabLightbox.scss'

interface Props {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function LabLightbox({ images, index, onClose, onPrev, onNext }: Props) {
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

  return createPortal(
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Fermer">✕</button>

      {images.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Précédent"
        >
          ←
        </button>
      )}

      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        <img
          key={index}
          src={images[index]}
          alt={`Visuel ${index + 1}`}
          className="lightbox__img"
        />
      </div>

      {images.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Suivant"
        >
          →
        </button>
      )}

      {images.length > 1 && (
        <div className="lightbox__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`lightbox__dot${i === index ? ' lightbox__dot--active' : ''}`}
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  )
}
