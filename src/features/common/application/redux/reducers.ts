import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '@/src/features/cart/application/redux/cartSlice';
import catalogoReducer from '@/src/features/catalogo/application/redux/catalogoSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    catalogo: catalogoReducer,
});

export default rootReducer;