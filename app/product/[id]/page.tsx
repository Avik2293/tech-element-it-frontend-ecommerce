import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '../../../components/AddToCartButton';
import { Product } from '@/types';

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Cache product data for 1 hour
const PRODUCT_CACHE_TTL = 3600;

async function getProduct(id: string): Promise<Product | null> {
    try {
        // const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            next: { revalidate: PRODUCT_CACHE_TTL }
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const product = await getProduct(id);

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: product?.title || 'Product Not Found',
        description: product?.description || 'View this product in our store',
        openGraph: {
            title: product?.title || 'Product Not Found',
            description: product?.description || 'View this product in our store',
            images: product?.image ? [product.image, ...previousImages] : previousImages,
        },
        twitter: {
            card: 'summary_large_image',
            title: product?.title || 'Product Not Found',
            description: product?.description || 'View this product in our store',
            images: product?.image ? [product.image] : [],
        },
    };
}

export async function generateStaticParams() {
    // const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    const products = await fetch('https://fakestoreapi.com/products', {
        next: { revalidate: PRODUCT_CACHE_TTL }
    }).then(res => res.json());

    return products.map((product: Product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) notFound();

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                    <p className="text-gray-600 mb-4">{product.category}</p>
                    <div className="flex items-center mb-6">
                        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            {product.rating.rate} ★ ({product.rating.count} reviews)
                        </span>
                    </div>
                    <p className="mb-6">{product.description}</p>

                    <AddToCartButton product={product} />
                </div>
            </div>
        </main>
    );
}