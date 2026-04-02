import type { Metadata } from 'next'
import { HomeHero } from '@/components/sections/home-hero'
import { AboutUs } from '@/components/sections/about-us'
import { Services } from '@/components/sections/services'
import { buildMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: 'Marketing Makeover? We\'re the Digital Da Vincis!',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutUs />
      <Services />
    </>
  )
}
