import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './slices/products.slice'
import cartReducer from './slices/cart.slice'

export interface RootState {
    products: ReturnType< typeof productReducer >;
    cart: ReturnType< typeof cartReducer >;
}

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

export default rootReducer;