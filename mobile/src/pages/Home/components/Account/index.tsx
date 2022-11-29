import React, {useContext} from 'react';
import pix from '../../../../assets/images/pix.png';
import {UserContext} from '../../../../state/user/state';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import * as C from './styles';

const Account: React.FC = () => {
  const {state} = useContext(UserContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const functions = [
    {
      icon: <C.Icon source={pix} />,
      label: 'Área Pix',
      onPress: () => navigation.navigate('Pix'),
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

  const getPrice = (value: number): string => {
    return `R$ ${value?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const renderItem = ({item}) => {
    return (
      <C.Column>
        <C.Item onPress={item.onPress}>{item.icon}</C.Item>
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
