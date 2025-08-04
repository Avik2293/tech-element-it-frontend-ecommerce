'use client';

import { CartItem as CartItemType } from '@/lib/features/cartSlice';
import Image from 'next/image';

interface CartItemProps {
    item: CartItemType;
    onRemove: () => void;
    onUpdateQuantity: (quantity: number) => void;
}

export default function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
    return (
        <div className="flex border-b last:border-b-0 p-4">
            <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden mr-4">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="mt-2 flex items-center">
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(parseInt(e.target.value) || 1)}
                        className="w-16 border rounded px-2 py-1"
                    />
                    <button
                        onClick={onRemove}
                        className="ml-4 text-red-600 hover:text-red-800"
                    >
                        Remove This Item X
                    </button>
                </div>
            </div>
            <div className="text-right">
                <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
}