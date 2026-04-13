import { getLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import '@/styles/main.scss'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adrienvidal.com'),
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  return (
    <html lang={locale} className={inter.className}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
