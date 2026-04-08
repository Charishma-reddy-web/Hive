'use server'
interface ContactFormData {
  name: string
  email: string
  message: string
}

export const submitContactForm = async (data: ContactFormData) => {
  const response = await fetch(
    'https://8ybzo5pnt3.execute-api.us-east-1.amazonaws.com/prod/form',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  )

  if (!response.ok) throw new Error('Failed to send message')

  return response.json()
}