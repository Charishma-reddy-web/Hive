import { Container } from '@/components/ui/container'

export function HomeHero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__card">
          <p className="eyebrow">NurtureHive</p>
          <h1 className="hero__title">Hello</h1>
          <p className="hero__copy">Welcome to NurtureHive.</p>
        </div>
      </Container>
    </section>
  )
}
