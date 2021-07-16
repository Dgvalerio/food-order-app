import React from 'react';

import { IMeal } from '../../../interfaces';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }: IMeal): JSX.Element => {
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
