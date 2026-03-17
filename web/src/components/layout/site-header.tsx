import Link from 'next/link'
import { Container } from '@/components/ui/container'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__row">
        <Link className="site-brand" href="/">
          NurtureHive
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
        </nav>
      </Container>
    </header>
  )
}
