import React from 'react';
import {Props} from './@types';

import * as C from './styles';

const Modal: React.FC<Props> = ({
  open = false,
  onClose = () => {},
  onSelectOption = () => {},
}) => {
  const sendDanielData = (): void => {
    onSelectOption({
      name: 'Daniel',
      balance: 50000,
    });
  };

  const sendCamilaData = (): void => {
    onSelectOption({
      name: 'Camila',
      balance: 80000,
    });
  };

  const sendRenanData = (): void => {
    onSelectOption({
      name: 'Renan',
      balance: 20000,
    });
  };

  return (
    <C.Wrapper isVisible={open} onBackdropPress={onClose}>
      <C.Container>
        <C.Button onPress={sendDanielData}>
          <C.Person>Daniel</C.Person>
        </C.Button>
        <C.Button onPress={sendCamilaData}>
          <C.Person>Camila</C.Person>
        </C.Button>
        <C.Button onPress={sendRenanData}>
          <C.Person>Renan</C.Person>
        </C.Button>
        <C.Button onPress={onClose}>
          <C.CloseLabel>Fechar</C.CloseLabel>
        </C.Button>
      </C.Container>
    </C.Wrapper>
  );
};

export default Modal;
