import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://kanishkkundu.com/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Kanishk Kundu',
    template: '%s | Kanishk Kundu',
  },
  description:
    'Personal site of Kanishk Kundu — showcasing work, projects, and experiments in automation.',
  openGraph: {
    title: 'Kanishk Kundu',
    description:
      'Personal site of Kanishk Kundu — showcasing work, projects, and experiments in automation.',
    url: 'https://kanishkkundu.com/',
    siteName: 'Kanishk Kundu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanishk Kundu',
    description:
      'Personal site of Kanishk Kundu — showcasing work, projects, and experiments in automation.',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
          forcedTheme="light"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-[11.1375rem]">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
