import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  }

  try {
    const response = await fetch(
      'https://8ybzo5pnt3.execute-api.us-east-1.amazonaws.com/prod/form',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      }
    )

    if (!response.ok) throw new Error('API failed')

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}