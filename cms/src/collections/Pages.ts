import type { CollectionConfig } from 'payload'
import { CallToActionBlock } from '../blocks/CallToAction'
import { FeatureGridBlock } from '../blocks/FeatureGrid'
import { HeroBlock } from '../blocks/Hero'
import { RichTextBlock } from '../blocks/RichText'
import { seoFields } from '../fields/seo'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'header',
      type: 'group',
      fields: [
        {
          name: 'brandName',
          type: 'text',
          required: true,
        },
        {
          name: 'navigationLinks',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
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
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock, FeatureGridBlock, CallToActionBlock, RichTextBlock],
    },
    ...seoFields,
  ],
}
