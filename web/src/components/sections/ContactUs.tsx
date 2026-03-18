'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import contactData from '@/data/contactData.json'

const bottomLines = Array.from({ length: 28 }).map((_, i) => {
  const rad = (i * 180 / 27 * Math.PI) / 180
  return {
    x2: Math.round(Math.cos(rad) * 120 * 100) / 100,
    y2: Math.round((160 - Math.sin(rad) * 120) * 100) / 100,
  }
})

const starLines = Array.from({ length: 20 }).map((_, i) => {
  const rad = (i * 180 / 19 * Math.PI) / 180
  return {
    x2: Math.round((220 - Math.cos(rad) * 120) * 100) / 100,
    y2: Math.round((Math.sin(rad) * 120) * 100) / 100,
  }
})
export function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const textFields = contactData.fields.filter(f => f.type !== 'textarea')
  const messageField = contactData.fields.find(f => f.type === 'textarea')!

  return (
    <div style={{
      position: 'relative',
      borderRadius: '16px',
      backgroundColor: '#f0f1f3',
      overflow: 'hidden',
      maxWidth: '580px',
      margin: '40px auto',
    }}>

      {/* Top-right starburst */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '220px', height: '160px', overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
  <svg viewBox="0 0 220 160" fill="none" width="220" height="160">
    {starLines.map((l, i) => (
      <line key={i} x1="220" y1="0" x2={l.x2} y2={l.y2} stroke="#aaa" strokeWidth="0.8" />
    ))}
    <polygon points="100,90 124,77 148,90 148,116 124,129 100,116" fill="#2EE8A5" />
    <polygon points="140,94 158,85 176,94 176,112 158,121 140,112" fill="#1a1a1a" />
  </svg>
</div>

      {/* Bottom honeycomb + starburst */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        <svg viewBox="0 0 580 140" fill="none" width="100%" height="140" preserveAspectRatio="xMidYMax meet">
          {Array.from({ length: 8 }).map((_, row) => {
            const t = row / 7
            const cw = 40 - t * 18
            const ch = 23 - t * 10
            const cols = Math.ceil(600 / cw) + 2
            const y = 135 - row * (18 - t * 6)
            return Array.from({ length: cols }).map((_, col) => {
              const x = col * cw + (row % 2 === 0 ? 0 : cw / 2) - cw
              return (
                <polygon key={`${row}-${col}`}
                  points={`${x+cw/2},${y} ${x+cw},${y+ch*0.4} ${x+cw},${y+ch} ${x+cw/2},${y+ch*1.3} ${x},${y+ch} ${x},${y+ch*0.4}`}
                  fill="none" stroke="#d1d5db" strokeWidth="0.8" />
              )
            })
          })}
          {bottomLines.map((l, i) => (
            <line key={i} x1="0" y1="140" x2={l.x2} y2={l.y2 - 20} stroke="#bbb" strokeWidth="0.8" />
          ))}
          <polygon points="24,100 38,92 52,100 52,116 38,124 24,116" fill="#1a1a1a" />
          <polygon points="44,104 64,93 84,104 84,126 64,137 44,126" fill="#2EE8A5" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '32px 36px 160px 36px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 300, color: '#1a1a2e', marginBottom: '24px' }}>
          {contactData.heading}
        </h2>

        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            {textFields.map(field => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                style={{
                  width: '100%',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  fontSize: '14px',
                  color: '#6b7280',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            ))}
          </div>
          <textarea
            name={messageField.name}
            placeholder={messageField.placeholder}
            value={form.message}
            onChange={handleChange}
            style={{
              flex: 1,
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#6b7280',
              outline: 'none',
              resize: 'none',
              height: '110px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            label={status === 'loading' ? 'Sending...' : contactData.buttonText}
            onClick={handleSubmit}
            disabled={status === 'loading'}
          />
        </div>

        {status === 'success' && (
          <p style={{ textAlign: 'center', color: '#22c55e', fontSize: '14px', marginTop: '10px' }}>Message sent!</p>
        )}
        {status === 'error' && (
          <p style={{ textAlign: 'center', color: '#ef4444', fontSize: '14px', marginTop: '10px' }}>Something went wrong.</p>
        )}
      </div>
    </div>
  )
}