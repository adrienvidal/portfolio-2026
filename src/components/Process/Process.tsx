import { getTranslations } from 'next-intl/server'
import { processIcons } from '@/data/static'
import ProcessStep from './ProcessStep'
import './Process.scss'

type StepItem = { label: string; title: string; desc: string }

export default async function Process() {
  const t = await getTranslations('process')
  const steps = (t.raw('steps') as StepItem[]).map((step, i) => ({
    ...step,
    icon: processIcons[i]
  }))

  return (
    <div className="section" id="processus">
      <h2 className="section-title">{t('title')}</h2>
      <p className="section-sub">{t('sub')}</p>
      <div className="process-grid">
        {steps.map((s) => <ProcessStep key={s.label} {...s} />)}
      </div>
    </div>
  )
}
