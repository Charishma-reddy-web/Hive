import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/layout/site-header'
import SiteFooter from '@/components/layout/site-footer'
import { SiteHeader } from "@/components/layout/site-header"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="shell">
      <SiteHeader />
      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  )
}