import React, { FC, useEffect, useState } from 'react';

import { IMeal } from '../../interfaces';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealsItem/MealItem';

const AvailableMeals: FC = () => {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-tcg-14-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) throw new Error('Something went wrong!');

      const data: {
        id: { description: string; name: string; price: number };
      } = await response.json();

      setMeals(
        Object.entries(data).map((obj) => ({
          id: obj[0],
          ...obj[1],
        }))
      );
    };

    fetchMeals()
      .catch((e) => setHttpError(e.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

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
