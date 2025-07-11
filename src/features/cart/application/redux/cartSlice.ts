import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, ICartState } from '@/src/features/cart/domain/interfaces/ICartState';

const initialState: ICartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>) {
            state.items.push(action.payload);
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer; 