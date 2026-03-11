import type { PageBlock } from '../types/cms'
import { CallToActionBlockView } from './CallToActionBlockView'
import { FeatureGridBlockView } from './FeatureGridBlockView'
import { HeroBlockView } from './HeroBlockView'
import { RichTextBlockView } from './RichTextBlockView'

type BlockRendererProps = {
  blocks: PageBlock[]
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, blockIndex) => {
        const blockKey = `${block.blockType}-${blockIndex}`

        switch (block.blockType) {
          case 'hero':
            return <HeroBlockView key={blockKey} block={block} />
          case 'featureGrid':
            return <FeatureGridBlockView key={blockKey} block={block} />
          case 'cta':
            return <CallToActionBlockView key={blockKey} block={block} />
          case 'richText':
            return <RichTextBlockView key={blockKey} block={block} />
          default:
            return null
        }
      })}
    </div>
  )
}

