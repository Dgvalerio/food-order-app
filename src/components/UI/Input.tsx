import React from 'react';

import { IInput } from '../../interfaces';
import classes from './Input.module.css';

const Input = ({
  label,
  input,
}: {
  label: string;
  input: IInput;
}): JSX.Element => (
  <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input {...input} />
  </div>
);

export default Input;
