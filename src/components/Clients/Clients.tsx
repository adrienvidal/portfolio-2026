import { clients } from '../../data/content'
import './Clients.scss'

export default function Clients() {
  return (
    <section className="clients">
      <p className="clients__label">{clients.label}</p>
      <ul className="clients__list">
        {clients.logos.map((client) => (
          <li key={client.name} className="clients__item">
            {client.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
