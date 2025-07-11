import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '@/src/features/cart/application/redux/cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;