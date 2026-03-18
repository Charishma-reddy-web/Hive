import Link from 'next/link'
import { Container } from '@/components/ui/container'

export function SiteHeader() {
  return (
    <div className="w-full flex flex-col items-center mt-6">

      <header className="w-[85%] bg-black text-white rounded-2xl px-6 py-7 shadow-lg">
        <Container className="flex justify-between items-center">

          <Link href="/" className="text-2xl font-bold">
            Nurture <span className="text-green-400">Hive</span>
          </Link>

          <div className="flex items-center gap-4">

            <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold">
              Let’s Talk
            </button>

            <div className="flex flex-col gap-1 items-start">
              <span className="w-6 h-1 bg-green-400 rounded"></span>
              <span className="w-6 h-1 bg-green-400 rounded"></span>
              <span className="w-4 h-1 bg-green-400 rounded"></span>
            </div>

          </div>
        </Container>
      </header>

    </div>
  )
}