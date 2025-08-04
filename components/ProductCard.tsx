'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
            <div className="relative aspect-square bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    priority={false} // Only set to true for above-the-fold images
                    placeholder="blur" // Optional: Add blur placeholder
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=" // Simple placeholder
                />
            </div>
            <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-lg font-bold text-gray-800 mb-2">${product.price}</p>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{product.category}</span>
                    <Link
                        href={`/product/${product.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        prefetch={false} // Optional: Disable prefetching if have many product links
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}