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
  const [currentYear, setCurrentYear] = useState(2026)
  const [currentMonth, setCurrentMonth] = useState(3)
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
          <div className="form-actions">
            <button className="btn-back" onClick={() => setStep(2)}>{reservation.nav.back}</button>
            <button className="btn-next" onClick={() => setSubmitted(true)}>{reservation.nav.submit}</button>
          </div>
        </div>
      )}
    </div>
  )
}
