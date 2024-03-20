import React from 'react';
import { Button } from '@mui/material';
import { Product } from '../Types/product.types';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector hook
import { addToCart, removeFromCart } from '../store/slices/cart.slice';
import CartItem from './CartItem';
import { RootState } from '../store/reducer'; // Import RootState type

const Cart: React.FC = () => { // Remove Props type since we'll be using useSelector
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items); // Fetch cart items from the Redux store

  const handleAddToCart = (clickedItem: Product) => {
    dispatch(addToCart(clickedItem));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div> {/* Removed Wrapper component for simplicity */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          ))}
          <Button variant="contained" color="primary">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
