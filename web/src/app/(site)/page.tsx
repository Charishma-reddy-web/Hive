import type { Metadata } from 'next'
import { HomeHero } from '@/components/sections/home-hero'
import PortfolioSection from '@/components/sections/PortfolioSection'
import { buildMetadata } from '@/lib/seo/metadata'
import { ContactUs } from '@/components/sections/ContactUs'
import Testimonialsection from '@/components/sections/Testimonialssection'
import BlogSection from '@/components/sections/Blogsection'

export const metadata: Metadata = buildMetadata({
  title: 'Home',
  description: 'Clean Next.js starter for public-facing sites with a server-first architecture.',
  path: '/',
})

export default function HomePage() {
  return (
    <>

      <PortfolioSection />
      <Testimonialsection />
      <BlogSection />
      <ContactUs />
    </>
  )
}