import Image from 'next/image'
import { clients } from '../../data/content'
import './Clients.scss'

export default function Clients() {
  return (
    <section className="clients">
      <p className="clients__label">{clients.label}</p>
      <ul className="clients__list">
        {clients.logos.map((client) => (
          <li key={client.name} className="clients__item">
            {client.src ? (
              <Image src={client.src} alt={client.name} className="clients__logo" width={160} height={50} />
            ) : (
              client.name
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
