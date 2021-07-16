import React, { forwardRef } from 'react';

import { IInput } from '../../interfaces';
import classes from './Input.module.css';

const Input = forwardRef(
  (
    {
      label,
      input,
    }: {
      label: string;
      input: IInput;
    },
    ref: React.Ref<any>
  ): JSX.Element => (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  )
);

export default Input;
