'use client'

import { useState } from 'react'
import { reservation } from '../../data/content'
import ContactForm, { type FormData } from './ContactForm'
import './Reservation.scss'

const STEPS = 3

export default function Reservation() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({ nom: '', email: '', entreprise: '', besoin: '', budget: '', delai: '' })

  function handleNext() {
    if (step === 1 && !formData.besoin) {
      setError('Merci de décrire votre besoin.')
      return
    }
    setError(null)
    setStep((s) => (s + 1) as 1 | 2 | 3)
  }

  function handleBack() {
    setError(null)
    setStep((s) => (s - 1) as 1 | 2 | 3)
  }

  async function handleSubmit() {
    if (!formData.nom || !formData.email) {
      setError('Merci de remplir votre nom et votre email.')
      return
    }
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError("Une erreur s'est produite. Réessayez ou contactez-moi directement.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="resa" id="reservation">
        <div className="resa__inner">
          <div className="resa-success">
            <div className="resa-success__check">{reservation.success.check}</div>
            <div className="resa-success__title">{reservation.success.title}</div>
            <p className="resa-success__sub">{reservation.success.sub}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="resa" id="reservation">
      <div className="resa__inner">
        <h2 className="resa__title">{reservation.title}</h2>
        <p className="resa__sub">{reservation.sub}</p>

        <div className="resa-steps">
          {Array.from({ length: STEPS }, (_, i) => {
            const n = i + 1
            const isDone = n < step
            const isActive = n === step
            return (
              <div key={n} className="resa-steps__item">
                {i > 0 && <div className={`resa-steps__line${isDone || isActive ? ' resa-steps__line--filled' : ''}`} />}
                <div className={`resa-steps__dot${isActive ? ' resa-steps__dot--active' : isDone ? ' resa-steps__dot--done' : ''}`}>
                  {n}
                </div>
              </div>
            )
          })}
        </div>

        <ContactForm data={formData} onChange={setFormData} step={step} />

        {error && <p className="resa__error">{error}</p>}

        <div className={`form-actions${step > 1 ? ' form-actions--spread' : ' form-actions--end'}`} style={{ marginTop: 32 }}>
          {step > 1 && (
            <button className="btn-back" onClick={handleBack}>← Retour</button>
          )}
          {step < STEPS ? (
            <button className="btn-next btn-next--auto" onClick={handleNext}>Continuer →</button>
          ) : (
            <button className="btn-next btn-next--auto" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Envoi…' : reservation.submit}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
