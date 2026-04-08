import { reservation } from '../../data/content'

const { title, slots: SLOTS } = reservation.timeSlots

interface TimeSlotsProps {
  selected: string | null
  onSelect: (slot: string) => void
}

export default function TimeSlots({ selected, onSelect }: TimeSlotsProps) {
  return (
    <div className="time-slots">
      <div className="time-slots__title">{title}</div>
      <div className="time-slots__grid">
        {SLOTS.map((slot) => (
          <button
            key={slot}
            className={`time-slots__slot${selected === slot ? ' time-slots__slot--selected' : ''}`}
            onClick={() => onSelect(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  )
}
