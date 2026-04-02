import type { Metadata } from 'next'
import { AboutUs } from '@/components/sections/about-us'
import { buildMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description: 'Your Marketing Misfits. We are obsessed with helping businesses grow like crazy.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 min-h-screen">
        <AboutUs />
      </div>
    </>
  )
}
