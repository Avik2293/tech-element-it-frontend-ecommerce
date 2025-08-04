'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { removeFromCart, updateQuantity } from '@/lib/features/cartSlice';
import Link from 'next/link';
import CartItem from '@/components/CartItem';

export default function CartPage() {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

            {items.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">Your cart is empty</p>
                    <Link href="/" className="text-blue-600 hover:underline">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        {items.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onRemove={() => dispatch(removeFromCart(item.id))}
                                onUpdateQuantity={(quantity) =>
                                    dispatch(updateQuantity({ id: item.id, quantity }))
                                }
                            />
                        ))}
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link
                            href="/checkout"
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}