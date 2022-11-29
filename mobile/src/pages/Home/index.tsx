import React from 'react';
import Header from './components/Header';
import {StatusBar} from 'react-native';

import * as C from './styles';

const Home: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#98a8f8" />
      <C.Container>
        <C.SafeArea>
          <C.Scroll>
            <Header />
          </C.Scroll>
        </C.SafeArea>
      </C.Container>
    </>
  );
};

export default Home;
