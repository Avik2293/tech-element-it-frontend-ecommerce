import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'E-Commerce Store Cart',
    description: 'An e-commerce store built with Next.js',
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}