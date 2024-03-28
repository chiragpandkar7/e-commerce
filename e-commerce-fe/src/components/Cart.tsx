import React from 'react';
import { Button, Typography } from '@mui/material';
import { Product } from '../Types/product.types';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart, removeFromCart } from '../store/slices/cart.slice';
import CartItem from './CartItem';
import { RootState } from '../store/reducer'; 
import { Wrapper } from '../styles/cart.style';


const Cart: React.FC = () => { 
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items); 

  const handleAddToCart = (clickedItem: Product) => {
    dispatch(addToCart(clickedItem));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.amount, 0);

  return (
    <Wrapper>
    <div> 
      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
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
          <Typography >
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </Typography>
          <Button variant="contained" color="primary">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
    </Wrapper>
  );
};

export default Cart;
