import React from 'react';

import classes from './Card.module.css';

const Card = ({ children }: { children: React.ReactElement }): JSX.Element => (
  <div className={classes.card}>{children}</div>
);

export default Card;
