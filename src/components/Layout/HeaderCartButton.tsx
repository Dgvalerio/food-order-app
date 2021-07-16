/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';

import { ICartContext } from '../../interfaces';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

const HeaderCartButton = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => {
  const { items }: ICartContext = useContext(CartContext);

  const numbersOfCartItems = items.map((item) => item.amount);

  const numberOfCartItems = numbersOfCartItems.reduce(
    (currentNumber, nextNumber) => currentNumber + nextNumber,
    0
  );

  return (
    <button type="button" className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
