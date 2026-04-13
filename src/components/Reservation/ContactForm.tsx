import { useTranslations } from 'next-intl'

export interface FormData {
  nom: string
  email: string
  entreprise: string
  besoin: string
  budget: string
  delai: string
}

interface ContactFormProps {
  data: FormData
  onChange: (data: FormData) => void
  step: 1 | 2 | 3
}

export default function ContactForm({ data, onChange, step }: ContactFormProps) {
  const t = useTranslations('reservation.form')

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange({ ...data, [key]: e.target.value })

  const budgetOptions = t.raw('budgetOptions') as string[]
  const delaiOptions = t.raw('delaiOptions') as string[]

  if (step === 1) {
    return (
      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-besoin">{t('besoinLabel')}</label>
        <textarea className="resa-form__input resa-form__input--textarea" id="f-besoin" placeholder={t('besoinPlaceholder')} value={data.besoin} onChange={set('besoin')} />
      </div>
    )
  }

  if (step === 2) {
    return (
      <div>
        <div className="resa-form__group">
          <label className="resa-form__label">{t('budgetLabel')}</label>
          <div className="resa-form__radio-row">
            {budgetOptions.map((val) => (
              <label key={val} className="resa-form__radio-opt">
                <input type="radio" name="budget" value={val} checked={data.budget === val} onChange={() => onChange({ ...data, budget: val })} />
                <span className="resa-form__radio-box">{val}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="resa-form__group">
          <label className="resa-form__label">{t('delaiLabel')}</label>
          <div className="resa-form__radio-row">
            {delaiOptions.map((val) => (
              <label key={val} className="resa-form__radio-opt">
                <input type="radio" name="delai" value={val} checked={data.delai === val} onChange={() => onChange({ ...data, delai: val })} />
                <span className="resa-form__radio-box">{val}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-nom">{t('nomLabel')}</label>
        <input className="resa-form__input" type="text" id="f-nom" placeholder={t('nomPlaceholder')} autoComplete="name" value={data.nom} onChange={set('nom')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-email">{t('emailLabel')}</label>
        <input className="resa-form__input" type="email" id="f-email" placeholder={t('emailPlaceholder')} autoComplete="email" value={data.email} onChange={set('email')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-co">
          {t('entrepriseLabel')} <span className="resa-form__label--optional">{t('entrepriseOptional')}</span>
        </label>
        <input className="resa-form__input" type="text" id="f-co" placeholder={t('entreprisePlaceholder')} autoComplete="organization" value={data.entreprise} onChange={set('entreprise')} />
      </div>
    </div>
  )
}
