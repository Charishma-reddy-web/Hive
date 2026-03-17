import type { CmsPage } from '@/types/cms'

export function mapPageTitle(page: CmsPage | null | undefined) {
  return page?.title || 'Untitled Page'
}
