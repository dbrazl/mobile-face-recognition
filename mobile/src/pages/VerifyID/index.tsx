import React from 'react';
import {StatusBar} from 'react-native';

import * as C from './styles';

const VerifyID: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <C.Container>
        <C.SafeArea>
          <C.Scroll>
            <C.Title>Verificação facial</C.Title>
            <C.Message>
              Para a sua segurança, precisamos fazer uma verificação facial.
            </C.Message>
            <C.Button>
              <C.ButtonText>Verificar</C.ButtonText>
            </C.Button>
          </C.Scroll>
        </C.SafeArea>
      </C.Container>
    </>
  );
};

export default VerifyID;
