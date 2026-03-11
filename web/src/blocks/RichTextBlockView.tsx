import { getParagraphsFromRichText } from '../utils/richText'
import type { RichTextBlock } from '../types/cms'

type RichTextBlockViewProps = {
  block: RichTextBlock
}

export function RichTextBlockView({ block }: RichTextBlockViewProps) {
  const paragraphs = getParagraphsFromRichText(block.content)

  if (paragraphs.length === 0) {
    return null
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="space-y-4 text-base leading-7 text-slate-700">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

