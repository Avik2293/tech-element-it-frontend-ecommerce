'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import Link from 'next/link';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// interface PageProps {
//     params: {
//         id: string;
//     };
// }

// export default function OrderDetailsPage({ params }: { params: { id: string } }) {
export default function OrderDetailsPage(
    { params }: {
        params: { id: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    }) {
    // export default function OrderDetailsPage({ params }: PageProps) {
    const { orders } = useSelector((state: RootState) => state.orders);
    const order = orders.find(o => o.id === params.id);

    if (!order) notFound();

    return (
        <>
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Order #{order.id.slice(0, 8)}</h1>
                    <p className="text-gray-600">
                        Placed on {format(new Date(order.date), 'MMMM d, yyyy')}
                    </p>
                </div>
                <Link href="/orders" className="text-blue-600 hover:text-blue-800">
                    ← Back to Orders
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="p-6 border-b">
                    <h2 className="text-lg font-bold mb-4">Customer Information</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium">Shipping Address</h3>
                            <p className="text-gray-600">{order.shippingAddress}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Contact</h3>
                            <p className="text-gray-600">Name: {order.fullName}</p>
                            <p className="text-gray-600">No.:{order.phoneNumber}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h2 className="text-lg font-bold mb-4">Order Items</h2>
                    <div className="space-y-4">
                        {order.items.map(item => (
                            <div key={item.id} className="flex border-b pb-4 last:border-b-0">
                                <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.title}</h3>
                                    <h3 className="font-light">{item.description}</h3>
                                    <p className="text-gray-600">$ {item.price} × {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">$ {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-gray-50 border-t">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Total</span>
                        <span className="text-xl font-bold">$ {order.totalAmount.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </>
    );
}