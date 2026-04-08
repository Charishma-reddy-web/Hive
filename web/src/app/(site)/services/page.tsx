import type { Metadata } from 'next'
import { Services } from '@/components/sections/services'
import { buildMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description: 'The Nurture Hive’s Hub - Explore our Development, Branding, Digital Marketing and Content Creation services.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-4">
      <Services variant="page" />
    </div>
  )
}
