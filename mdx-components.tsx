import type { MDXComponents } from 'mdx/types'

import { Video } from '@/components/shared/video'
import { Image } from '@/components/shared/image'

// Custom hook allowing to customize the built-in MDX components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  const getText = (node: any): string => {
    if (node == null) return ''
    if (typeof node === 'string' || typeof node === 'number') return String(node)
    if (Array.isArray(node)) return node.map(getText).join('')
    if (typeof node === 'object' && 'props' in node) return getText((node as any).props.children)
    return ''
  }

  const slugify = (node: any) => {
    const text = getText(node)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
    return text
  }

  return {
    h1: ({ children }) => {
      const id = slugify(children)
      return (
        <h1 id={id} className="mt-10 text-2xl font-bold text-white scroll-mt-20">{children}</h1>
      )
    },
    h2: ({ children }) => {
      const id = slugify(children)
      return (
        <h2 id={id} className="mt-10 text-2xl font-bold text-white scroll-mt-20">{children}</h2>
      )
    },
    h3: ({ children }) => {
      const id = slugify(children)
      return (
        <h3 id={id} className="mt-8 text-xl font-bold text-white scroll-mt-20">{children}</h3>
      )
    },
    h4: ({ children }) => {
      const id = slugify(children)
      return (
        <h4 id={id} className="mt-8 text-xl font-bold text-white scroll-mt-20">{children}</h4>
      )
    },
    h5: ({ children }) => {
      const id = slugify(children)
      return (
        <h5 id={id} className="mt-8 text-xl font-bold text-white scroll-mt-20">{children}</h5>
      )
    },
    h6: ({ children }) => {
      const id = slugify(children)
      return (
        <h6 id={id} className="mt-8 text-xl font-bold text-white scroll-mt-20">{children}</h6>
      )
    },
    p: ({ children }) => (
      <p className="mt-4 text-lg leading-normal text-gray-40">{children}</p>
    ),
    a: ({ href, children }) => {
      const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-30 underline decoration-green-400"
          >
            {children}
          </a>
        )
      }

      return (
        <a href={href} className="text-gray-30 underline decoration-green-400">
          {children}
        </a>
      )
    },
    ul: ({ children }) => (
      <ul className="ml-8 mt-4 list-disc space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="ml-8 mt-4 list-decimal space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="pl-2 text-lg text-gray-40 marker:text-gray-100">
        {children}
      </li>
    ),
    pre: ({ children }) => (
      <pre className="mt-4 overflow-x-scroll rounded-xl border border-gray-500 p-4 text-sm text-gray-30">
        {children}
      </pre>
    ),
    // Generated
    code: ({ children }) => (
      <code className="text-sm text-gray-30">{children}</code>
    ),
    // Generated
    blockquote: ({ children }) => (
      <blockquote className="mt-4 text-lg italic text-gray-40">
        {children}
      </blockquote>
    ),
    Video,
    Image,
    ...components,
  }
}
