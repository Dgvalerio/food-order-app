import React, { FC } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App: FC = () => (
  <>
    <Cart />
    <Header />
    <main>
      <Meals />
    </main>
  </>
);

export default App;
