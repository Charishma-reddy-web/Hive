import type { Metadata } from 'next'
import { Space_Grotesk, Poppins } from 'next/font/google' // Import the fonts
import './globals.css'

// Configure Space Grotesk (Headers)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', // This creates a CSS variable
  display: 'swap',
})

// Configure Poppins (Body)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

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
    // Add font variables to the html tag
    <html lang="en" className={`${spaceGrotesk.variable} ${poppins.variable}`}>
      {/* Set Poppins as the default font for the body */}
      <body className={poppins.className}>{children}</body>
    </html>
  )
}