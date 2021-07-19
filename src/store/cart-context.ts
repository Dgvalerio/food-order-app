/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ICartContext, IMeal } from '../interfaces';

const defaultValue: ICartContext = {
  items: [],
  totalAmount: 0,
  addItem: (item: IMeal) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
};

const CartContext = React.createContext(defaultValue);

export default CartContext;
