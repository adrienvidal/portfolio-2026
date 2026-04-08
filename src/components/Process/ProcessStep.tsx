interface ProcessStepProps {
  label: string
  title: string
  desc: string
  icon: React.ReactNode
}

export default function ProcessStep({ label, title, desc, icon }: ProcessStepProps) {
  return (
    <div className="process-step">
      <div className="process-step__icon-wrap">
        <svg className="process-step__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          {icon}
        </svg>
      </div>
      <div className="process-step__label">{label}</div>
      <div className="process-step__title">{title}</div>
      <p className="process-step__desc">{desc}</p>
    </div>
  )
}
