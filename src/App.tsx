import React, { FC } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App: FC = () => (
  <div>
    <Header />
    <main>
      <Meals />
    </main>
  </div>
);

export default App;
