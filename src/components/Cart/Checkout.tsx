import React, { FormEvent } from 'react';

import classes from './Checkout.module.css';

const Checkout = ({ onCancel }: { onCancel: () => void }): JSX.Element => {
  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" />
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
