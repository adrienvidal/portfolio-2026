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
        <label className="resa-form__label" htmlFor="f-nom">Votre nom</label>
        <input className="resa-form__input" type="text" id="f-nom" placeholder="Prénom Nom" autoComplete="name" value={data.nom} onChange={set('nom')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-email">Votre email</label>
        <input className="resa-form__input" type="email" id="f-email" placeholder="vous@entreprise.com" autoComplete="email" value={data.email} onChange={set('email')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-co">
          Votre entreprise <span className="resa-form__label--optional">(optionnel)</span>
        </label>
        <input className="resa-form__input" type="text" id="f-co" placeholder="Nom de votre entreprise" autoComplete="organization" value={data.entreprise} onChange={set('entreprise')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label" htmlFor="f-besoin">En deux lignes, de quoi avez-vous besoin ?</label>
        <textarea className="resa-form__input resa-form__input--textarea" id="f-besoin" placeholder="Ex : refonte de notre landing page…" value={data.besoin} onChange={set('besoin')} />
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label">Budget</label>
        <div className="resa-form__radio-row">
          {['< 1 000 €', '1 000 – 3 000 €', '3 000 – 6 000 €', '> 6 000 €'].map((val) => (
            <label key={val} className="resa-form__radio-opt">
              <input type="radio" name="budget" value={val} checked={data.budget === val} onChange={() => onChange({ ...data, budget: val })} />
              <span className="resa-form__radio-box">{val}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="resa-form__group">
        <label className="resa-form__label">Délai souhaité</label>
        <div className="resa-form__radio-row">
          {['Immédiat', '2 à 4 semaines', '> 1 mois'].map((val) => (
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
