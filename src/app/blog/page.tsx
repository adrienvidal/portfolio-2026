import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/data/articles'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import './blog.scss'

export const metadata: Metadata = {
  title: 'Blog — Adrien Vidal',
  description: 'Articles sur la conversion, l\'UX et le développement front-end.',
}

export default function Blog() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <Nav page />
      <main className="blog">
        <div className="blog__inner">
          <Link href="/" className="blog__back">← Retour</Link>
          <h1 className="blog__title">Blog</h1>
          <ul className="blog__list">
            {sorted.map((article) => (
              <li key={article.slug} className="blog__item">
                <Link href={`/blog/${article.slug}`} className="blog__link">
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
      <Footer />
    </>
  )
}
