import React from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

const HeaderCartButton = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => (
  <button type="button" className={classes.button} onClick={onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>3</span>
  </button>
);

export default HeaderCartButton;
