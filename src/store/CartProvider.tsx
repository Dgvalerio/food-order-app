import React, { ReactNode, useReducer } from 'react';

import { ICartContext, ICartItem } from '../interfaces';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

interface IState {
  items: ICartItem[] | [];
  totalAmount: number;
}

type Action = { type: 'ADD'; item: ICartItem } | { type: 'REMOVE'; id: string };

const cartReducer = ({ items, totalAmount }: IState, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return {
        items: [...items, action.item],
        totalAmount: totalAmount + action.item.amount * action.item.price,
      };
    case 'REMOVE':
      return defaultCartState;
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: ICartItem) =>
    dispatchCartAction({ type: 'ADD', item });

  const removeItemFromCartHandler = (id: string) =>
    dispatchCartAction({ type: 'REMOVE', id });

  const cartContext: ICartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
