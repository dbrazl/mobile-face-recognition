import React from 'react';
import Routes from './src/routes';
import Provider from './src/state/provider';

const App = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
};

export default App;
