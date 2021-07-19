import React, { FC, useEffect, useState } from 'react';

import { IMeal } from '../../interfaces';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealsItem/MealItem';

const AvailableMeals: FC = () => {
  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://react-tcg-14-default-rtdb.firebaseio.com/meals.json'
      );

      const data: { id: { description: string; name: string; price: number } } =
        await response.json();

      setMeals(
        Object.entries(data).map((obj) => ({
          id: obj[0],
          ...obj[1],
        }))
      );
    })();
  }, []);

  const mealsList = meals.map(({ id, name, price, description }) => (
    <MealItem
      key={id}
      id={id}
      name={name}
      description={description}
      price={price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
