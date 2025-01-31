# thesaravanakumar.github.io
## Project Structure & Technologies:

My project uses Next.js, a React framework, which in turn uses React. Node.js is the runtime environment for the server-side aspects of your Next.js application

### React: 
A JavaScript library for building user interfaces (UIs). It manages the dynamic parts of your website, updating the screen without full page reloads.

### Next.js: 
A React framework that adds server-side rendering (SSR), static site generation (SSG), API routes, and other features on top of React. It simplifies building complex web applications.

### Node.js: 
A JavaScript runtime environment that lets you run JavaScript code outside of a web browser, primarily on the server. Next.js uses Node.js to handle server-side rendering and API requests.

### TypeScript: 
A superset of JavaScript that adds static typing. This helps catch errors during development and makes your code more maintainable.

## Development Workflow:

### Coding: 
I wrote my React components and pages using Next.js conventions in the src directory (and potentially MDX files for content). You use TypeScript for type safety.

## Summary: 
Node.js provides the server-side environment where Next.js runs. Next.js builds upon React to provide server-side features like SSR and API routes. React handles the dynamic, interactive UI in the browser. TypeScript adds type safety to the entire development process.

### Files
- public: This directory holds static assets that will be served directly by your web server. These files are not processed by Next.js during the build process. Examples include images, fonts, and other files you want to serve directly without any special processing.
- src: source code lives
- mdx-components.tsx: This file likely defines custom components for MDX (Markdown with JSX). MDX lets you write markdown files that include React components, allowing you to create reusable content components within markdown files. This is often used for blog posts or documentation.
- tailwind.config.ts: This file configures Tailwind CSS, a utility-first CSS framework. Tailwind provides a set of pre-defined CSS classes that you can use to style your components quickly and consistently.
- This file (src/app/og/route.tsx) is a Next.js API route that generates Open Graph (OG) images dynamically. Open Graph images are the images you see when a link to a website is shared on social media platforms like Facebook, Twitter, etc. This route creates a custom OG image for this specific website. An API route that dynamically generates Open Graph images. This route runs on Node.js on the server. 


### ESmodules
- ES modules (ECMAScript modules) are a standard way to import and export functionality between JavaScript files. They're a core feature of modern JavaScript, offering a cleaner and more structured approach to managing code compared to older methods like CommonJS modules (often used in Node.js

### SVG
- SVG stands for Scalable Vector Graphics. It's an XML-based vector image format for two-dimensional graphics. Unlike raster images (like JPEGs or PNGs), which are made up of pixels, SVG images are defined by paths, shapes, and text. This makes them incredibly versatile and powerful for certain types of images.

### OG
- OG stands for Open Graph. It's a protocol that allows web developers to specify metadata for their web pages that can be used by social media platforms like Facebook, Twitter, LinkedIn, and others. This metadata helps these platforms display rich previews of your web page when a link to it is shared.

