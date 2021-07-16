import React from 'react';

import classes from './MealItem.module.css';

const MealItem = ({ name, description, price }) => {
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
      <div />
    </li>
  );
};

export default MealItem;
