import { getLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'
import '@/styles/main.scss'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  return (
    <html lang={locale} className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
