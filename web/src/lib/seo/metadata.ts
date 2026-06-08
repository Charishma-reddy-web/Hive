import type { Metadata } from 'next'

type BuildMetadataArgs = {
  title: string
  description: string
  path: string
}

export function buildMetadata({ title, description, path }: BuildMetadataArgs): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const url = new URL(path, siteUrl)

  return {
    title,
    description,
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
