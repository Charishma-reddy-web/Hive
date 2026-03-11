import type { RichTextNode, RichTextValue } from '../types/cms'

function getTextFromNode(node: RichTextNode): string {
  if (typeof node.text === 'string') {
    return node.text
  }

  if (!node.children?.length) {
    return ''
  }

  return node.children.map(getTextFromNode).join('')
}

export function getParagraphsFromRichText(value: RichTextValue | undefined) {
  const nodes = value?.root?.children || []

  return nodes.map((node) => getTextFromNode(node).trim()).filter(Boolean)
}
