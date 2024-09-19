import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/layouts/header/Header'
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
      <head />
      <body className={clsx('flex flex-col h-screen', 'antialiased')}>
        <header className='w-full fixed top-0 z-10'>
          <Header />
        </header>
        <main className='flex-grow'>{children}</main>
      </body>
    </html>
  )
}
