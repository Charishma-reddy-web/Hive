import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'NurtureHive',
    template: '%s | NurtureHive',
  },
  description: 'Standardized Next.js frontend starter for content-driven marketing sites.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
