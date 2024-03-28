import React from 'react';
import { Button, Typography } from '@mui/material';
import { Product } from '../Types/product.types';
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount } from '../store/slices/cart.slice';
import { Wrapper } from '../styles/cartItem.style';

type Props = {
  item: Product;
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void; 
};

const CartItem: React.FC<Props> = ({ item, removeFromCart }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  };

  const handleIncreaseAmount = () => {
    dispatch(increaseAmount(item.id));
  };

  const handleDecreaseAmount = () => {
    dispatch(decreaseAmount(item.id));
  };

  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={handleDecreaseAmount}
          >
            -
          </Button>
          <Typography>{item.amount}</Typography>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={handleIncreaseAmount}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.images[0]} alt={item.title} />
      <Button
        size="small"
        disableElevation
        variant="contained"
        onClick={handleRemoveFromCart}
      >
        Remove
      </Button>
    </Wrapper>
  );
};

export default CartItem;
