import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Rubens Junio',
    default: 'Rubens Junio',
  }
}

const RootLayout = async ({ children }: {children: ReactNode}) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${roboto.variable} bg-gray-800 text-gray-100`}>
      {children}
      </body>
    </html>
  )
}

export default RootLayout
