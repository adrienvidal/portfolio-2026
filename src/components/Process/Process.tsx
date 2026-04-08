import { process } from '../../data/content'
import ProcessStep from './ProcessStep'
import './Process.scss'

export default function Process() {
  return (
    <div className="section" id="processus">
      <h2 className="section-title">{process.title}</h2>
      <p className="section-sub">{process.sub}</p>
      <div className="process-grid">
        {process.steps.map((s) => <ProcessStep key={s.label} {...s} />)}
      </div>
    </div>
  )
}
