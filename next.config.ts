import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import createNextIntl from 'next-intl/plugin'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const withNextIntl = createNextIntl('./src/i18n/request.ts')

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default withNextIntl(withMDX(nextConfig))
