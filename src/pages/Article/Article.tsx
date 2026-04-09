import { useParams, Link, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { articles } from '../../data/articles'
import './Article.scss'

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const meta = articles.find((a) => a.slug === slug)

  if (!meta) return <Navigate to="/blog" replace />

  const MDXContent = lazy(() => import(`../../articles/${slug}.mdx`))

  return (
    <>
      <main className="article">
        <div className="article__inner">
          <Link to="/blog" className="article__back">← Blog</Link>
          <time className="article__date">{meta.date}</time>
          <h1 className="article__title">{meta.title}</h1>
          {meta.tags && (
            <ul className="article__tags">
              {meta.tags.map((tag) => (
                <li key={tag} className="article__tag">{tag}</li>
              ))}
            </ul>
          )}
          <div className="article__body">
            <Suspense fallback={<p>Chargement…</p>}>
              <MDXContent />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}
