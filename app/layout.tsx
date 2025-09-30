import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
// header inlined from ./header
 

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
    default: 'kanishk',
    template: '%s | kanishk',
  },
  description:'kanishk',
  openGraph: {
    title: 'kanishk',
    description:'hey, im kanishk. i love building & am a math major @ nyu courant.',
    url: 'https://kanishkkundu.com/',
    siteName: 'Kanishk Kundu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanishk Kundu',
    description:
      'i am kanishk. i am a a 20 yo builder & math major @ nyu courant.',
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
        <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
          <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-[11.1375rem]">
            <div className="transform -translate-y-[20vh] space-y-6 md:space-y-10">
              <header className="mt-[5.535rem] mb-8">
                <strong className="block text-2xl font-semibold">hi, im kanishk</strong>
              </header>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
