import React from 'react';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import Provider from './src/state/provider';

const App = () => {
  return (
    <Provider>
      <Routes />
      <Toast />
    </Provider>
  );
};

export default App;
