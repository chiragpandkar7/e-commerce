import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from "../../Types/product.types";

interface CartState {
    items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.items.push({ ...action.payload, amount: 1 }); // Add amount field when adding to cart
      } else {
        state.items[index].amount++; // Increase amount if item already exists in cart
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items[index].amount++;
      }
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1 && state.items[index].amount > 1) {
        state.items[index].amount--;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseAmount, decreaseAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
