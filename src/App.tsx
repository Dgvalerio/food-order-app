import React, { FC, useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App: FC = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => setCartIsShow(true);

  const hideCartHandler = () => setCartIsShow(false);

  return (
    <>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
