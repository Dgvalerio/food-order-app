/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';

import { ICartContext } from '../../interfaces';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

const HeaderCartButton = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const { items }: ICartContext = useContext(CartContext);

  const numbersOfCartItems = items.map((item) => item.amount);

  const numberOfCartItems = numbersOfCartItems.reduce(
    (currentNumber, nextNumber) => currentNumber + nextNumber,
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
