export const cmsEndpoints = {
  pageBySlug(slug: string) {
    const searchParams = new URLSearchParams({
      depth: '2',
      limit: '1',
      'where[slug][equals]': slug,
    })

    return `/api/pages?${searchParams.toString()}`
  },
}

