import type { CallToActionBlock } from '../types/cms'

type CallToActionBlockViewProps = {
  block: CallToActionBlock
}

export function CallToActionBlockView({ block }: CallToActionBlockViewProps) {
  return (
    <section className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{block.title}</h2>
      {block.description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">{block.description}</p> : null}
      {block.buttonLabel && block.buttonUrl ? (
        <a
          className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          href={block.buttonUrl}
        >
          {block.buttonLabel}
        </a>
      ) : null}
    </section>
  )
}

