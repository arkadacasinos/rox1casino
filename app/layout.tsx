import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rox1casino.vercel.app'),
  title: 'Rox Casino — официальный сайт и рабочее зеркало',
  description: 'Rox Casino: официальный сайт, рабочее зеркало, вход и обзор игры онлайн. Как проверить адрес и играть ответственно.',
  keywords: ['rox casino', 'rox casino официальный сайт', 'рокс казино', 'рокс казино зеркало', 'рокс казино онлайн'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Rox Casino — официальный сайт и рабочее зеркало',
    description: 'Понятный гид по официальному входу, зеркалу и игре онлайн.',
    url: 'https://rox1casino.vercel.app/',
    siteName: 'Rox Casino Guide',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rox Casino — официальный сайт и рабочее зеркало',
    description: 'Гид по официальному входу Rox Casino и ответственному онлайн-доступу.',
  },
  icons: { icon: '/rox-favicon.png', shortcut: '/rox-favicon.png', apple: '/rox-favicon.png' },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#151817',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="theme-color" content="#151817" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/rox-favicon.png" type="image/png" />
        <link rel="canonical" href="https://rox1casino.vercel.app/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
