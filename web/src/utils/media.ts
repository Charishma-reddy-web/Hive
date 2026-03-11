import type { MediaImage } from '../types/cms'

const cmsBaseUrl = import.meta.env.VITE_CMS_URL || 'http://localhost:3001'

export function getMediaUrl(image: MediaImage | null | undefined) {
  if (!image?.url) {
    return ''
  }

  if (image.url.startsWith('http')) {
    return image.url
  }

  return `${cmsBaseUrl}${image.url}`
}

