import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './slices/products.slice'

export interface RootState {
    products: ReturnType< typeof productReducer >;
}

const rootReducer = combineReducers({
    product: productReducer,
});

export default rootReducer;