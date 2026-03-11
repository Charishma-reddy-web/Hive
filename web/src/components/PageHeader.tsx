import type { HeaderContent } from '../types/cms'

type PageHeaderProps = {
  header: HeaderContent | undefined
}

export function PageHeader({ header }: PageHeaderProps) {
  if (!header) {
    return null
  }

  const navigationLinks = header.navigationLinks || []

  return (
    <header className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a className="text-xl font-semibold tracking-tight text-slate-900" href="#top">
            {header.brandName}
          </a>
          {header.buttonLabel && header.buttonUrl ? (
            <a
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              href={header.buttonUrl}
            >
              {header.buttonLabel}
            </a>
          ) : null}
        </div>
        {navigationLinks.length ? (
          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            {navigationLinks.map((item, itemIndex) => (
              <a key={itemIndex} className="transition hover:text-slate-900" href={item.url}>
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}
