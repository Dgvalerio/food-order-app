export interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface IInput {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}
