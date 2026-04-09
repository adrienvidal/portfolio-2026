import { Link } from 'react-router-dom'
import { articles } from '../../data/articles'
import './Blog.scss'

export default function Blog() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <main className="blog">
        <div className="blog__inner">
          <Link to="/" className="blog__back">← Retour</Link>
          <h1 className="blog__title">Blog</h1>
          <ul className="blog__list">
            {sorted.map((article) => (
              <li key={article.slug} className="blog__item">
                <Link to={`/blog/${article.slug}`} className="blog__link">
                  <time className="blog__date">{article.date}</time>
                  <h2 className="blog__item-title">{article.title}</h2>
                  <p className="blog__description">{article.description}</p>
                  {article.tags && (
                    <ul className="blog__tags">
                      {article.tags.map((tag) => (
                        <li key={tag} className="blog__tag">{tag}</li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
