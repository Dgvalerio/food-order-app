export interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ICartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
}

export interface IInput {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}

export interface ICartContext {
  items: ICartItem[] | [] | never[];
  totalAmount: number;
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
}
