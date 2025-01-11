import '@/styles/globals.css'

import { META_THEME_COLORS, siteConfig } from '@/config/site'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'ricky',
      url: 'https://ricky.platform.com',
    },
  ],
  creator: 'ricky',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '',
  },
  icons: {
    icon: '/',
    shortcut: '/',
    apple: '/',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-svh bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
