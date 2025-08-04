'use client';

import { addToCart } from '@/lib/features/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import { Product } from '@/types';

export default function AddToCartButton({ product }: { product: Product }) {
    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
            Add to Cart
        </button>
    );
}