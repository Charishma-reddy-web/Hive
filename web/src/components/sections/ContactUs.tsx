'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/TextArea'
import contactData from '@/data/contactData.json'
import { submitContactForm } from '@/services/contactService'

export function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')


  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const textFields = contactData.fields.filter(f => f.type !== 'textarea')
  const messageField = contactData.fields.find(f => f.type === 'textarea')!

  const hexagons = []
  const rows = 12
  for (let row = 0; row < rows; row++) {
    const t = row / (rows - 1)
    const scale = 1.3 - t * 0.6
    const cellW = 38 * scale
    const cellH = 22 * scale
    const cols = 25
    for (let col = 0; col < cols; col++) {
      const x = col * cellW + (row % 2 === 0 ? 0 : cellW / 2) - 50
      const waveOffset = Math.sin(col * 0.4 + row * 0.2) * 15 * (1 - t)
      const y = 240 - row * 16 + waveOffset
      const hw = cellW / 2
      hexagons.push(`${x + hw},${y} ${x + cellW},${y + cellH * 0.3} ${x + cellW},${y + cellH * 0.7} ${x + hw},${y + cellH} ${x},${y + cellH * 0.7} ${x},${y + cellH * 0.3}`)
    }
  }

  const generateStarburst = (cx: number, cy: number, count: number, startAngle: number, endAngle: number, radius: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = startAngle + (i * (endAngle - startAngle) / (count - 1))
      const rad = (angle * Math.PI) / 180
      return { x1: cx, y1: cy, x2: cx + Math.cos(rad) * radius, y2: cy + Math.sin(rad) * radius }
    })
  }

  const topLines = generateStarburst(250, 0, 24, 90, 180, 140)
  const bottomLines = generateStarburst(0, 250, 24, 270, 360, 140)

  return (
    <section id="contact" className="w-full px-4 md:px-8 py-4 md:py-6 -mt-8 md:-mt-12">
      <div className="relative rounded-[20px] bg-[#f5f6f8] px-6 py-6 md:px-12 md:py-10 lg:px-[80px] lg:py-12 overflow-hidden w-full max-w-[1100px] mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] font-sans">

        {mounted && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '250px', height: '250px' }}>
              <svg viewBox="0 0 250 250" width="100%" height="100%">
                {topLines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#a0a0a0" strokeWidth="0.8" />)}
                <polygon points="120,95 145,80 170,95 170,125 145,140 120,125" fill="#14F195" />
                <polygon points="160,70 175,61 190,70 190,88 175,97 160,88" fill="#111" />
              </svg>
            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '250px' }}>
              <svg viewBox="0 0 800 250" width="100%" height="100%" preserveAspectRatio="xMidYMax slice">
                <defs>
                  <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
                  </linearGradient>
                </defs>
                <g stroke="url(#gridFade)" strokeWidth="0.8">
                  {hexagons.map((pts, i) => <polygon key={i} points={pts} fill="none" />)}
                </g>
                {bottomLines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#a0a0a0" strokeWidth="0.8" />)}
                <polygon points="35,175 50,166 65,175 65,193 50,202 35,193" fill="#111" />
                <polygon points="55,145 80,130 105,145 105,175 80,190 55,175" fill="#14F195" />
              </svg>
            </div>
          </div>
        )}


        <div className="relative z-10">
          <h2 className="text-3xl md:text-[40px] font-['Helvetica','Arial',sans-serif] font-normal text-[#222222] mb-6 md:mb-[35px] mt-0 text-center md:text-left">
            {contactData.heading || 'Contact Us'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[40px]">
            <div className="flex flex-col gap-6 md:gap-[32px]">
              {textFields.map(field => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-gray-500 ml-1 uppercase tracking-wide">{field.placeholder}</label>
                  <Input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 h-full">
              <label className="text-[14px] font-medium text-gray-500 ml-1 uppercase tracking-wide">{messageField.placeholder}</label>
              <TextArea
                name={messageField.name}
                placeholder={messageField.placeholder}
                value={form.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-[40px]">
            <Button
              label={status === 'loading' ? 'Sending...' : contactData.buttonText || 'Send Message'}
              onClick={handleSubmit}
              disabled={status === 'loading'}
            />
          </div>

          {status === 'success' && <p className="text-center text-[#14F195] mt-[15px]">Message sent!</p>}
        </div>
      </div>
    </section>
  )
}