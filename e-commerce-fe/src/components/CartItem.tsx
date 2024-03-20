import React from 'react';
import { Button, Typography } from '@mui/material';
import { Product } from '../Types/product.types';
import { Wrapper } from './cartItem.style';

type Props = {
  item: Product;
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
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
            onClick={handleRemoveFromCart}
          >
            -
          </Button>
          <Typography>{item.amount}</Typography>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={handleAddToCart}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.images[0]} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
