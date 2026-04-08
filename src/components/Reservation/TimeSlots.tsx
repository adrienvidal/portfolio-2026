const SLOTS = ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00']

interface TimeSlotsProps {
  selected: string | null
  onSelect: (slot: string) => void
}

export default function TimeSlots({ selected, onSelect }: TimeSlotsProps) {
  return (
    <div className="time-slots">
      <div className="time-slots__title">Choisissez un horaire</div>
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
