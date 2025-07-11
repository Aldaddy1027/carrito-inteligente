import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/src/features/cart/application/redux/cartSlice';
import catalogoReducer from '@/src/features/catalogo/application/redux/catalogoSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        catalogo: catalogoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 