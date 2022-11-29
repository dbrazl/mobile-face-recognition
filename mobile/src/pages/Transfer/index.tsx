import React, {useContext, useState} from 'react';
import {StatusBar} from 'react-native';
import {UserContext} from '../../state/user/state';
import Icon from 'react-native-vector-icons/dist/Feather';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import * as C from './styles';

const Transfer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const {state} = useContext(UserContext);
  const [amount, setAmount] = useState();

  const getPrice = (value: number): string => {
    return `R$ ${value?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <C.Container>
        <C.SafeArea>
          <C.Scroll>
            <C.Title>Qual é o valor da transferência?</C.Title>
            <C.Balance>
              <C.Message>Saldo disponível em conta </C.Message>
              <C.Bold>{getPrice(state.user.balance)}</C.Bold>
            </C.Balance>
            <C.Field
              placeholder="R$ 0,00"
              autoFocus
              keyboardType="number-pad"
              prefix="R$"
              value={amount}
              onChangeValue={setAmount}
            />
          </C.Scroll>
        </C.SafeArea>
        <C.Next
          onPress={() =>
            navigation.navigate('TransferContacts', {
              amount,
            })
          }>
          <Icon name="arrow-right" size={30} color="#fff" />
        </C.Next>
      </C.Container>
    </>
  );
};

export default Transfer;
