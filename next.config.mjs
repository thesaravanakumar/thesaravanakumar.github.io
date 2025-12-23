/** @type {import('next').NextConfig} */

import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    serverActions: {},
  },
  images: {
    unoptimized: true,
  }
}

const rehypePrettyCode = require('rehype-pretty-code').default || require('rehype-pretty-code')

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className = (node.properties.className || []).concat('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = (node.properties.className || []).concat('word--highlighted')
          },
        },
      ],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
