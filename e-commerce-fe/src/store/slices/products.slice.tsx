import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Types/product.types";

interface ProductsState {
    products: Product[];
}

const productsSlice = createSlice({
    name: 'products',
    initialState: { } as ProductsState,
    reducers: {
        setProducts: (state, action: PayloadAction<{ products: Product[];}>) => {
            state = action.payload;
        },
    },

});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;