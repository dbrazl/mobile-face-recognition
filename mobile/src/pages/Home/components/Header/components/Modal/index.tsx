import React, {useContext} from 'react';
import {User} from '../../../../../../models/user';
import {UserContext} from '../../../../../../state/user/state';
import {Props} from './@types';

import * as C from './styles';

const Modal: React.FC<Props> = ({
  open = false,
  onClose = () => {},
  onSelectOption = () => {},
}) => {
  const {state} = useContext(UserContext);

  const selectUser = (user: User): void => {
    onSelectOption(user);
  };

  const renderItem = (user: User, index: number) => {
    return (
      <C.Button onPress={selectUser} key={index}>
        <C.Person>{user.name}</C.Person>
      </C.Button>
    );
  };

  return (
    <C.Wrapper isVisible={open} onBackdropPress={onClose}>
      <C.Container>
        {state.users?.map(renderItem)}
        <C.Button onPress={onClose}>
          <C.CloseLabel>Fechar</C.CloseLabel>
        </C.Button>
      </C.Container>
    </C.Wrapper>
  );
};

export default Modal;
