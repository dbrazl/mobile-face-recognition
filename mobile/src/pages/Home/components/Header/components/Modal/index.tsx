import React from 'react';
import {Props} from './@types';

import * as C from './styles';

const Modal: React.FC<Props> = ({
  open = false,
  onClose = () => {},
  onSelectOption = () => {},
}) => {
  return (
    <C.Wrapper isVisible={open} onBackdropPress={onClose}>
      <C.Container>
        <C.Button onPress={() => onSelectOption('Daniel')}>
          <C.Person>Daniel</C.Person>
        </C.Button>
        <C.Button onPress={() => onSelectOption('Camila')}>
          <C.Person>Camila</C.Person>
        </C.Button>
        <C.Button onPress={() => onSelectOption('Renan')}>
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
