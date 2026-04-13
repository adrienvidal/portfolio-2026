import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { clientLogos } from '@/data/static'
import './Clients.scss'

export default async function Clients() {
  const t = await getTranslations('clients')

  return (
    <section className="clients">
      <p className="clients__label">{t('label')}</p>
      <ul className="clients__list">
        {clientLogos.map((client) => (
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
