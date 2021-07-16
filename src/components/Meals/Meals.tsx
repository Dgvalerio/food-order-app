import React, { FC } from 'react';

import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals: FC = () => (
  <>
    <MealsSummary />
    <AvailableMeals />
  </>
);

export default Meals;
