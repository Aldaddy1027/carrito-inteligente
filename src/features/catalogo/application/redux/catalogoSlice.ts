import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductItems, ICatalogoState } from '@/src/features/catalogo/domain/interfaces/ICatalogoState';

const initialState: ICatalogoState = {
    items: [],
};

const catalogoSlice = createSlice({
    name: 'catalogo',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<IProductItems[]>) {
            state.items = action.payload;
        },
    },
});

export const { setItems } = catalogoSlice.actions;
export default catalogoSlice.reducer; 