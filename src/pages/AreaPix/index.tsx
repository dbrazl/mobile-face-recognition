import React from 'react';
import {StatusBar} from 'react-native';
import transper from '../../assets/images/transaction.png';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import * as C from './styles';

const AreaPix: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const functions = [
    {
      icon: <C.Icon source={transper} />,
      label: 'Transferir',
      onPress: () => navigation.navigate('Transfer'),
    },
    {
      icon: '',
      label: 'Função 2',
      onPress: () => {},
    },
    {
      icon: '',
      label: 'Função 3',
      onPress: () => {},
    },
    {
      icon: '',
      label: 'Função 4',
      onPress: () => {},
    },
    {
      icon: '',
      label: 'Função 5',
      onPress: () => {},
    },
    {
      icon: '',
      label: 'Função 6',
      onPress: () => {},
    },
  ];

  const renderItem = ({item}) => {
    return (
      <C.Column>
        <C.Item onPress={item.onPress}>{item.icon}</C.Item>
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
