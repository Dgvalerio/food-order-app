/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import { ICartContext, IMeal } from '../interfaces';
import CartContext from './cart-context';

const CartProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const addItemToCartHandler = (item: IMeal) => {};
  const removeItemFromCartHandler = (id: string) => {};

  const cartContext: ICartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
