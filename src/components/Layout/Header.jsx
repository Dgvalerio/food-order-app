import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => (
  <>
    <header className={classes.header}>
      <h1>ReacttMeals</h1>
      <button type="button">Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  </>
);

export default Header;
