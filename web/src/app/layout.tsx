import type { Metadata } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nurturehive.co'),
  title: {
    default: 'NurtureHive',
    template: '%s | NurtureHive',
  },
  description: 'Marketing Makeover? We\'re the Digital Da Vincis!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
    