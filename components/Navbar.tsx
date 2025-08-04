'use client';

import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';

export default function Navbar() {
    const cartItemCount = useAppSelector(
        (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-800">
                    E-Commerce
                </Link>

                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                    <Link
                        href="/cart"
                        className="text-gray-600 hover:text-gray-900 relative"
                    >
                        Cart
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                    <Link href="/orders" className="text-gray-600 hover:text-gray-900">
                        Orders
                    </Link>
                </div>
            </div>
        </nav>
    );
}