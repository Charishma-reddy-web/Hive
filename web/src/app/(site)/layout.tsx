import type { ReactNode } from 'react'
import SiteFooter from '@/components/layout/site-footer'


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="shell">
      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  )
}
