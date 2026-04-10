import { Link } from 'react-router-dom'
import { lab } from '../../data/content'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './Lab.scss'

export default function Lab() {
  return (
    <>
      <Nav page dark />
      <div className="lab">
        <div className="lab__inner">
          <Link to="/" className="lab__back">{lab.backLabel}</Link>
          <header className="lab__header">
            <h1 className="lab__title">{lab.title}</h1>
            <p className="lab__sub">{lab.sub}</p>
          </header>
          <ul className="lab__list">
            {lab.items.map((item) => (
              <li key={item.title} className="lab__item">
                <div className="lab__item-top">
                  <div className="lab__item-meta">
                    <span className={`lab__status lab__status--${item.status}`}>
                      {lab.statusLabels[item.status]}
                    </span>
                    <div className="lab__tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="lab__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {item.link && (
                    <a className="lab__link" href={item.link} target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </a>
                  )}
                </div>
                <h2 className="lab__item-title">{item.title}</h2>
                <p className="lab__item-desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}
