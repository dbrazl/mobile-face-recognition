import React from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';

import * as C from './styles';

const Header: React.FC = () => {
  return (
    <C.Container>
      <C.Account>
        <Icon name="user" size={25} color="#fff" />
      </C.Account>
      <C.Greetings>Olá, Daniel</C.Greetings>
    </C.Container>
  );
};

export default Header;
