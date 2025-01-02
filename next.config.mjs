/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    // Disable serverActions since they are not supported with static exports
    serverActions: false,
  },
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX(nextConfig);
