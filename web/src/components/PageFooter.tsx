import type { FooterContent } from '../types/cms'

type PageFooterProps = {
  footer: FooterContent | undefined
}

export function PageFooter({ footer }: PageFooterProps) {
  if (!footer) {
    return null
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p className="font-medium text-slate-900">{footer.title}</p>
        {footer.text ? <p className="mt-2">{footer.text}</p> : null}
      </div>
    </footer>
  )
}

