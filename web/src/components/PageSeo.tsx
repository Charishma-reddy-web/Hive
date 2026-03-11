import { useEffect } from 'react'
import { getMediaUrl } from '../utils/media'
import type { LandingPageData } from '../types/cms'

type PageSeoProps = {
  page: LandingPageData | null
}

export function PageSeo({ page }: PageSeoProps) {
  useEffect(() => {
    const pageTitle = page?.seo?.title || page?.title || 'NurtureHive'
    const pageDescription = page?.seo?.description || ''
    const seoImage = getMediaUrl(page?.seo?.image)

    document.title = pageTitle
    updateMetaTag('name', 'description', pageDescription)
    updateMetaTag('property', 'og:title', pageTitle)
    updateMetaTag('property', 'og:description', pageDescription)
    updateMetaTag('property', 'og:image', seoImage)
  }, [page])

  return null
}

function updateMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let metaTag = document.head.querySelector<HTMLMetaElement>(`meta[${attributeName}="${attributeValue}"]`)

  if (!content) {
    metaTag?.remove()
    return
  }

  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(attributeName, attributeValue)
    document.head.appendChild(metaTag)
  }

  metaTag.setAttribute('content', content)
}
