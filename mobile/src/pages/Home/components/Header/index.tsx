import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';
import Modal from './components/Modal';

import * as C from './styles';

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = (): void => {
    setOpenModal(true);
  };

  const closeModal = (): void => {
    setOpenModal(false);
  };

  return (
    <C.Container>
      <C.RoundButton onPress={showModal}>
        <Icon name="user" size={25} color="#fff" />
      </C.RoundButton>
      <C.Greetings>Olá, Daniel</C.Greetings>
      <Modal open={openModal} onClose={closeModal} onSelectOption={() => {}} />
    </C.Container>
  );
};

export default Header;
