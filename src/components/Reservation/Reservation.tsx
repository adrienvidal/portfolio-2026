'use client'

import { useState } from 'react'
import { reservation } from '../../data/content'
import ContactForm, { type FormData } from './ContactForm'
import './Reservation.scss'

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({ nom: '', email: '', entreprise: '', besoin: '', budget: '', delai: '' })

  async function handleSubmit() {
    if (!formData.nom || !formData.email || !formData.besoin) {
      setError('Merci de remplir votre nom, email et description du besoin.')
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

        <ContactForm data={formData} onChange={setFormData} />

        {error && <p style={{ color: 'red', marginTop: 12, fontSize: 14 }}>{error}</p>}

        <div className="form-actions form-actions--end" style={{ marginTop: 32 }}>
          <button className="btn-next btn-next--auto" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Envoi…' : reservation.submit}
          </button>
        </div>
      </div>
    </div>
  )
}
