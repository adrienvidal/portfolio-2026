'use client'

import { useState } from 'react'
import { reservation } from '../../data/content'
import Calendar from './Calendar'
import TimeSlots from './TimeSlots'
import ContactForm, { type FormData } from './ContactForm'
import './Reservation.scss'

type Step = 1 | 2 | 3

export default function Reservation() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const today = new Date()
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<{ y: number; m: number; d: number } | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({ nom: '', email: '', entreprise: '', besoin: '', budget: '', delai: '' })

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1) }
    else setCurrentMonth(m => m - 1)
  }
  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1) }
    else setCurrentMonth(m => m + 1)
  }

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
        body: JSON.stringify({ ...formData, date: selectedDay, time: selectedTime }),
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
        <div className="resa-success">
          <div className="resa-success__check">{reservation.success.check}</div>
          <div className="resa-success__title">{reservation.success.title}</div>
          <p className="resa-success__sub">{reservation.success.sub}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="resa" id="reservation">
      <h2 className="resa__title">{reservation.title}</h2>
      <p className="resa__sub">{reservation.sub}</p>

      <div className="stepper">
        <div className="stepper__row">
          {reservation.stepLabels.map((label, i) => {
            const n = (i + 1) as Step
            const isActive = step === n
            return (
              <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <div className="stepper__connector" />}
                <div className={`stepper__dot${isActive ? ' stepper__dot--active' : ''}`}>{n}</div>
                <span className={`stepper__label${isActive ? ' stepper__label--active' : ''}`}>{label}</span>
              </div>
            )
          })}
        </div>
        <p className="stepper__mobile-label">
          Étape {step} / {reservation.stepLabels.length} — {reservation.stepLabels[step - 1]}
        </p>
      </div>

      {step === 1 && (
        <div>
          <Calendar
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
            currentMonth={currentMonth}
            currentYear={currentYear}
            onPrevMonth={prevMonth}
            onNextMonth={nextMonth}
          />
          <div className="form-actions form-actions--end" style={{ marginTop: 32 }}>
            <button className="btn-next btn-next--auto" onClick={() => setStep(2)}>{reservation.nav.next}</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <TimeSlots selected={selectedTime} onSelect={setSelectedTime} />
          <div className="form-actions" style={{ marginTop: 32 }}>
            <button className="btn-back" onClick={() => setStep(1)}>{reservation.nav.back}</button>
            <button className="btn-next" onClick={() => setStep(3)}>{reservation.nav.next}</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <ContactForm data={formData} onChange={setFormData} />
          {error && <p style={{ color: 'red', marginTop: 12, fontSize: 14 }}>{error}</p>}
          <div className="form-actions">
            <button className="btn-back" onClick={() => setStep(2)}>{reservation.nav.back}</button>
            <button className="btn-next" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Envoi…' : reservation.nav.submit}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
