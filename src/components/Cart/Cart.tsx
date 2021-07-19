/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';

import { IMeal } from '../../interfaces';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = ({ onClose }: { onClose: () => void }): JSX.Element => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const {
    totalAmount: cartAmount,
    items,
    addItem,
    removeItem,
    clearCart,
  } = useContext(CartContext);

  const totalAmount = cartAmount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => removeItem(id);

  const cartItemAddHandler = (item: IMeal) => addItem({ ...item, amount: 1 });

  const orderHandler = () => setIsCheckout(true);

  const submitOrderHandler = async ({
    name,
    street,
    city,
    postalCode,
  }: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
  }) => {
    setIsSubmitting(true);

    const response = await fetch(
      'https://react-tcg-14-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: {
            name,
            street,
            city,
            postalCode,
          },
          orderedItems: [items],
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    clearCart();
  };

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

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button
            type="button"
            className={classes['button-alt']}
            onClick={onClose}
          >
            Close
          </button>
          {hasItems && (
            <button
              type="button"
              className={classes.button}
              onClick={orderHandler}
            >
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
