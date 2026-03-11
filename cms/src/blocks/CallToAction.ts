import type { Block } from 'payload'

export const CallToActionBlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA',
    plural: 'CTA Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'buttonLabel',
      type: 'text',
    },
    {
      name: 'buttonUrl',
      type: 'text',
    },
  ],
}
