import React from 'react';
import {StatusBar} from 'react-native';
import transper from '../../assets/images/transaction.png';

import * as C from './styles';

const AreaPix: React.FC = () => {
  const functions = [
    {
      icon: <C.Icon source={transper} />,
      label: 'Transferir',
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
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <C.Container>
        <C.SafeArea>
          <C.Scroll>
            <C.Title>Área Pix</C.Title>
            <C.Message>
              Envie e receba pagamento a qualquer hora e dia da semana, sem
              pagar nada por isso.
            </C.Message>
            <C.List
              data={functions}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              horizontal
            />
          </C.Scroll>
        </C.SafeArea>
      </C.Container>
    </>
  );
};

export default AreaPix;
