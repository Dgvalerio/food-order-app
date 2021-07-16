import React, { FC } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header: FC = () => (
  <>
    <header className={classes.header}>
      <h1>ReacttMeals</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  </>
);

export default Header;
