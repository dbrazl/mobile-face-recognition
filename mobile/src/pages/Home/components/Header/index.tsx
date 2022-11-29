import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';
import {User} from '../../../../models/user';
import {Actions} from '../../../../state/user/@types/actions';
import {UserContext} from '../../../../state/user/state';
import Modal from './components/Modal';

import * as C from './styles';

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const {state, dispatch} = useContext(UserContext);

  const showModal = (): void => {
    setOpenModal(true);
  };

  const closeModal = (): void => {
    setOpenModal(false);
  };

  const updateUserState = (user: User): void => {
    dispatch({
      type: Actions.SET_USER,
      payload: {
        user,
      },
    });

    closeModal();
  };

  return (
    <C.Container>
      <C.RoundButton onPress={showModal}>
        <Icon name="user" size={25} color="#fff" />
      </C.RoundButton>
      <C.Greetings>Olá, {state.user.name}</C.Greetings>
      <Modal
        open={openModal}
        onClose={closeModal}
        onSelectOption={updateUserState}
      />
    </C.Container>
  );
};

export default Header;
