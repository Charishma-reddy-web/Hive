import type { Metadata } from 'next'
import { HomeHero } from '@/components/sections/home-hero'
import { buildMetadata } from '@/lib/seo/metadata'
import { ContactUs } from '@/components/sections/ContactUs'
export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: 'Clean Next.js starter for public-facing sites with a server-first architecture.',
  path: '/',
})
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ContactUs />
    </>
  )
}