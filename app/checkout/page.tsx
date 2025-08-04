'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { placeOrder } from '@/lib/features/orderSlice';

export default function CheckoutPage() {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        shippingAddress: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        shippingAddress: '',
        phoneNumber: '',
    });

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const validate = () => {
        const newErrors = {
            fullName: !formData.fullName.trim() ? 'Full name is required' : '',
            shippingAddress: !formData.shippingAddress.trim() ? 'Address is required' : '',
            phoneNumber: !formData.phoneNumber.trim()
                ? 'Phone is required'
                : !/^\d+$/.test(formData.phoneNumber)
                    ? 'Only digits allowed'
                    : ''
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            dispatch(placeOrder({
                ...formData,
                items,
                totalAmount: total,
                id: Date.now().toString(),
                date: new Date().toISOString(),
            }));
            router.push('/checkout/success');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
                        <h2 className="text-xl font-bold mb-4">Shipping Information</h2>

                        <div>
                            <label htmlFor="fullName" className="block mb-1 font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full border rounded px-3 py-2 ${errors.fullName ? 'border-red-500' : ''}`}
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label htmlFor="shippingAddress" className="block mb-1 font-medium">
                                Shipping Address
                            </label>
                            <textarea
                                id="shippingAddress"
                                name="shippingAddress"
                                value={formData.shippingAddress}
                                onChange={handleChange}
                                rows={3}
                                className={`w-full border rounded px-3 py-2 ${errors.shippingAddress ? 'border-red-500' : ''}`}
                            />
                            {errors.shippingAddress && <p className="text-red-500 text-sm mt-1">{errors.shippingAddress}</p>}
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block mb-1 font-medium">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className={`w-full border rounded px-3 py-2 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={items.length === 0}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition disabled:opacity-50"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

                <div className="bg-white rounded-lg shadow p-6 h-fit">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-2 mb-6">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between">
                                <span>{item.title} × {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}