import type { FeatureGridBlock } from '../types/cms'

type FeatureGridBlockViewProps = {
  block: FeatureGridBlock
}

export function FeatureGridBlockView({ block }: FeatureGridBlockViewProps) {
  const featureItems = block.items || []

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      {block.title ? <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{block.title}</h2> : null}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureItems.map((item, itemIndex) => (
          <article key={itemIndex} className="rounded-2xl bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            {item.description ? <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
