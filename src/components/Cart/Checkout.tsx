import React, { FormEvent, useRef } from 'react';

import classes from './Checkout.module.css';

const Checkout = ({ onCancel }: { onCancel: () => void }): JSX.Element => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredPostal = postalInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={postalInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
