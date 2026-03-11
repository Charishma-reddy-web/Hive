import { getJson } from './client'
import { cmsEndpoints } from './endpoints'
import type { PageListResponse } from '../types/cms'

export async function getLandingPage(slug: string) {
  const response = await getJson<PageListResponse>(cmsEndpoints.pageBySlug(slug))
  return response.docs[0] || null
}

