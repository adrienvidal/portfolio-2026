import { reservation } from '../../data/content'

const { months: MONTHS, weekdays: WEEKDAYS } = reservation.calendar

interface SelectedDay { y: number; m: number; d: number }

interface CalendarProps {
  selectedDay: SelectedDay | null
  onSelectDay: (day: SelectedDay) => void
  currentMonth: number
  currentYear: number
  onPrevMonth: () => void
  onNextMonth: () => void
}

const TODAY = new Date(2026, 3, 8)

export default function Calendar({ selectedDay, onSelectDay, currentMonth, currentYear, onPrevMonth, onNextMonth }: CalendarProps) {
  const firstDow = new Date(currentYear, currentMonth, 1).getDay()
  const startOffset = firstDow === 0 ? 6 : firstDow - 1
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const days: Array<{ day: number | null; disabled: boolean; selected: boolean }> = []

  for (let i = 0; i < startOffset; i++) {
    days.push({ day: null, disabled: false, selected: false })
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dt = new Date(currentYear, currentMonth, d)
    const isPast = dt < TODAY
    const isWeekend = dt.getDay() === 0 || dt.getDay() === 6
    const isSelected = !!(selectedDay && selectedDay.y === currentYear && selectedDay.m === currentMonth && selectedDay.d === d)
    days.push({ day: d, disabled: isPast || isWeekend, selected: isSelected })
  }

  return (
    <div>
      <div className="calendar__header">
        <button className="calendar__nav" onClick={onPrevMonth} aria-label="Mois précédent">&#8249;</button>
        <div className="calendar__month">{MONTHS[currentMonth]} {currentYear}</div>
        <button className="calendar__nav" onClick={onNextMonth} aria-label="Mois suivant">&#8250;</button>
      </div>
      <div className="calendar__grid">
        {WEEKDAYS.map((w) => (
          <div key={w} className="calendar__weekday">{w}</div>
        ))}
        {days.map((entry, i) => {
          if (entry.day === null) {
            return <div key={`empty-${i}`} className="calendar__day calendar__day--empty" />
          }
          let className = 'calendar__day'
          if (entry.disabled) className += ' calendar__day--disabled'
          if (entry.selected) className += ' calendar__day--selected'

          return (
            <div
              key={entry.day}
              className={className}
              onClick={() => !entry.disabled && onSelectDay({ y: currentYear, m: currentMonth, d: entry.day! })}
            >
              {entry.day}
            </div>
          )
        })}
      </div>
    </div>
  )
}
