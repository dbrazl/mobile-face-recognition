import React, {useContext} from 'react';
import pix from '../../../../assets/images/pix.png';
import {UserContext} from '../../../../state/user/state';

import * as C from './styles';

const Account: React.FC = () => {
  const {state} = useContext(UserContext);

  const functions = [
    {
      icon: <C.Icon source={pix} />,
      label: 'Área Pix',
    },
    {
      icon: '',
      label: 'Função 2',
    },
    {
      icon: '',
      label: 'Função 3',
    },
    {
      icon: '',
      label: 'Função 4',
    },
    {
      icon: '',
      label: 'Função 5',
    },
    {
      icon: '',
      label: 'Função 6',
    },
  ];

  const getPrice = (value: number): string => {
    return `R$ ${value?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const renderItem = ({item}) => {
    return (
      <C.Column>
        <C.Item>{item.icon}</C.Item>
        <C.LabelItem>{item.label}</C.LabelItem>
      </C.Column>
    );
  };

  return (
    <C.Container>
      <C.Label>Conta</C.Label>
      <C.Value>{getPrice(state.user.balance)}</C.Value>
      <C.List
        data={functions}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
      />
    </C.Container>
  );
};

export default Account;
