const cmsBaseUrl = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL

export async function cmsFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (!cmsBaseUrl) {
    throw new Error('CMS_URL is not configured.')
  }

  const response = await fetch(`${cmsBaseUrl}${path}`, {
    ...init,
    next: init?.next ?? { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  })

  if (!response.ok) {
    throw new Error(`CMS request failed with status ${response.status}.`)
  }

  return response.json() as Promise<T>
}
