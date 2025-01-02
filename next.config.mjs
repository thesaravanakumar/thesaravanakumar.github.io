// Import dependencies
import createMDX from '@next/mdx';

// Define the Next.js configuration
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    serverActions: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp', 'image/gif'], // Moved here
  },
};

// Create the MDX configuration
const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    // remarkPlugins: [remarkGfm], // Uncomment if needed
    // rehypePlugins: [],
    // providerImportSource: '@mdx-js/react', // Uncomment if you use MDXProvider
  },
});

// Export the combined configuration
export default withMDX(nextConfig);
