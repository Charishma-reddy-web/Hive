import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'NurtureHive CMS',
  description: 'Minimal Payload CMS starter for NurtureHive.',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif', background: '#f8fafc', color: '#0f172a' }}>
        {children}
      </body>
    </html>
  )
}
