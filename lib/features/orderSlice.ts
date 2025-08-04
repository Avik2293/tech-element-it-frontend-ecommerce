import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice';

interface Order {
    id: string;
    // customerName: string;
    fullName: string;
    shippingAddress: string;
    phoneNumber: string;
    items: CartItem[];
    totalAmount: number;
    date: string;
}

interface OrdersState {
    orders: Order[];
}

const initialState: OrdersState = {
    orders: [],
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        placeOrder: (state, action: PayloadAction<Order>) => {
            state.orders.unshift(action.payload);
        },
    },
});

export const { placeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;