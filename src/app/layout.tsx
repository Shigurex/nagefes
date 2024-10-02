import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Footer } from '@/components/layouts/footer/page'
import { Header } from '@/components/layouts/header/page'
import { basePageFont } from '@/lib/fonts'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'なげるフェスティバル',
  description: 'なげるでつながるなげフェス',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:title' content='なげるフェスティバル' />
        <meta property='og:description' content='なげるでつながるなげフェス' />
        <meta property='og:image' content='/top.jpg' />
        <meta property='og:url' content='https://nagerufes.com/' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='なげるフェスティバル' />
        <meta name='twitter:description' content='なげるでつながるなげフェス' />
        <meta name='twitter:image' content='/top.jpg' />
      </head>
      <body
        className={clsx(
          'flex flex-col',
          'antialiased',
          'bg-slate-200',
          basePageFont.className,
        )}
      >
        <header className='w-full fixed top-0 z-10'>
          <Header />
        </header>
        <main className='flex-grow'>{children}</main>
        <footer className='w-full'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
