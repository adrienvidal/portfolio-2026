import { reservation } from '../../data/content'

const { form } = reservation

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
}

export default function ContactForm({ data, onChange }: ContactFormProps) {
  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange({ ...data, [key]: e.target.value })

  return (
    <div>
      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-nom">{form.nom.label}</label>
        <input className="resa-form__input" type="text" id="f-nom" placeholder={form.nom.placeholder} autoComplete="name" value={data.nom} onChange={set('nom')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-email">{form.email.label}</label>
        <input className="resa-form__input" type="email" id="f-email" placeholder={form.email.placeholder} autoComplete="email" value={data.email} onChange={set('email')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-co">
          {form.entreprise.label} <span className="resa-form__label--optional">{form.entreprise.optional}</span>
        </label>
        <input className="resa-form__input" type="text" id="f-co" placeholder={form.entreprise.placeholder} autoComplete="organization" value={data.entreprise} onChange={set('entreprise')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-besoin">{form.besoin.label}</label>
        <textarea className="resa-form__input resa-form__input--textarea" id="f-besoin" placeholder={form.besoin.placeholder} value={data.besoin} onChange={set('besoin')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label">{form.budget.label}</label>
        <div className="resa-form__radio-row">
          {form.budget.options.map((val) => (
            <label key={val} className="resa-form__radio-opt">
              <input type="radio" name="budget" value={val} checked={data.budget === val} onChange={() => onChange({ ...data, budget: val })} />
              <span className="resa-form__radio-box">{val}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label">{form.delai.label}</label>
        <div className="resa-form__radio-row">
          {form.delai.options.map((val) => (
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
