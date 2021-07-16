import React from 'react';

import { IMeal } from '../../interfaces';
import classes from './CartItem.module.css';

const CartItem = ({
  price: cartPrice,
  name,
  amount,
  onRemove,
  onAdd,
}: {
  price: number;
  name: string;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
}): JSX.Element => {
  const price = cartPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onRemove}>
          −
        </button>
        <button type="button" onClick={onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
