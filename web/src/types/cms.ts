export type MediaImage = {
  alt?: string
  url?: string
}

export type RichTextNode = {
  children?: RichTextNode[]
  text?: string
}

export type RichTextValue = {
  root?: {
    children?: RichTextNode[]
  }
}

export type HeroBlock = {
  blockType: 'hero'
  description?: string
  eyebrow?: string
  image?: MediaImage | null
  primaryButtonLabel?: string
  primaryButtonUrl?: string
  title: string
}

export type FeatureGridItem = {
  description?: string
  title: string
}

export type FeatureGridBlock = {
  blockType: 'featureGrid'
  items: FeatureGridItem[]
  title?: string
}

export type CallToActionBlock = {
  blockType: 'cta'
  buttonLabel?: string
  buttonUrl?: string
  description?: string
  title: string
}

export type RichTextBlock = {
  blockType: 'richText'
  content?: RichTextValue
}

export type PageBlock = HeroBlock | FeatureGridBlock | CallToActionBlock | RichTextBlock

export type HeaderLink = {
  label: string
  url: string
}

export type HeaderContent = {
  brandName: string
  buttonLabel?: string
  buttonUrl?: string
  navigationLinks?: HeaderLink[]
}

export type FooterContent = {
  text?: string
  title: string
}

export type PageSeoFields = {
  description?: string
  image?: MediaImage | null
  title?: string
}

export type LandingPageData = {
  footer?: FooterContent
  header?: HeaderContent
  id: number | string
  layout?: PageBlock[]
  seo?: PageSeoFields
  slug: string
  title: string
}

export type PageListResponse = {
  docs: LandingPageData[]
}
