import { cmsFetch } from '@/lib/cms/client'
import type { CmsPage } from '@/types/cms'

type PageResponse = {
  docs: CmsPage[]
}

export async function getHomePage() {
  return cmsFetch<PageResponse>('/api/pages?where[slug][equals]=home&limit=1')
}
