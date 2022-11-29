import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import * as C from './styles';

const Account: React.FC = () => {
  const functions = [
    {
      icon: <Icon name="barcode-scan" size={30} color="#000" />,
      label: 'Pagar',
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
      <C.Value>R$ 50.000,00</C.Value>
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
