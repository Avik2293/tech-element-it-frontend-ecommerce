import Head from 'next/head';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
}

export default function SEO({
    title,
    description = 'An e-commerce store built with Next.js',
    keywords = 'ecommerce, shopping, online store',
    image,
}: SEOProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Head>
    );
}