import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/main.scss'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Adrien Vidal — Développeur Web Freelance',
  description: 'Adrien conçoit des landing pages React / Next premium orientées conversion avec IA, UX et exécution rapide. Parlons de votre projet.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
