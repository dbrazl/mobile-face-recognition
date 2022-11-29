import React from 'react';
import Home from './src/pages/Home';
import Provider from './src/state/provider';

const App = () => {
  return (
    <Provider>
      <Home />
    </Provider>
  );
};

export default App;
