import { useEffect, useCallback, useRef } from 'react'
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
  const touchStartX = useRef<number | null>(null)

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      delta < 0 ? onNext() : onPrev()
    }
    touchStartX.current = null
  }

  const current = media[index]

  return createPortal(
    <div
      className="lightbox"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Fermer">✕</button>

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
        <div className="lightbox__bar" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox__bar-btn" onClick={onPrev} aria-label="Précédent">←</button>
          <span className="lightbox__bar-count">{index + 1} / {media.length}</span>
          <button className="lightbox__bar-btn" onClick={onNext} aria-label="Suivant">→</button>
        </div>
      )}
    </div>,
    document.body
  )
}
