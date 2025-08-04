'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { clearCart } from '@/lib/features/cartSlice';
import { useDispatch } from 'react-redux';

export default function CheckoutSuccess() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className="max-w-md mx-auto text-center py-12">
            <div className="bg-white rounded-lg shadow p-8">
                <div className="text-green-500 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been received.
                </p>
                <div className="space-y-3">
                    <Link
                        href="/orders"
                        className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                    >
                        View Your Orders
                    </Link>
                    <Link
                        href="/"
                        className="block text-blue-600 hover:text-blue-800 py-2 px-4 rounded transition"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}