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
  if (action.type === 'ADD') {
    const existingCartItemIndex = items.findIndex(
      (item) => item.id === action.item.id
    );

    const item = items[existingCartItemIndex];
    let updateItem;
    let updateItems;

    if (item) {
      updateItem = {
        ...item,
        amount: item.amount + action.item.amount,
      };
      updateItems = [...items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItem = { ...action.item };
      updateItems = [...items, updateItem];
    }

    return {
      items: updateItems,
      totalAmount: totalAmount + action.item.amount * action.item.price,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = items.findIndex(
      (item) => item.id === action.id
    );

    const item = items[existingCartItemIndex];
    const updatedTotalAmount = totalAmount - item.price;
    let updatedItems;

    if (item.amount === 1) {
      updatedItems = items.filter((cItem) => cItem.id !== action.id);
    } else {
      const updatedItem = { ...item, amount: item.amount - 1 };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
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
