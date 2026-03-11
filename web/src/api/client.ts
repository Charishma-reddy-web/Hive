const cmsBaseUrl = import.meta.env.VITE_CMS_URL || 'http://localhost:3001'

export async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${cmsBaseUrl}${path}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}

