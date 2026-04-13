'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface OtherMissionItemProps {
  name: string
  description: string
  tags: string[]
  link: string
  site: string
}

export default function OtherMissionItem({ name, description, tags, link, site }: OtherMissionItemProps) {
  const t = useTranslations('otherMissions')
  const [expanded, setExpanded] = useState(false)

  return (
    <li className="other-missions__item">
      <span className="other-missions__name">{name}</span>
      <span className={`other-missions__desc${expanded ? ' other-missions__desc--expanded' : ''}`}>
        {description}
      </span>
      <button
        className="other-missions__toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? t('seeLess') : t('seeMore')}
      </button>
      <div className="other-missions__tags">
        {tags.map((tag) => (
          <span key={tag} className="other-missions__tag">{tag}</span>
        ))}
      </div>
      <a className="other-missions__link" href={link} target="_blank" rel="noopener noreferrer">
        {site}
      </a>
    </li>
  )
}
