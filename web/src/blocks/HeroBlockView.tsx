import { getMediaUrl } from '../utils/media'
import type { HeroBlock } from '../types/cms'

type HeroBlockViewProps = {
  block: HeroBlock
}

export function HeroBlockView({ block }: HeroBlockViewProps) {
  const imageUrl = getMediaUrl(block.image)

  return (
    <section className="overflow-hidden rounded-3xl bg-slate-950 text-white">
      <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          {block.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{block.eyebrow}</p>
          ) : null}
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{block.title}</h1>
          {block.description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{block.description}</p>
          ) : null}
          {block.primaryButtonLabel && block.primaryButtonUrl ? (
            <a
              className="mt-8 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              href={block.primaryButtonUrl}
            >
              {block.primaryButtonLabel}
            </a>
          ) : null}
        </div>
        {imageUrl ? (
          <img
            alt={block.image?.alt || block.title}
            className="h-full max-h-[420px] w-full rounded-2xl object-cover"
            src={imageUrl}
          />
        ) : null}
      </div>
    </section>
  )
}

