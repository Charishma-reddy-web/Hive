import { useEffect, useState } from 'react'

type UseDataResult<T> = {
  data: T | null
  errorMessage: string
  isLoading: boolean
}

export function useData<T>(loadData: () => Promise<T>, dependencies: unknown[]): UseDataResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isCurrentRequest = true

    async function runRequest() {
      setIsLoading(true)
      setErrorMessage('')

      try {
        const result = await loadData()

        if (!isCurrentRequest) {
          return
        }

        setData(result)
      } catch (error) {
        if (!isCurrentRequest) {
          return
        }

        setErrorMessage(error instanceof Error ? error.message : 'Failed to load data')
      } finally {
        if (!isCurrentRequest) {
          return
        }

        setIsLoading(false)
      }
    }

    runRequest()

    return () => {
      isCurrentRequest = false
    }
  }, dependencies)

  return {
    data,
    errorMessage,
    isLoading,
  }
}

