# E-Commerce Store with Next.js

A minimal but fully functional e-commerce frontend built with Next.js, Redux Toolkit, Tailwind CSS, and TypeScript.

## Features

- Product listing from FakeStoreAPI
- Product details page with "Add to Cart" functionality
- Shopping cart management with Redux
- Checkout process with form validation
- Order history page
- SEO optimization with dynamic meta tags, sitemap, and robots.txt

## SEO Techniques Used

1. **Dynamic Meta Tags**: Each page (especially product pages) has unique title and description
2. **Static Generation**: Product pages are pre-rendered at build time using `getStaticProps` and `getStaticPaths`
3. **Semantic HTML**: Proper use of `<main>`, `<section>`, `<article>` etc.
4. **Image Optimization**: Next.js Image component with proper alt tags
5. **Clean URLs**: SEO-friendly URLs like `/product/1`, `/orders`
6. **Sitemap.xml**: Automatically generated with all product pages
7. **Robots.txt**: Controls search engine crawling behavior

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install




## Additional Notes

1. The implementation uses Next.js 13+ with the App Router for better routing and data fetching capabilities.
2. Redux Toolkit is used for state management to handle cart and orders.
3. TypeScript ensures type safety throughout the application.
4. Tailwind CSS provides utility-first styling for a responsive design.
5. SEO best practices are implemented including:
   - Dynamic meta tags for each page
   - Proper semantic HTML structure
   - Image optimization with alt tags
   - Sitemap and robots.txt for search engines
   - Static generation for product pages for better performance and SEO

The application provides a complete e-commerce experience from browsing products to checkout and order history, all while following modern web development practices and SEO optimization techniques.




robots.txt:
Allows all crawlers to access most of your site
Blocks sensitive pages like checkout and cart
Points to your sitemap

sitemap.xml:
Automatically generates URLs for all products
Includes proper lastModified dates
Sets priority and change frequency
Uses TypeScript for type safety




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
