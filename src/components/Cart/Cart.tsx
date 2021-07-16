/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';

import { IMeal } from '../../interfaces';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onClose }: { onClose: () => void }): JSX.Element => {
  const { totalAmount: cartAmount, items } = useContext(CartContext);

  const totalAmount = cartAmount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => '';
  const cartItemAddHandler = (item: IMeal) => '';

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes['button-alt']}
          onClick={onClose}
        >
          Close
        </button>
        {hasItems && (
          <button type="button" className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
